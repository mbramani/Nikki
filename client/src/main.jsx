import React from 'react'
import ReactDOM from 'react-dom/client'

// redux
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './features/store'

// App component
import App from './App'

// styles
import GlobalStyles from './styles/GlobalStyles'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
