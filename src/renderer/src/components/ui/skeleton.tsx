import { cx } from '@renderer/lib/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('animate-pulse rounded-md bg-primary/10', className)} {...props} />
}

export { Skeleton }