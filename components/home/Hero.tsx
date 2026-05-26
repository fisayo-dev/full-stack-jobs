import Link from "next/link";
import { ArrowRight, BadgeCheck, GraduationCap, Search } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Match skills",
    text: "AI scans course history, projects, and role requirements to shortlist the right candidates.",
  },
  {
    icon: GraduationCap,
    title: "Verify academics",
    text: "Academic performance and institution records help reduce manual screening and false positives.",
  },
  {
    icon: BadgeCheck,
    title: "Deliver qualified talent",
    text: "Businesses get a direct pipeline to reachable, relevant graduates ready for the role.",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-14">
        <div className="max-w-2xl">
          <h1 className="mt-6 text-4xl tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Hire fresh graduates who are actually <span className="font-extrabold">reachable, qualified, and relevant.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Full Stack Jobs is an AI-powered marketplace connecting enterprise employers directly with academic institutions. Leveraging skill matching and performance data, we bypass inefficient job boards to surface precise student candidates instantly.
          </p>


          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-transform hover:-translate-y-0.5"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-blue-200 hover:text-primary"
            >
              See how it works
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem]" />
          <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <p className="text-xs font-medium tracking-[0.18em] text-slate-500">
                fullstackjobs.com
              </p>
              <div className="h-3 w-3" />
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              <div className="rounded-[1.5rem] border border-blue-200/80 bg-blue-50/80 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                      Hiring flow
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-950">
                      A clean pipeline from school to role
                    </h2>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.title}
                        className="flex gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm"
                      >
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-slate-950">
                              {step.title}
                            </p>
                            <span className="text-xs font-medium text-slate-400">
                              0{index + 1}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
