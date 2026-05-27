import { notFound } from "next/navigation";
import { talents } from "@/lib/talents";
import TalentCheckout from "@/components/talent/talent-checkout";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return talents.map((talent) => ({ slug: talent.slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const talent = talents.find((item) => item.slug === slug);

  if (!talent) {
    notFound();
  }

  return <TalentCheckout talent={talent} />;
}
