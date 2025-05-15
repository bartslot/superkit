import { BillingFrequency, IBillingFrequency } from "@/constants/billing-frequency";

interface Props {
  frequency: IBillingFrequency;
  setFrequency: (frequency: IBillingFrequency) => void;
}

export function Toggle({ frequency, setFrequency }: Props) {
  return (
    <div className="flex justify-center mb-8 space-x-2">
      {BillingFrequency.map((bf) => {
        const isSelected = bf.value === frequency.value;
        return (
          <button
            key={bf.value}
            onClick={() => setFrequency(bf)}
            className={`
              px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary
              ${isSelected
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
            `}
          >
            {bf.label}
          </button>
        );
      })}
    </div>
  );
}
