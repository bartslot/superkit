import { CheckoutEventsData } from "@paddle/paddle-js/types/checkout/events";
import { CheckoutPriceContainer } from "./CheckoutPriceContainer";
import { CheckoutLineItems } from "./CheckoutLineItems";
import { CheckoutPriceAmount } from "./CheckoutPriceAmount";

interface Props {
  checkoutData: CheckoutEventsData | null;
  quantity: number;
  handleQuantityChange: (quantity: number) => void;
}

export function PriceSection({
  checkoutData,
  quantity,
  handleQuantityChange,
}: Props) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <CheckoutPriceContainer checkoutData={checkoutData} />
        <CheckoutLineItems
          checkoutData={checkoutData}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
        />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <CheckoutPriceAmount checkoutData={checkoutData} />

        {/* Separator */}
        <div className="my-6 border-t border-border opacity-50" />

        <div className="mt-4">
          <h3 className="text-base font-medium text-foreground mb-2">
            Order summary
          </h3>
          <CheckoutLineItems
            checkoutData={checkoutData}
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
          />
        </div>
      </div>
    </>
  );
}
