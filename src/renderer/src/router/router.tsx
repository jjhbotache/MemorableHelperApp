import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import OrdersManager from '@/pages/OrdersManager'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'orders-manager',
    element: <OrdersManager />
  }
])
