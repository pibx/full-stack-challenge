import * as React from 'react'
import ContainerDimensions from 'react-container-dimensions'

export interface Viewport {
  width: number
  height: number
}

export const ViewportContext = React.createContext<Viewport>({
  width: 0,
  height: 0
})

export const { Consumer: ViewportConsumer } = ViewportContext

export const useViewport = () => {
  return React.useContext(ViewportContext)
}

export const ViewportProvider: React.FC = ({ children }) => (
  <ContainerDimensions>
    {({ width, height }) => (
      <ViewportContext.Provider value={{ width, height }}>
        {children}
      </ViewportContext.Provider>
    )}
  </ContainerDimensions>
)
