export const PRICE_PKR=799, PAID_DAYS=31, FREE_DAYS=31;
export function addDays(d:Date,n:number){const x=new Date(d);x.setUTCDate(x.getUTCDate()+n);return x}
export function isActive(endAt:Date,now=new Date()){return endAt.getTime()>now.getTime()}
