import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/nav'
import MainContent from './components/maincontent'

createRoot(document.getElementById('root')).render(
  <>
  <NavBar />
  <MainContent />
  
  </>
)
