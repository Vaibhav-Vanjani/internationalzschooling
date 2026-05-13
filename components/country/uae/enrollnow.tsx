type EnrollmentStepsProps = {
  title: string;
  subtitle: string;

  button: {
    text: string;
    href: string;
  };

  steps: string[];
};

export default function EnrollmentSteps({
  title,
  subtitle,
  button,
  steps,
}: EnrollmentStepsProps) {
  return (
    <section className="r-w px-4 py-16">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
          {title}
        </h2>

        <p className="mt-3 text-base md:text-lg text-emerald-700">
          {subtitle}
        </p>
      </div>

      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step}
            className="relative rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <span className="absolute -top-4 left-0 right-0 mx-auto flex w-max items-center justify-center rounded-full bg-emerald-700 px-3 py-2 text-sm font-bold text-white">
              Step {index + 1}
            </span>

            <p className="text-center text-sm font-medium text-emerald-900 md:text-base">
              {step}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex justify-center">
        <a
          href={button.href}
          className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-8 py-4 text-base font-semibold text-white transition hover:bg-emerald-600"
        >
          {button.text}
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: title,
            description: subtitle,
            totalTime: "PT5M",

            step: steps.map((step, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              name: step,
              text: step,
            })),
          }),
        }}
      />
    </section>
  );
}
