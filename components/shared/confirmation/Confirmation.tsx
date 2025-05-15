import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  title: ReactNode;
  description: ReactNode;
  onClose: (open: boolean) => void;
  onConfirm: () => void;
}

export function Confirmation({
  isOpen,
  onClose,
  title,
  description,
  onConfirm,
}: Props) {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => onClose(false)}
    >
      {/* Panel */}
      <div
        className="bg-white rounded-lg p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Close
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Cancel subscription
          </button>
        </div>
      </div>
    </div>
  );
}
