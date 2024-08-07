import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './components/App'
import './scss/common/index.scss'

const container = document.getElementById('root')
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)