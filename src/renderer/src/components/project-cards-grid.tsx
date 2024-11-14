import { DotsThree } from '@phosphor-icons/react'
import { cx } from '@renderer/lib/utils'
import reformImageUrl from '@renderer/assets/Reform Logo.svg'
import tupleImageUrl from '@renderer/assets/Tuple Logo.svg'
import savyImageUrl from '@renderer/assets/SavvyCal Logo.svg'

const statuses = {
  Paid: 'text-success bg-success-soft ring-success',
  Withdraw: 'text-warning bg-warning-soft ring-warning',
  Overdue: 'text-danger bg-danger-soft ring-danger'
}
const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: tupleImageUrl,
    lastInvoice: {
      date: 'December 13, 2022',
      dateTime: '2022-12-13',
      amount: '$2,000.00',
      status: 'Overdue'
    }
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: savyImageUrl,
    lastInvoice: {
      date: 'January 22, 2023',
      dateTime: '2023-01-22',
      amount: '$14,000.00',
      status: 'Paid'
    }
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: reformImageUrl,
    lastInvoice: {
      date: 'January 23, 2023',
      dateTime: '2023-01-23',
      amount: '$7,600.00',
      status: 'Withdraw'
    }
  }
]

export const ProjectCardsGrid = () => (
  <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
    {clients.map((client) => (
      <li
        key={client.id}
        className="overflow-hidden rounded-xl border border-interactive bg-surface"
      >
        <div className="flex items-center gap-x-4 border-b border-separator bg-plate p-6">
          <img
            alt={client.name}
            src={client.imageUrl}
            className="size-12 flex-none rounded-lg bg-surface object-cover ring-1 ring-interactive"
          />
          <div className="text-sm/6 font-medium ">{client.name}</div>
          <div className="relative ml-auto">
            <button className="-m-2.5 block p-2.5 text-tertiary hover:text-secondary">
              <span className="sr-only">Open options</span>
              <DotsThree weight="bold" aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
        <dl className="-my-3 divide-y divide-separator px-6 py-4 text-sm/6">
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-tertiary">Last invoice</dt>
            <dd className="text-secondary">
              <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
            </dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-tertiary">Amount</dt>
            <dd className="flex items-start gap-x-2">
              <div className="font-medium ">{client.lastInvoice.amount}</div>
              <div
                className={cx(
                  statuses[client.lastInvoice.status],
                  'rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset'
                )}
              >
                {client.lastInvoice.status}
              </div>
            </dd>
          </div>
        </dl>
      </li>
    ))}
  </ul>
)
