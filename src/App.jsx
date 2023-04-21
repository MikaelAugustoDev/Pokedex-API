import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "./contexts"
import { AppRoute } from "./pages/routes"


function App() {

  return (
    <>
      <ThemeProvider>

        <GlobalStyle/>

        <AppRoute />

      </ThemeProvider>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Manrope', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #fac705;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3e58af;
  }
`