import { CheckoutLineItems } from '@/components/checkout/checkout-line-items';
import { CheckoutPriceContainer } from '@/components/checkout/checkout-price-container';
import { CheckoutPriceAmount } from '@/components/checkout/checkout-price-amount';
import { Separator } from '@/components/ui/separator';
import { CheckoutEventsData } from '@paddle/paddle-js/types/checkout/events';

interface Props {
  checkoutData: CheckoutEventsData | null;
  quantity: number;
  handleQuantityChange: (quantity: number) => void;
}

export function PriceSection({ checkoutData, handleQuantityChange, quantity }: Props) {
  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block">
        <CheckoutPriceContainer checkoutData={checkoutData} />
        <CheckoutLineItems
          handleQuantityChange={handleQuantityChange}
          checkoutData={checkoutData}
          quantity={quantity}
        />
      </div>

      {/* Mobile view without accordion */}
      <div className="block md:hidden">
        <CheckoutPriceAmount checkoutData={checkoutData} />
        <Separator className="relative bg-border/50 mt-6 checkout-order-summary-mobile-yellow-highlight" />
        {/* Always show order summary on mobile */}
        <div className="mt-4">
          <h3 className="text-base font-medium text-foreground mb-2">Order summary</h3>
          <CheckoutLineItems
            handleQuantityChange={handleQuantityChange}
            checkoutData={checkoutData}
            quantity={quantity}
          />
        </div>
      </div>
    </>
  );
}
