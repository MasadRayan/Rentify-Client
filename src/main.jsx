import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routers/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='host-grotesk'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
