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
    <div className="bg-sand text-ink">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(211,84,44,0.35),transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute left-0 top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(63,90,69,0.25),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute right-24 top-1/2 hidden h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(243,198,106,0.35),transparent_70%)] blur-2xl lg:block" />

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ember text-white shadow-soft">
              AR
            </div>
            <div>
              <p className="font-display text-lg font-semibold">Auto Recept</p>
              <p className="text-xs uppercase tracking-[0.3em] text-cocoa">
                AI Voice Receptionist
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <a className="text-sm font-medium text-cocoa" href="#how-it-works">
              How it works
            </a>
            <a className="text-sm font-medium text-cocoa" href="#features">
              Features
            </a>
            <a className="text-sm font-medium text-cocoa" href="#pricing">
              Pricing
            </a>
            <a
              className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-sand transition hover:translate-y-[-1px] hover:bg-ember"
              href="#demo"
            >
              Book a Demo
            </a>
          </div>
        </header>

        <main>
          <section className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-10 lg:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                  Built specifically for restaurants
                </div>
                <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  Never miss a reservation call again.
                </h1>
                <p className="mt-5 max-w-xl text-lg text-cocoa">
                  Auto Recept is a human-sounding AI voice receptionist that
                  answers every restaurant call instantly, books reservations,
                  and keeps your team focused on guests in the dining room.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:translate-y-[-1px]"
                    href="#demo"
                  >
                    Book a Demo
                  </a>
                  <a
                    className="rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ember hover:text-ember"
                    href="#how-it-works"
                  >
                    See How It Works
                  </a>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-ink/10 bg-white/80 p-4 backdrop-blur"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-cocoa">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-ink">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 -top-6 h-full w-full rounded-[32px] border border-ember/20 bg-cream" />
                <div className="relative rounded-[32px] border border-ink/10 bg-white p-6 shadow-soft">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-cocoa">
                    <span>Live Call</span>
                    <span className="rounded-full bg-olive/10 px-3 py-1 text-olive">
                      answered in 0.7s
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl bg-sand px-4 py-3 text-sm">
                      <p className="font-semibold text-ink">Guest</p>
                      <p className="text-cocoa">
                        Hi, can we get a table for four at 7:30?
                      </p>
                    </div>
                    <div className="rounded-2xl bg-ink px-4 py-3 text-sm text-sand">
                      <p className="font-semibold">Auto Recept</p>
                      <p className="text-sand/80">
                        Absolutely. I can reserve 7:30 for four. Can I grab a
                        name and number to confirm?
                      </p>
                    </div>
                    <div className="rounded-2xl bg-sand px-4 py-3 text-sm">
                      <p className="font-semibold text-ink">Guest</p>
                      <p className="text-cocoa">It is under Mayra, 212-555-0144.</p>
                    </div>
                    <div className="rounded-2xl bg-olive/10 px-4 py-3 text-sm">
                      <p className="font-semibold text-olive">Text sent</p>
                      <p className="text-olive/70">
                        Confirmed for 4 at 7:30 PM. Reply to modify.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-dashed border-ink/20 bg-cream px-4 py-3 text-xs text-cocoa">
                    Call summary delivered to your host stand and manager in
                    real time.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <section className="border-y border-ink/10 bg-white py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 text-sm text-cocoa">
          <p className="max-w-xl font-medium text-ink">
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
            <p className="text-xs uppercase tracking-[0.3em] text-ember">
              The revenue leak
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Missed calls quietly cost $16,000-$22,000 every year.
            </h2>
            <p className="mt-4 text-cocoa">
              Restaurants receive 150-200 calls per week and miss about five a
              day. With a 30-40% conversion rate, that is 1-2 lost tables daily.
              At $15-$20 per guest, that is $45-$60 every day in missed revenue.
            </p>
            <div className="mt-6 rounded-2xl border border-ember/20 bg-cream p-4 text-sm text-ink">
              Auto Recept keeps every call, every guest, every night.
            </div>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-cocoa">
              Why this happens
            </p>
            <h3 className="mt-4 font-display text-2xl">
              The &quot;host&quot; is whoever is least busy.
            </h3>
            <ul className="mt-6 space-y-4 text-cocoa">
              <li>• A server mid-table trying to hear over a loud dining room.</li>
              <li>• A host juggling walk-ins, reservations, and seating.</li>
              <li>• A manager in the back doing inventory or fixing issues.</li>
              <li>• A kitchen runner grabbing the phone and putting people on hold.</li>
              <li>• Or... voicemail.</li>
            </ul>
            <div className="mt-8 rounded-2xl bg-ink px-4 py-3 text-sm text-sand">
              The phone rings. The line grows. The guest hangs up.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20" id="solution">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ember">
                The solution
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                Auto Recept answers every call like your best front-of-house
                employee.
              </h2>
              <p className="mt-4 text-cocoa">
                Instant pickup. Natural human voice. Calm, polite, zero attitude.
                Your guests feel taken care of while your team stays focused on
                the dining room.
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-ink/10 bg-white p-4">
                  <p className="font-semibold text-ink">
                    Answers guest questions on the spot
                  </p>
                  <p className="text-sm text-cocoa">
                    Hours, location, parking, policies, specials, and menu details.
                  </p>
                </div>
                <div className="rounded-2xl border border-ink/10 bg-white p-4">
                  <p className="font-semibold text-ink">
                    Books and confirms reservations by text
                  </p>
                  <p className="text-sm text-cocoa">
                    Guests can change or confirm without another call.
                  </p>
                </div>
                <div className="rounded-2xl border border-ink/10 bg-white p-4">
                  <p className="font-semibold text-ink">
                    Keeps staff focused on in-person dining
                  </p>
                  <p className="text-sm text-cocoa">
                    No more calls interrupting service.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-cocoa">
                Real world impact
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-3xl font-semibold text-ember">$45-$60</p>
                  <p className="text-sm text-cocoa">Revenue captured per day</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-ink">20%</p>
                  <p className="text-sm text-cocoa">Average missed calls solved</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-olive">0</p>
                  <p className="text-sm text-cocoa">Voicemail experiences</p>
                </div>
                <div className="rounded-2xl bg-olive/10 px-4 py-3 text-sm text-olive">
                  Set up in days, not weeks. No hardware.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="how-it-works">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-ember">
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
              className="rounded-2xl border border-ink/10 bg-white p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                Step {index + 1}
              </p>
              <h3 className="mt-3 font-display text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-cocoa">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20" id="features">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-ember">
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
                className="rounded-2xl border border-ink/10 bg-cream p-5"
              >
                <p className="text-sm font-semibold text-ink">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="benefits">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ember">
              Operator benefits
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Turn missed calls into full tables.
            </h2>
            <p className="mt-4 text-cocoa">
              Auto Recept picks up instantly, handles every detail, and hands your
              team a clean summary. Guests feel taken care of while your staff
              stays focused on hospitality.
            </p>
          </div>
          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-ink/10 bg-white px-5 py-4"
              >
                <p className="text-sm font-semibold text-ink">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20" id="pricing">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-ember">
              Pricing
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Plans that pay for themselves quickly.
            </h2>
            <p className="text-cocoa">
              Compare this to the $16k-$22k in missed revenue each year.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-cocoa">
                Starter
              </p>
              <p className="mt-4 text-4xl font-semibold text-ink">$74.99</p>
              <p className="text-sm text-cocoa">per month</p>
              <ul className="mt-6 space-y-2 text-sm text-cocoa">
                <li>250 calls included</li>
                <li>35 free trial calls</li>
                <li>Reservation booking + text confirmations</li>
                <li>Menu and FAQ coverage</li>
              </ul>
              <a
                className="mt-8 inline-flex w-full justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-sand transition hover:bg-ember"
                href="#demo"
              >
                Book a Demo
              </a>
            </div>
            <div className="rounded-3xl border border-ember/40 bg-ink p-8 text-sand shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/60">
                Growth
              </p>
              <p className="mt-4 text-4xl font-semibold">$139.99</p>
              <p className="text-sm text-sand/70">per month</p>
              <ul className="mt-6 space-y-2 text-sm text-sand/80">
                <li>500 calls included</li>
                <li>100 free trial calls to test higher peak-hour volume</li>
                <li>Priority onboarding + customized call flows</li>
                <li>Advanced call insights</li>
              </ul>
              <a
                className="mt-8 inline-flex w-full justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-ink"
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
          <p className="text-xs uppercase tracking-[0.3em] text-ember">
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
              className="rounded-3xl border border-ink/10 bg-white p-6"
            >
              <h3 className="font-display text-xl">{useCase.title}</h3>
              <p className="mt-2 text-sm text-cocoa">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20" id="trust">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-ember">
              Trust and credibility
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Reliable, secure, always on.
            </h2>
            <p className="text-cocoa">
              Built specifically for restaurants. Designed to sound human, stay
              consistent, and keep guests satisfied.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-ink/10 bg-cream p-6"
              >
                <p className="text-sm text-cocoa">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="mt-4 text-sm font-semibold text-ink">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-cocoa">
                  {testimonial.business}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-3 rounded-3xl border border-ink/10 bg-cream p-6 sm:grid-cols-3">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-2xl border border-dashed border-ink/10 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cocoa"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="demo">
        <div className="rounded-[36px] bg-ink px-8 py-12 text-sand shadow-soft sm:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sand/60">
                Ready to stop missing calls?
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                Stop losing reservations to missed calls.
              </h2>
              <p className="mt-4 text-sand/70">
                Book a demo and hear Auto Recept handle a real restaurant call.
                We will map your menu, hours, and policies so the AI sounds like
                your best host from day one.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-ink"
                href="mailto:hello@autorecept.ai"
              >
                Book a Demo
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-sand/40 px-6 py-3 text-sm font-semibold text-sand transition hover:border-gold hover:text-gold"
                href="#pricing"
              >
                View Pricing
              </a>
              <div className="rounded-2xl border border-sand/20 bg-sand/10 px-4 py-3 text-xs text-sand/70">
                Average onboarding time: 3-5 days with your menu and policies.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-white py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-cocoa sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg text-ink">Auto Recept</p>
            <p>AI voice receptionist for restaurants.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="text-sm font-medium text-cocoa" href="#features">
              Features
            </a>
            <a className="text-sm font-medium text-cocoa" href="#pricing">
              Pricing
            </a>
            <a className="text-sm font-medium text-cocoa" href="#demo">
              Book a Demo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
