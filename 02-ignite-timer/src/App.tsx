import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './context/CyclesContext'

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={defaultTheme}>
                <BrowserRouter>
                    <CyclesContextProvider>
                        <Router />
                    </CyclesContextProvider>
                </BrowserRouter>
                <GlobalStyle />
            </ThemeProvider>
        </div>
    )
}

export default App
