import { DescriptionList } from '@renderer/components/description-list'

const App = () => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="h-svh flex flex-col justify-center items-center">
      <DescriptionList />
    </div>
  )
}

export default App
