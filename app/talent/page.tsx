import type { Metadata } from "next";
import TalentPage from "@/components/talent/talent-page";
import { talents } from "@/lib/talents";

export const metadata: Metadata = {
  title: "Talent",
  description:
    "Search full-stack creators, review public ranks and qualifications, and unlock direct contact details after checkout.",
};

export default function Page() {
  return <TalentPage talents={talents} />;
}

