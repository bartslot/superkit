import { CheckoutEventsData } from "@paddle/paddle-js/types/checkout/events";
import { formatMoney } from "@/utils/paddle/parse-money";
import { QuantityField } from "./QuantityField";

interface LoadingTextProps {
  value: number | undefined;
  currencyCode: string | undefined;
}

function LoadingText({ value, currencyCode }: LoadingTextProps) {
  if (value === undefined) {
    return (
      <div className="h-5 w-20 bg-border animate-pulse rounded" />
    );
  }
  return <>{formatMoney(value, currencyCode)}</>;
}

interface Props {
  checkoutData: CheckoutEventsData | null;
  quantity: number;
  handleQuantityChange: (quantity: number) => void;
}

export function CheckoutLineItems({
  checkoutData,
  quantity,
  handleQuantityChange,
}: Props) {
  const item = checkoutData?.items?.[0];
  return (
    <>
      <div className="md:pt-12 text-base font-medium">
        {item?.price_name}
      </div>

      <QuantityField
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
      />

      {/* Separator */}
      <div className="my-6 border-t border-border opacity-50" />

      {/* Subtotal */}
      <div className="pt-6 flex justify-between">
        <span className="text-base font-medium text-muted-foreground">
          Subtotal
        </span>
        <span className="text-base font-semibold">
          <LoadingText
            currencyCode={checkoutData?.currency_code}
            value={checkoutData?.totals.subtotal}
          />
        </span>
      </div>

      {/* Tax */}
      <div className="pt-6 flex justify-between">
        <span className="text-base font-medium text-muted-foreground">
          Tax
        </span>
        <span className="text-base font-semibold">
          <LoadingText
            currencyCode={checkoutData?.currency_code}
            value={checkoutData?.totals.tax}
          />
        </span>
      </div>

      {/* Separator */}
      <div className="my-6 border-t border-border opacity-50" />

      {/* Due today */}
      <div className="pt-6 flex justify-between">
        <span className="text-base font-medium text-muted-foreground">
          Due today
        </span>
        <span className="text-base font-semibold">
          <LoadingText
            currencyCode={checkoutData?.currency_code}
            value={checkoutData?.totals.total}
          />
        </span>
      </div>
    </>
  );
}
