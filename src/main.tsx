import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import Hd from './layout/Hd.tsx'
import Ft from './layout/Ft.tsx'
import Content from './pages/Content.tsx'

createRoot(document.getElementById('root')!).render(
  
<StrictMode>
  <BrowserRouter>
    <Hd />
    <Content />
    <Ft />
  </BrowserRouter>
</StrictMode>,
)
