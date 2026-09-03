import { prisma } from '@/lib/prisma';
export async function getEntitlement(userId:string){
 const now=new Date(); const user=await prisma.user.findUnique({where:{id:userId},select:{createdAt:true}}); if(!user) return {active:false,source:'NONE' as const,endAt:now,daysRemaining:0};
 const paid=await prisma.subscription.findFirst({where:{userId,endAt:{gt:now}},orderBy:{endAt:'desc'}});
 const freeEnd=new Date(user.createdAt.getTime()+31*86400000); const endAt=paid?.endAt??freeEnd;
 return {active:endAt>now,source:paid?'PAID':'FREE' as const,endAt,daysRemaining:Math.max(0,Math.ceil((endAt.getTime()-now.getTime())/86400000))};
}
export async function requireActiveAccess(userId:string){const e=await getEntitlement(userId); if(!e.active) throw new Error('SUBSCRIPTION_REQUIRED'); return e;}
