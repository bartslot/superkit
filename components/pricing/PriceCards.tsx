import { PricingTier } from "@/constants/pricing-tier";
import { IBillingFrequency } from "@/constants/billing-frequency";
import { FeaturesList } from "@/components/pricing/FeaturesList";
import { PriceAmount } from "@/components/pricing/PriceAmount";
import { PriceTitle } from "@/components/pricing/PriceTitle";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PriceCardsProps {
  loading: boolean;
  frequency: IBillingFrequency;
  priceMap: Record<string, string>;
}

export function PriceCards({ loading, frequency, priceMap }: PriceCardsProps) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PricingTier.map((tier) => (
        <div
          key={tier.id}
          className={cn(
            "flex flex-col h-full rounded-lg border shadow-sm transition-all hover:shadow-md",
            tier.featured ? "border-indigo-500" : "border-zinc-200 dark:border-zinc-800"
          )}
        >
          <div className="flex flex-1 flex-col gap-5 rounded-t-lg p-6">
            {tier.featured && (
              <span className="inline-flex w-fit items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                {tier.featured}
              </span>
            )}
            
            <PriceTitle tier={tier} />
            
            <PriceAmount
              loading={loading}
              tier={tier}
              priceMap={priceMap}
              value={frequency.value}
              priceSuffix={frequency.priceSuffix}
            />
            
            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
            
            <div className="text-sm text-zinc-600 dark:text-zinc-300">
              {tier.description}
            </div>
          </div>
          
          <div className="flex-1">
            <FeaturesList tier={tier} />
          </div>
          
          <div className="p-6">
            <Link 
              href={`/checkout/${tier.priceId[frequency.value]}`}
              className={cn(
                "block w-full text-center py-3 rounded font-medium transition-colors",
                tier.featured 
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                  : "bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700"
              )}
            >
              Get started
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}