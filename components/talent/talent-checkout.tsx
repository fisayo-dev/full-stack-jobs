"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  CreditCard,
  ExternalLink,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import type { Talent } from "@/lib/talents";

type Props = {
  talent: Talent;
};

export default function TalentCheckout({ talent }: Props) {
  const [paid, setPaid] = useState(false);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_45%,#f4f8fb_100%)]">
      <div className="app-container py-8 md:py-12">
        <div className="max-w-3xl">
          <Link href="/talent" className="text-sm font-medium text-primary hover:underline">
            Back to talent search
          </Link>

          <section className="mt-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Checkout
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                  Hire {talent.name}
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                  Pay once to unlock the full contact details and direct reach out options.
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                {talent.price}
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Rank</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">{talent.rank}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Qualification</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">{talent.qualification}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Public remark
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{talent.remark}</p>
            </div>

            {!paid ? (
              <div className="mt-6 rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <CreditCard className="h-4 w-4 text-primary" />
                  Mock payment
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  No real payment integration here. Click pay to simulate a successful checkout and unlock contact details.
                </p>
                <button
                  type="button"
                  onClick={() => setPaid(true)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  Pay {talent.price}
                </button>
              </div>
            ) : (
              <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div>
                  <p className="text-sm font-semibold text-emerald-900">Payment successful</p>
                  <p className="text-sm text-emerald-800">
                    Contact details are now visible.
                  </p>
                </div>
                <CheckCircle2 className="h-6 w-6 text-emerald-700" />
              </div>
            )}

            {paid && (
              <div className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <a
                    href={`mailto:${talent.email}`}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    {talent.email}
                  </a>
                  <a
                    href={`tel:${talent.phone}`}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    {talent.phone}
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Portfolio
                  </p>
                  <a
                    href={talent.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    View portfolio
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Social links
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {talent.socialLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 shadow-sm transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Projects
                  </p>
                  <div className="mt-3 space-y-3">
                    {talent.projects.map((project) => (
                      <div key={project.name} className="rounded-2xl bg-white p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-slate-950">{project.name}</p>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {project.description}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-dashed border-slate-200 p-4 text-sm text-slate-600">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Hidden before payment
              </div>
              <p className="mt-2 leading-6">
                The full contact details stay hidden until checkout is successful. Before that, only rank, qualification, remark, and price are visible.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
