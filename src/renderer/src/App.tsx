import { cx } from '@renderer/lib/utils'

import { DemoCookieSettings } from '@renderer/components/examples/cookie-settings'
import { DemoCreateAccount } from '@renderer/components/examples/create-account'
import { DemoDatePicker } from '@renderer/components/examples/date-picker'
import { DemoGithub } from '@renderer/components/examples/github-card'
import { DemoNotifications } from '@renderer/components/examples/notifications'
import { DemoPaymentMethod } from '@renderer/components/examples/payment-method'
import { DemoReportAnIssue } from '@renderer/components/examples/report-an-issue'
import { DemoShareDocument } from '@renderer/components/examples/share-document'
import { DemoTeamMembers } from '@renderer/components/examples/team-members'

const DemoContainer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cx('flex items-center justify-center [&>div]:w-full', className)} {...props} />
)

export const App = () => (
  <>
    <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <DemoContainer>
          <DemoCreateAccount />
        </DemoContainer>
        <DemoContainer>
          <DemoPaymentMethod />
        </DemoContainer>
      </div>
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <DemoContainer>
          <DemoTeamMembers />
        </DemoContainer>
        <DemoContainer>
          <DemoShareDocument />
        </DemoContainer>
        <DemoContainer>
          <DemoDatePicker />
        </DemoContainer>
        <DemoContainer>
          <DemoNotifications />
        </DemoContainer>
      </div>
      <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
        <DemoContainer>
          <DemoReportAnIssue />
        </DemoContainer>
        <DemoContainer>
          <DemoGithub />
        </DemoContainer>
        <DemoContainer>
          <DemoCookieSettings />
        </DemoContainer>
      </div>
    </div>
  </>
)
