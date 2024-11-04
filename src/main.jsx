import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopServiceProvider from './service/ShopService.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopServiceProvider>
      <App />
    </ShopServiceProvider>
  </BrowserRouter>
)
