import { CalendarDots, CreditCard, UserCircle } from '@phosphor-icons/react'

export const SimpleCard = () => (
  <div className="max-w-sm lg:col-start-3 lg:row-end-1">
    <h2 className="sr-only">Summary</h2>
    <div className="rounded-xl bg-surface shadow-3 ring-1 ring-interactive text-primary">
      <dl className="flex flex-wrap">
        <div className="flex-auto pl-6 pt-6">
          <dt className="text-sm/6 font-semibold ">Amount</dt>
          <dd className="mt-1 text-base font-semibold ">$10,560.00</dd>
        </div>
        <div className="flex-none self-end px-6 pt-4">
          <dt className="sr-only">Status</dt>
          <dd className="inline-flex items-center gap-x-1.5 rounded-full bg-info-soft px-2 py-1 text-xs font-medium text-info border border-info">
            <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-[--color-info-9]">
              <circle r={3} cx={3} cy={3} />
            </svg>
            Pending
          </dd>
        </div>
        <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-line px-6 pt-6">
          <dt className="flex-none">
            <span className="sr-only">Client</span>
            <UserCircle weight="duotone" aria-hidden="true" className="size-6 text-tertiary" />
          </dt>
          <dd className="text-sm/6 font-medium ">Alex Curren</dd>
        </div>
        <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dt className="flex-none">
            <span className="sr-only">Due date</span>
            <CalendarDots weight="duotone" aria-hidden="true" className="size-6 text-tertiary" />
          </dt>
          <dd className="text-sm/6 text-secondary">
            <time dateTime="2023-01-31">January 31, 2023</time>
          </dd>
        </div>
        <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dt className="flex-none">
            <span className="sr-only">Status</span>
            <CreditCard weight="duotone" aria-hidden="true" className="size-6 text-tertiary" />
          </dt>
          <dd className="text-sm/6 text-secondary">Paid with MasterCard</dd>
        </div>
      </dl>
      <div className="mt-6 border-t border-line px-6 py-6">
        <a href="#" className="text-sm/6 font-semibold ">
          Download receipt <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
)
