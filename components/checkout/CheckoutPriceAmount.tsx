import { CheckoutEventsData } from "@paddle/paddle-js/types/checkout/events";
import { formatMoney } from "@/utils/paddle/parse-money";

interface Props {
  checkoutData: CheckoutEventsData | null;
}

export function CheckoutPriceAmount({ checkoutData }: Props) {
  const total = checkoutData?.totals.total;
  if (total === undefined) {
    return (
      <div className="mt-8 h-12 w-full bg-border animate-pulse rounded" />
    );
  }
  return (
    <div className="pt-8 flex items-end gap-2">
      <span className="text-5xl">
        {checkoutData && formatMoney(total, checkoutData.currency_code)}
      </span>
      <span className="text-base leading-4">inc. tax</span>
    </div>
  );
}
