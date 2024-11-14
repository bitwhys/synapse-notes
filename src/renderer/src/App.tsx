import { DescriptionList } from '@renderer/components/description-list'
import { PricingView } from '@renderer/components/pricing-page'
import { SimpleCard } from '@renderer/components/simple-card'
import { StatsDemo } from '@renderer/components/stats-demo'
import { ProjectCardsGrid } from '@renderer/components/project-cards-grid'

const App = () => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="h-svh">
      {/*<DescriptionList />*/}
      <PricingView />
      {/*<SimpleCard />*/}
      {/*<ProjectCardsGrid />*/}
      {/*<StatsDemo />*/}
    </div>
  )
}

export default App
