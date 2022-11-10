import * as React from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { orange } from "@mui/material/colors"

import logo from "./logo.svg"
import "./App.css"
import Button from "./components/Button"

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

const theme = createTheme({
  status: {
    danger: orange[500]
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Button label="Button" onClick={() => {}} color="primary" variant="outlined" />
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
