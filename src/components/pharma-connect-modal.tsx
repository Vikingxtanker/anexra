"use client";

import { createClient } from "@/lib/supabase/client";

import { useState } from "react";

import { State, City } from "country-state-city";

import { SearchableLocationSelect } from "@/components/searchable-location-select";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";

interface PharmaConnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PharmaConnectModal({
  open,
  onOpenChange,
}: PharmaConnectModalProps) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [qualification, setQualification] = useState("");

  const [phone, setPhone] = useState("");

  const [customQualification, setCustomQualification] =
  useState("");

  const [loading, setLoading] = useState(false);

  function formatName(name: string) {
    return name
      .trim()
      .toLowerCase()
      .split(" ")
      .filter(Boolean)
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
      .join(" ");
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!qualification) {
      toast.error("Please select your qualification");
      return;
    }

    if (
      qualification === "Other" &&
      !customQualification.trim()
    ) {
      toast.error(
        "Please enter your qualification"
      );
      return;
    }

    if (!selectedState) {
      toast.error("Please select your state");
      return;
    }

    if (!selectedCity) {
      toast.error("Please select your city");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error(
        "Please enter a valid Indian mobile number"
      );
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const stateName =
        states.find(
          (state) => state.isoCode === selectedState
        )?.name ?? "";

      const firstName = formatName(
        String(formData.get("firstName") || "")
      );

      const lastName = formatName(
        String(formData.get("lastName") || "")
      );

      const fullName = `${firstName} ${lastName}`;

      const { error } = await supabase
        .from("pharma_connect_members")
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            full_name: fullName,

            email: formData.get("email"),
            phone: `+91${phone}`,

            qualification: finalQualification,

            institution: formData.get("institution"),

            state: stateName,
            city: selectedCity,
          },
        ]);

      if (error) {
        console.error(error);

        if (error.code === "23505") {
          toast.error(
            "This email is already registered in Pharma Connect."
          );
          return;
        }

        toast.error(
          "Failed to join Pharma Connect"
        );
        return;
      }

      toast.success(
        "Welcome to Pharma Connect! 🎉",
        {
          description:
            "We'll keep you updated with pharmacy opportunities and industry news.",
        }
      );

      onOpenChange(false);
    } finally {
      setLoading(false);
    }
  };

  const states = State.getStatesOfCountry("IN");

  const cities = selectedState
    ? City.getCitiesOfState("IN", selectedState)
    : [];

  const stateOptions = states.map((state) => ({
    value: state.isoCode,
    label: state.name,
  }));

  const cityOptions = cities.map((city) => ({
    value: city.name,
    label: city.name,
  }));

  const finalQualification =
    qualification === "Other"
      ? customQualification.trim()
      : qualification;

  const supabase = createClient();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#4c1711]">
            Join Pharma Connect
          </DialogTitle>

          <DialogDescription>
            Connect with pharmacy students, graduates,
            educators and healthcare professionals
            across India.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-4"
        >
          {/* First & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="firstName"
              placeholder="First Name"
              autoCapitalize="words"
              autoComplete="given-name"
              required
            />

            <Input
              name="lastName"
              placeholder="Last Name"
              autoCapitalize="words"
              autoComplete="family-name"
              required
            />
          </div>

          {/* Email */}
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          {/* Phone */}
          <div
            className="
              flex items-center
              border rounded-md
              overflow-hidden
              bg-background
            "
          >
            <div
              className="
                px-3
                py-2
                border-r
                bg-muted/40
                text-sm
                font-medium
                whitespace-nowrap
              "
            >
              🇮🇳 +91
            </div>

            <Input
              type="tel"
              name="phone"
              value={phone}
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter your 10 digit number"
              className="border-0 focus-visible:ring-0"
              onChange={(e) => {
                const digitsOnly = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10);

                setPhone(digitsOnly);
              }}
              required
            />
          </div>

          {/* DOB */}
          {/* REMOVED */}

          {/* Qualification */}
          <Select
            value={qualification}
            onValueChange={setQualification}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Qualification" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="D.Pharm">
                D.Pharm
              </SelectItem>

              <SelectItem value="B.Pharm">
                B.Pharm
              </SelectItem>

              <SelectItem value="M.Pharm">
                M.Pharm
              </SelectItem>

              <SelectItem value="Pharm.D">
                Pharm.D
              </SelectItem>

              <SelectItem value="Other">
                Other
              </SelectItem>
            </SelectContent>
          </Select>

          {qualification === "Other" && (
            <Input
              value={customQualification}
              onChange={(e) =>
                setCustomQualification(e.target.value)
              }
              placeholder="Enter your qualification"
              autoCapitalize="words"
              maxLength={100}
              required
            />
          )}

          {/* Institution */}
          <Input
            name="institution"
            placeholder="Institution / Organization"
            required
          />

          {/* State */}
          <SearchableLocationSelect
            options={stateOptions}
            value={selectedState}
            placeholder="Select State"
            onChange={(value) => {
              setSelectedState(value);
              setSelectedCity("");
            }}
          />

          {/* City */}
          <SearchableLocationSelect
            options={cityOptions}
            value={selectedCity}
            placeholder="Select City"
            onChange={setSelectedCity}
            disabled={!selectedState}
          />

          <Button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-[#aa6f73]
              hover:bg-[#4c1711]
            "
          >
            {loading ? "Joining..." : "Join Network"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}