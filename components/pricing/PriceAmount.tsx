import { Tier } from "@/constants/pricing-tier";
import { cn } from "@/lib/utils";

interface Props {
  loading: boolean;
  tier: Tier;
  priceMap: Record<string, string>;
  value: string;
  priceSuffix: string;
}

export function PriceAmount({
  loading,
  tier,
  priceMap,
  value,
  priceSuffix,
}: Props) {
  if (loading) {
    return (
      <div className="mt-6 px-8">
        <div className="h-24 w-full bg-border animate-pulse rounded" />
      </div>
    );
  }

  const price = priceMap[tier.priceId[value]].replace(/\.00$/, "");
  return (
    <div className="mt-6 flex flex-col px-8">
      <div className={cn("text-[80px] leading-[96px] font-medium")}>
        {price}
      </div>
      <div className={cn("text-[12px] leading-[12px] font-medium")}>
        {priceSuffix}
      </div>
    </div>
  );
}
