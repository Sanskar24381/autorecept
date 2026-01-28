const stats = [
  {
    label: "Calls per week",
    value: "150-200",
  },
  {
    label: "Missed calls each day",
    value: "~5",
  },
  {
    label: "Recovered revenue per year",
    value: "$16k-$22k",
  },
];

const steps = [
  {
    title: "Customer calls",
    description: "Every inbound call is answered instantly, no voicemail.",
  },
  {
    title: "Auto Recept greets",
    description: "Natural voice, calm tone, subtle restaurant ambiance.",
  },
  {
    title: "Books the reservation",
    description: "Collects party size, time, and notes without friction.",
  },
  {
    title: "Text confirmation",
    description: "Guests receive a confirmation and can edit via text.",
  },
  {
    title: "System updates",
    description: "Your team gets clean summaries and a synced book.",
  },
];

const features = [
  "24/7 instant call answering",
  "Human-like conversational AI",
  "Reservation booking and management",
  "Menu explanations and recommendations",
  "FAQ handling for hours, location, policies",
  "Text confirmations and updates",
  "Call summaries and insights",
  "No hardware, fast setup",
];

const benefits = [
  "Never miss another reservation",
  "Capture peak-hour demand",
  "Reduce staff stress and phone chaos",
  "Increase revenue without hiring",
  "Deliver a smoother guest experience",
  "Keep the dining room fully focused",
];

const useCases = [
  {
    title: "Busy dinner rush",
    description: "Auto Recept handles the overflow while the host seats guests.",
  },
  {
    title: "After-hours calls",
    description: "Book tomorrow's tables tonight without staff on-site.",
  },
  {
    title: "Short-staffed nights",
    description: "Keep service strong even when you are down a person.",
  },
  {
    title: "Multi-location operators",
    description: "One consistent experience across every restaurant.",
  },
];

const testimonials = [
  {
    quote:
      "We stopped losing Friday night reservations. It sounds like our best host.",
    name: "Placeholder, GM",
    business: "Urban Bistro",
  },
  {
    quote:
      "Guests think it is a real person. Our team finally stays off the phone.",
    name: "Placeholder, Owner",
    business: "Harbor House",
  },
  {
    quote:
      "The call summaries alone are worth it. We never miss a detail now.",
    name: "Placeholder, Ops Manager",
    business: "Table Co.",
  },
];

const logos = [
  "Lattice Grill",
  "Juniper Kitchen",
  "Cobalt Tap",
  "Cedar & Stone",
  "Market House",
  "Tide & Fire",
];

export default function Home() {
  return (
    <div className="bg-midnight text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(71,133,255,0.28),transparent_55%),radial-gradient(circle_at_15%_40%,rgba(107,158,255,0.18),transparent_50%),radial-gradient(circle_at_85%_20%,rgba(8,145,178,0.22),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:120px_120px]" />

        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue text-white shadow-soft">
              AR
            </div>
            <div>
              <p className="font-display text-lg font-semibold">Auto Recept</p>
              <p className="text-xs uppercase tracking-[0.3em] text-fog">
                AI Voice Receptionist
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <a className="text-sm font-medium text-fog" href="#how-it-works">
              How it works
            </a>
            <a className="text-sm font-medium text-fog" href="#features">
              Features
            </a>
            <a className="text-sm font-medium text-fog" href="#pricing">
              Pricing
            </a>
            <a
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-midnight transition hover:translate-y-[-1px] hover:bg-blue hover:text-white"
              href="#demo"
            >
              Book a Demo
            </a>
          </div>
        </header>

        <main className="relative">
          <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-8 lg:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ice">
                  Built specifically for restaurants
                </div>
                <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  Never miss a reservation call again.
                </h1>
                <p className="mt-5 max-w-xl text-lg text-fog">
                  Auto Recept is a human-sounding AI voice receptionist that
                  answers every restaurant call instantly, books reservations,
                  and keeps your team focused on guests in the dining room.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    className="rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-blue-soft"
                    href="#demo"
                  >
                    Book a Demo
                  </a>
                  <a
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue hover:text-blue"
                    href="#how-it-works"
                  >
                    See How It Works
                  </a>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="animate-fade-up rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                      style={{ animationDelay: `${index * 120}ms` }}
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-fog">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 -top-6 h-full w-full rounded-[32px] border border-white/10 bg-white/5" />
                <div className="relative rounded-[32px] border border-white/10 bg-deep/90 p-6 shadow-soft">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-fog">
                    <span>Live Call</span>
                    <span className="rounded-full bg-green/15 px-3 py-1 text-green">
                      answered in 0.7s
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm">
                      <p className="font-semibold text-white">Guest</p>
                      <p className="text-fog">
                        Hi, can we get a table for four at 7:30?
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3 text-sm text-midnight">
                      <p className="font-semibold">Auto Recept</p>
                      <p className="text-midnight/70">
                        Absolutely. I can reserve 7:30 for four. Can I grab a
                        name and number to confirm?
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm">
                      <p className="font-semibold text-white">Guest</p>
                      <p className="text-fog">It is under Mayra, 212-555-0144.</p>
                    </div>
                    <div className="rounded-2xl bg-green/15 px-4 py-3 text-sm">
                      <p className="font-semibold text-green">Text sent</p>
                      <p className="text-green/70">
                        Confirmed for 4 at 7:30 PM. Reply to modify.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-3 text-xs text-fog">
                    Call summary delivered to your host stand and manager in
                    real time.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <section className="border-y border-white/10 bg-deep/80 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 text-sm text-fog">
          <p className="max-w-xl font-medium text-white">
            If you miss the call, the customer calls the next restaurant in 10
            seconds.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <span>150-200 calls per week</span>
            <span>~20% missed during peak hours</span>
            <span>1-2 tables lost per day</span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="problem">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">
              The revenue leak
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Missed calls quietly cost $16,000-$22,000 every year.
            </h2>
            <p className="mt-4 text-fog">
              Restaurants receive 150-200 calls per week and miss about five a
              day. With a 30-40% conversion rate, that is 1-2 lost tables daily.
              At $15-$20 per guest, that is $45-$60 every day in missed revenue.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white">
              Auto Recept keeps every call, every guest, every night.
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-deep p-8 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-fog">
              Why this happens
            </p>
            <h3 className="mt-4 font-display text-2xl">
              The &quot;host&quot; is whoever is least busy.
            </h3>
            <ul className="mt-6 space-y-4 text-fog">
              <li>• A server mid-table trying to hear over a loud dining room.</li>
              <li>• A host juggling walk-ins, reservations, and seating.</li>
              <li>• A manager in the back doing inventory or fixing issues.</li>
              <li>• A kitchen runner grabbing the phone and putting people on hold.</li>
              <li>• Or... voicemail.</li>
            </ul>
            <div className="mt-8 rounded-2xl bg-white/10 px-4 py-3 text-sm text-white">
              The phone rings. The line grows. The guest hangs up.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep py-20" id="solution">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">
                The solution
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                Auto Recept answers every call like your best front-of-house
                employee.
              </h2>
              <p className="mt-4 text-fog">
                Instant pickup. Natural human voice. Calm, polite, zero attitude.
                Your guests feel taken care of while your team stays focused on
                the dining room.
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">
                    Answers guest questions on the spot
                  </p>
                  <p className="text-sm text-fog">
                    Hours, location, parking, policies, specials, and menu details.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">
                    Books and confirms reservations by text
                  </p>
                  <p className="text-sm text-fog">
                    Guests can change or confirm without another call.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">
                    Keeps staff focused on in-person dining
                  </p>
                  <p className="text-sm text-fog">
                    No more calls interrupting service.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-midnight p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-fog">
                Real world impact
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-3xl font-semibold text-blue">$45-$60</p>
                  <p className="text-sm text-fog">Revenue captured per day</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">20%</p>
                  <p className="text-sm text-fog">Average missed calls solved</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-green">0</p>
                  <p className="text-sm text-fog">Voicemail experiences</p>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-ice">
                  Set up in days, not weeks. No hardware.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="how-it-works">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">
            How it works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">
            A simple flow that feels like a real host.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-soft">
                Step {index + 1}
              </p>
              <h3 className="mt-3 font-display text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-fog">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-deep py-20" id="features">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">
              Features
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Everything a phone-heavy restaurant needs.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm font-semibold text-white">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="benefits">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">
              Operator benefits
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Turn missed calls into full tables.
            </h2>
            <p className="mt-4 text-fog">
              Auto Recept picks up instantly, handles every detail, and hands your
              team a clean summary. Guests feel taken care of while your staff
              stays focused on hospitality.
            </p>
          </div>
          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <p className="text-sm font-semibold text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep py-20" id="pricing">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">
              Pricing
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Plans that pay for themselves quickly.
            </h2>
            <p className="text-fog">
              Compare this to the $16k-$22k in missed revenue each year.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-fog">
                Starter
              </p>
              <p className="mt-4 text-4xl font-semibold text-white">$74.99</p>
              <p className="text-sm text-fog">per month</p>
              <ul className="mt-6 space-y-2 text-sm text-fog">
                <li>250 calls included</li>
                <li>35 free trial calls</li>
                <li>Reservation booking + text confirmations</li>
                <li>Menu and FAQ coverage</li>
              </ul>
              <a
                className="mt-8 inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight transition hover:bg-blue hover:text-white"
                href="#demo"
              >
                Book a Demo
              </a>
            </div>
            <div className="rounded-3xl border border-blue/60 bg-midnight p-8 text-white shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-fog">
                Growth
              </p>
              <p className="mt-4 text-4xl font-semibold">$139.99</p>
              <p className="text-sm text-fog">per month</p>
              <ul className="mt-6 space-y-2 text-sm text-fog">
                <li>500 calls included</li>
                <li>100 free trial calls to test higher peak-hour volume</li>
                <li>Priority onboarding + customized call flows</li>
                <li>Advanced call insights</li>
              </ul>
              <a
                className="mt-8 inline-flex w-full justify-center rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-soft"
                href="#demo"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="use-cases">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">
            Use cases
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">
            Built for peak-hour chaos.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-display text-xl">{useCase.title}</h3>
              <p className="mt-2 text-sm text-fog">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-deep py-20" id="trust">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">
              Trust and credibility
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Reliable, secure, always on.
            </h2>
            <p className="text-fog">
              Built specifically for restaurants. Designed to sound human, stay
              consistent, and keep guests satisfied.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm text-fog">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="mt-4 text-sm font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-fog">
                  {testimonial.business}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-2xl border border-dashed border-white/10 bg-midnight px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-fog"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="demo">
        <div className="rounded-[36px] bg-gradient-to-r from-blue via-blue-soft to-cyan px-8 py-12 text-white shadow-soft sm:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Ready to stop missing calls?
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                Stop losing reservations to missed calls.
              </h2>
              <p className="mt-4 text-white/80">
                Book a demo and hear Auto Recept handle a real restaurant call.
                We will map your menu, hours, and policies so the AI sounds like
                your best host from day one.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-midnight"
                href="mailto:hello@autorecept.ai"
              >
                Book a Demo
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-midnight hover:text-midnight"
                href="#pricing"
              >
                View Pricing
              </a>
              <div className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-xs text-white/80">
                Average onboarding time: 3-5 days with your menu and policies.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-midnight py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-fog sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg text-white">Auto Recept</p>
            <p>AI voice receptionist for restaurants.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="text-sm font-medium text-fog" href="#features">
              Features
            </a>
            <a className="text-sm font-medium text-fog" href="#pricing">
              Pricing
            </a>
            <a className="text-sm font-medium text-fog" href="#demo">
              Book a Demo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
