import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme9 } from "gregbrimble-components"

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
  // TODO: Toast option that the update is ready
}

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme9}>
      <>
        {element}
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}
