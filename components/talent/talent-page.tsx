"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Search } from "lucide-react";
import type { Talent } from "@/lib/talents";

type Props = {
  talents: Talent[];
};

export default function TalentPage({ talents }: Props) {
  const [query, setQuery] = useState("");

  const filteredTalents = useMemo(() => {
    const term = query.trim().toLowerCase();

    if (!term) return talents;

    return talents.filter((talent) => {
      return [
        talent.name,
        talent.role,
        talent.rank,
        talent.stack.join(" "),
        talent.location,
        talent.summary,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term);
    });
  }, [query, talents]);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_45%,#f4f8fb_100%)]">
      <div className="app-container py-8 md:py-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Talent search
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Find full-stack creators
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              See the rank, qualification, remark, and price first. Full contact details stay locked until checkout is successful.
            </p>
          </div>

          <Link
            href="/"
            className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary md:inline-flex"
          >
            Back home
          </Link>
        </div>

        <div className="mb-8 rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
          <label className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search talents by name, rank, stack, or location"
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredTalents.map((talent) => (
            <article
              key={talent.slug}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {talent.role}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950">
                    {talent.name}
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {talent.rank}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {talent.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {talent.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">Qualification</dt>
                  <dd className="mt-1 font-medium text-slate-900">{talent.qualification}</dd>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">Price</dt>
                  <dd className="mt-1 font-medium text-slate-900">{talent.price}</dd>
                </div>
              </dl>

              <p className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Remark:</span> {talent.remark}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-sm text-slate-500">{talent.location}</p>
                <Link
                  href={`/talent/checkout/${talent.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  Hire
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredTalents.length === 0 && (
          <div className="mt-10 rounded-[1.5rem] border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            No talent matches your search.
          </div>
        )}
      </div>
    </main>
  );
}

