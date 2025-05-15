import { Minus, Plus } from "lucide-react";

interface Props {
  quantity: number;
  handleQuantityChange: (quantity: number) => void;
}

export function QuantityField({ quantity, handleQuantityChange }: Props) {
  return (
    <div className="mt-3 flex items-center gap-1 w-fit rounded-sm border border-border bg-background p-1">
      <button
        onClick={() => handleQuantityChange(quantity - 1)}
        disabled={quantity === 1}
        aria-label="Decrease quantity"
        className="h-8 w-8 flex items-center justify-center rounded-sm bg-[#182222] border border-border disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <Minus className="w-4 h-4 text-muted-foreground" />
      </button>

      <span className="w-14 px-2 py-1 text-center text-xs leading-6 bg-[#182222] rounded-sm">
        {quantity}
      </span>

      <button
        onClick={() => handleQuantityChange(quantity + 1)}
        aria-label="Increase quantity"
        className="h-8 w-8 flex items-center justify-center rounded-sm bg-[#182222] border border-border focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <Plus className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
}
