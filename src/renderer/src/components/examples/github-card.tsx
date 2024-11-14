import { CaretDown, Circle, Plus, Star } from '@phosphor-icons/react'

import { Button } from '@renderer/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@renderer/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@renderer/components/ui/dropdown-menu'
import { Separator } from '@renderer/components/ui/separator'

export const DemoGithub = () => (
  <Card>
    <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
      <div className="space-y-1">
        <CardTitle>shadcn/ui</CardTitle>
        <CardDescription>
          Beautifully designed components that you can copy and paste into your apps. Accessible.
          Customizable. Open Source.
        </CardDescription>
      </div>
      <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
        <Button variant="secondary" className="px-3 shadow-none">
          <Star weight="duotone" className="text-warning" />
          Star
        </Button>
        <Separator orientation="vertical" className="h-[20px]" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="px-2 shadow-none">
              <CaretDown className="text-secondary-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" alignOffset={-5} className="w-[200px]" forceMount>
            <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Future Ideas</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Plus /> Create List
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <Circle className="mr-1 h-3 w-3 fill-[--color-info-9] text-[--color-info-11]" />
          TypeScript
        </div>
        <div className="flex items-center text-warning">
          <Star className="mr-1 h-3 w-3" />
          20k
        </div>
        <div className="text-secondary">Updated April 2023</div>
      </div>
    </CardContent>
  </Card>
)
