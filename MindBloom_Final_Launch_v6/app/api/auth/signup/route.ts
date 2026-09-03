import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/auth";
const schema=z.object({name:z.string().trim().min(2).max(80),email:z.string().email().max(160),password:z.string().min(8).max(72),ageBand:z.string().min(1)});
export async function POST(req:Request){const p=schema.safeParse(await req.json().catch(()=>null));if(!p.success)return NextResponse.json({error:"Please enter valid account details."},{status:400});const {name,email,password,ageBand}=p.data;const key=email.toLowerCase();if(await prisma.user.findUnique({where:{email:key}}))return NextResponse.json({error:"An account with this email already exists."},{status:409});const passwordHash=await bcrypt.hash(password,12);const user=await prisma.user.create({data:{name,email:key,passwordHash,role:"PARENT",children:{create:{name:"My child",ageBand,focus:"Communication & independence"}}}});await createSession(user);return NextResponse.json({ok:true});}
