import { PricingTier } from "@/constants/pricing-tier";
import { IBillingFrequency } from "@/constants/billing-frequency";
import { FeaturesList } from "@/components/pricing/FeaturesList";
import { PriceAmount } from "@/components/pricing/PriceAmount";
import { PriceTitle } from "@/components/pricing/PriceTitle";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  loading: boolean;
  frequency: IBillingFrequency;
  priceMap: Record<string, string>;
}

export function PriceCards({ loading, frequency, priceMap }: Props) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 isolate">
      {PricingTier.map((tier) => (
        <div
          key={tier.id}
          className={cn(
            "rounded-lg bg-background/70 backdrop-blur-sm overflow-hidden"
          )}
        >
          <div className="flex flex-col gap-5 rounded-t-lg pricing-card-border p-8">
            {tier.featured}
            <PriceTitle tier={tier} />
            <PriceAmount
              loading={loading}
              tier={tier}
              priceMap={priceMap}
              value={frequency.value}
              priceSuffix={frequency.priceSuffix}
            />
            <div className="border-t border-border my-4" />
            <div className="text-[16px] leading-[24px]">
              {tier.description}
            </div>
          </div>

          <div className="px-8 mb-8">
            <Link href={`/checkout/${tier.priceId[frequency.value]}`}
               className="block w-full text-center py-3 rounded bg-[#182222] text-white font-medium hover:bg-opacity-90 transition">
                Get started
            </Link>
          </div>

          <FeaturesList tier={tier} />
        </div>
      ))}
    </div>
  );
}
