import { DescriptionList } from '@renderer/components/description-list'
import { PricingView } from '@renderer/components/pricing-page'

const App = () => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="h-svh">
      {/*<DescriptionList />*/}
      <PricingView />
    </div>
  )
}

export default App
