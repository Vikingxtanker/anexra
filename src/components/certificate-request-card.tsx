import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

import CertificatePreviewDialog from "@/components/certificate-preview-dialog";
import PhysicalOrderDialog from "@/components/physical-order-dialog";

type CertificateRequest = {
  id?: string;
  status?: string | null;
  created_at?: string | null;
};

type CertificateCourse = {
  id: string;
  title: string;
  thumbnail_url?: string | null;
  percentage: number;
  completedLessons: number;
  totalLessons: number;
  request?: CertificateRequest | null;
};

export default function CertificateRequestCard({
  course,
}: {
  course: CertificateCourse;
}) {
  const request = course.request ?? null;
  const status = request?.status ?? null;

  async function orderPrintedCertificate(formData: FormData) {
    "use server";

    const supabase = await createClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) return;

    const payload = {
      status: "pending",
      certificate_type: "physical",
      physical_required: true,
      recipient_name: formData.get("recipient_name"),
      phone: formData.get("phone"),
      address_line1: formData.get("address_line1"),
      address_line2: formData.get("address_line2"),
      city: formData.get("city"),
      state: formData.get("state"),
      pincode: formData.get("pincode"),
      updated_at: new Date().toISOString(),
    };

    if (request?.id && status === "rejected") {
      await supabase
        .from("certificate_requests")
        .update(payload)
        .eq("id", request.id)
        .eq("user_id", user.id);
    } else {
      const { error } = await supabase.from("certificate_requests").insert({
        user_id: user.id,
        course_id: course.id,
        ...payload,
      });

      if (error) {
        console.error(error);
      }
    }

    revalidatePath("/student/certificate");
  }

  const statusLabel =
    status === "pending"
      ? "Printed Order Pending"
      : status === "approved"
        ? "Printed Order Approved"
        : status === "rejected"
          ? "Printed Order Rejected"
          : "No Printed Order";

  const canOrderPrinted = !request || status === "rejected";

  return (
    <div className="overflow-hidden rounded-2xl border border-[#d8c7c9] bg-white shadow-sm">
      <img
        src={
          course.thumbnail_url ||
          "https://placehold.co/1200x675/png?text=Course"
        }
        alt={course.title}
        className="aspect-video w-full object-cover"
      />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[#4c1711]">
              {course.title}
            </h3>

            <p className="mt-2 text-sm text-[#87565b]">
              {course.completedLessons} / {course.totalLessons} Lessons
              Completed
            </p>
          </div>

          <span className="rounded-full border border-[#d8c7c9] bg-[#f4efee] px-3 py-1 text-xs font-semibold text-[#87565b]">
            {statusLabel}
          </span>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-sm text-[#87565b]">
            <span>Completion</span>
            <span>{course.percentage}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#e8ddde]">
            <div
              className="h-full bg-[#4c1711]"
              style={{ width: `${course.percentage}%` }}
            />
          </div>
        </div>

        <p className="mt-5 text-sm text-[#87565b]">
          {status === "approved"
            ? "Your printed certificate order has been approved."
            : status === "pending"
              ? "Your printed certificate order is waiting for review."
              : status === "rejected"
                ? "Your previous printed order was rejected. You can order again."
                : "You have completed this course and can download your digital certificate or order a printed copy."}
        </p>

        <div className="mt-6 grid gap-3">
          <CertificatePreviewDialog
            courseId={course.id}
            courseTitle={course.title}
          >
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#4c1711] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#38100d]"
            >
              🎓 Download Digital Certificate
            </button>
          </CertificatePreviewDialog>

          {status !== "approved" && (
            <PhysicalOrderDialog
              action={orderPrintedCertificate}
              disabled={!canOrderPrinted}
              buttonLabel={
                status === "pending"
                  ? "📦 Printed Order Pending"
                  : status === "rejected"
                    ? "📦 Order Printed Certificate Again"
                    : "📦 Order Printed Certificate"
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}