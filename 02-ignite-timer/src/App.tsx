import { Button } from "./components/Button/Button"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
function App() {

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Button variant="primary"/>
        <Button variant="secondary"/>
        <Button variant="sucess"/>
        <Button variant="danger"/>
        <Button />
      </ThemeProvider>
    </div>
  )
}

export default App
