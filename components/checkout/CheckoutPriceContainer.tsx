import { CheckoutEventsData } from "@paddle/paddle-js/types/checkout/events";
import { formatMoney } from "@/utils/paddle/parse-money";
import { formatBillingCycle } from "@/utils/paddle/data-helpers";
import { CheckoutPriceAmount } from "./CheckoutPriceAmount";

interface Props {
  checkoutData: CheckoutEventsData | null;
}

export function CheckoutPriceContainer({ checkoutData }: Props) {
  const recurringTotal = checkoutData?.recurring_totals?.total;
  const billingCycle = checkoutData?.items.find(i => i.billing_cycle)
    ?.billing_cycle;

  return (
    <>
      <div className="text-base font-semibold">Order summary</div>
      <CheckoutPriceAmount checkoutData={checkoutData} />
      {recurringTotal !== undefined ? (
        billingCycle && (
          <div className="pt-4 text-base font-medium text-muted-foreground">
            then {formatMoney(recurringTotal, checkoutData.currency_code)}{" "}
            {formatBillingCycle(billingCycle)}
          </div>
        )
      ) : (
        <div className="mt-4 h-5 w-full bg-border animate-pulse rounded" />
      )}
    </>
  );
}
