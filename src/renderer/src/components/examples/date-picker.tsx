import { DatePickerWithRange } from '@renderer/components/date-picker-with-range'
import { Card, CardContent } from '@renderer/components/ui/card'
import { Label } from '@renderer/components/ui/label'

export const DemoDatePicker = () => (
  <Card>
    <CardContent className="pt-6">
      <div className="space-y-2">
        <Label htmlFor="date" className="shrink-0">
          Pick a date
        </Label>
        <DatePickerWithRange className="[&>button]:w-[260px]" />
      </div>
    </CardContent>
  </Card>
)
