import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routers/router.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='host-grotesk'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
          <ToastContainer />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>,
)
