const CheckIcon = ({ className }) => (
  <svg
    className={`fill-current ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
  >
    <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
  </svg>
)

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt'
]

export const PricingPage = () => (
  <div className="py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-4xl sm:text-center">
        <h2 className="text-pretty text-5xl font-semibold tracking-tight text-primary sm:text-balance sm:text-6xl">
          Simple no-tricks pricing
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium text-secondary sm:text-xl/8">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit
          ut non voluptas in. Explicabo id ut laborum.
        </p>
      </div>
      <div className="bg-surface mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-7 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-3">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-3xl font-semibold tracking-tight text-primary">
            Lifetime membership
          </h3>
          <p className="mt-6 text-base/7 text-secondary">
            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis
            blanditiis repellendus etur quidem assumenda.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm/6 font-semibold text-accent">What’s included</h4>
            <div className="h-px flex-auto bg-[--brd-interactive]" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-secondary sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
          <div className="rounded-2xl bg-plate py-10 text-center ring-1 ring-inset ring-gray-7 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-accent">Pay once, own it forever</p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-primary">$349</span>
                <span className="text-sm/6 font-semibold tracking-wide text-tertiary">USD</span>
              </p>
              <a
                href="#"
                className="mt-10 block w-full rounded-lg bg-accent-bold px-3 py-2 text-center text-sm ring-1 ring-offset-4 ring-offset-[--bg-plate] ring-accent font-semibold text-on-accent  hover:bg-accent-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get access
              </a>
              <p className="mt-6 text-xs/5 text-tertiary">
                Invoices and receipts available for easy company reimbursement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
