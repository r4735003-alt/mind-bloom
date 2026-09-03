export const FREE_DAYS = 31;
export const PAID_DAYS = 31;
export const PRICE_PKR = 799;
export const PAYMENT_METHOD = "NAYAPAY";

export function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

export function isActive(endAt: Date, now = new Date()) {
  return endAt.getTime() > now.getTime();
}

/**
 * Approval rule:
 * subscriptionStart = approval timestamp
 * subscriptionEnd = approval timestamp + 31 days
 */
export function activate31Days(approvedAt = new Date()) {
  return {
    startAt: approvedAt,
    endAt: addDays(approvedAt, PAID_DAYS),
  };
}
