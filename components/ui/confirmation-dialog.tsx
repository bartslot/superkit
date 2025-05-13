import * as React from "react";
import Button from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
}: ConfirmationDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <DialogDescription>{description}</DialogDescription>
          <div className="flex gap-4 items-center justify-end w-full">
            <Button onClick={() => onClose(false)} variant="outline">
              Close
            </Button>
            <Button onClick={() => onConfirm()} variant="destructive">
              Cancel subscription
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
