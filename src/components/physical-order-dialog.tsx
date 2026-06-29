"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type PhysicalOrderDialogProps = {
  action: (formData: FormData) => void;
  buttonLabel: string;
  disabled?: boolean;
};

export default function PhysicalOrderDialog({
  action,
  buttonLabel,
  disabled = false,
}: PhysicalOrderDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className="inline-flex w-full items-center justify-center rounded-xl border border-[#4c1711] bg-white px-4 py-3 text-sm font-semibold text-[#4c1711] transition hover:bg-[#f4efee] disabled:cursor-not-allowed disabled:border-[#b7a4a6] disabled:text-[#b7a4a6]"
        >
          {buttonLabel}
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-xl bg-white p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-[#4c1711]">
            Printed Certificate Delivery
          </DialogTitle>
        </DialogHeader>

        <form action={action} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="recipient_name">Full name</Label>
              <Input id="recipient_name" name="recipient_name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address_line1">Address</Label>
            <Textarea id="address_line1" name="address_line1" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address_line2">Apartment, landmark, etc.</Label>
            <Input id="address_line2" name="address_line2" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input id="state" name="state" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pincode">PIN code</Label>
              <Input id="pincode" name="pincode" required />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#4c1711] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#38100d]"
          >
            Submit Printed Order
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}