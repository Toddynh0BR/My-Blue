import { createRoot } from 'react-dom/client'
import GlobalStyle from './style/global';
import { StrictMode } from 'react'
import { MyBlue } from "./MyBlue"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
     <MyBlue />
  </StrictMode>,
)
