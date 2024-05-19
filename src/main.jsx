import ReactDOM from 'react-dom'
import i18n from './utils/translation/i18n'
import { I18nextProvider } from 'react-i18next'
import App from './App.jsx'
import './main.css'
import Provider from './contexts/Provider'
import { CartProvider } from './contexts/store'
import { SearchProvider } from './contexts/SearchContext'

const rootEl = document.getElementById('root')

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)

  root.render(
    <Provider>
      <CartProvider>
          <SearchProvider>
            <I18nextProvider i18n={i18n} initialLanguage={'en'}>
              <App />
            </I18nextProvider>
          </SearchProvider>
      </CartProvider>
    </Provider>
  )
}
