"use client";

import { createClient } from "@/lib/supabase/client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";

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
  const [dob, setDob] = useState<Date>();

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [qualification, setQualification] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!dob) {
      alert("Please select your date of birth");
      return;
    }

    if (!qualification) {
      alert("Please select your qualification");
      return;
    }

    if (!selectedState) {
      alert("Please select your state");
      return;
    }

    if (!selectedCity) {
      alert("Please select your city");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const stateName =
      states.find(
        (state) => state.isoCode === selectedState
      )?.name ?? "";

    const { error } = await supabase
      .from("pharma_connect_members")
      .insert([
        {
          full_name: formData.get("fullName"),
          email: formData.get("email"),
          phone: formData.get("phone"),

          date_of_birth: dob.toISOString(),

          qualification,

          institution: formData.get("institution"),

          state: stateName,
          city: selectedCity,
        },
      ]);

    if (error) {
      console.error(error);

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
          {/* Name */}
          <Input
            name="fullName"
            placeholder="Full Name"
            required
          />

          {/* Email */}
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          {/* Phone */}
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />

          {/* DOB */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className="
                  w-full
                  justify-start
                  text-left
                  font-normal
                "
              >
                <CalendarIcon className="mr-2 h-4 w-4" />

                {dob
                  ? format(dob, "PPP")
                  : "Select Date of Birth"}
              </Button>
            </PopoverTrigger>

            <PopoverContent
              className="w-auto p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={dob}
                onSelect={setDob}
                captionLayout="dropdown"
                startMonth={new Date(1950, 0)}
                endMonth={new Date()}
                defaultMonth={new Date(2000, 0)}
              />
            </PopoverContent>
          </Popover>

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
            </SelectContent>
          </Select>

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
            className="
              w-full
              bg-[#aa6f73]
              hover:bg-[#4c1711]
            "
          >
            Join Network
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}