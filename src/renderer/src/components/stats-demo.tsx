import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import { TrendDown, TrendUp, CursorClick, EnvelopeOpen, Users } from '@phosphor-icons/react'
import { cx } from '@renderer/lib/utils'

const stats = [
  {
    id: 1,
    name: 'Total Subscribers',
    stat: '71,897',
    icon: Users,
    change: '122',
    changeType: 'increase'
  },
  {
    id: 2,
    name: 'Avg. Open Rate',
    stat: '58.16%',
    icon: EnvelopeOpen,
    change: '5.4%',
    changeType: 'increase'
  },
  {
    id: 3,
    name: 'Avg. Click Rate',
    stat: '24.57%',
    icon: CursorClick,
    change: '3.2%',
    changeType: 'decrease'
  }
]

export const StatsDemo = () => (
  <div>
    <h3 className="text-base font-semibold ">Last 30 days</h3>

    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-lg bg-surface px-4 pb-12 pt-5 border border-interactive sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-lg bg-accent-bold p-3">
              <item.icon weight="duotone" aria-hidden="true" className="size-6 text-on-accent" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-secondary">{item.name}</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold ">{item.stat}</p>
            <p
              className={cx(
                item.changeType === 'increase' ? 'text-success' : 'text-danger',
                'ml-2 flex items-baseline text-sm font-semibold'
              )}
            >
              {item.changeType === 'increase' ? (
                <TrendUp
                  weight="duotone"
                  aria-hidden="true"
                  className="size-5 shrink-0 self-center text-success"
                />
              ) : (
                <TrendDown
                  weight="duotone"
                  aria-hidden="true"
                  className="size-5 shrink-0 self-center text-danger"
                />
              )}

              <span className="sr-only">
                {' '}
                {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by{' '}
              </span>
              {item.change}
            </p>
            <div className="absolute inset-x-0 bottom-0 bg-plate px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a href="#" className="font-medium text-accent hover:text-accent-bold">
                  View all<span className="sr-only"> {item.name} stats</span>
                </a>
              </div>
            </div>
          </dd>
        </div>
      ))}
    </dl>
  </div>
)
