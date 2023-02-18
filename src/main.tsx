import React from 'react'
import ReactDOM from 'react-dom/client'
//样式初始化
import 'reset-css'
//全局样式
import '@/assets/style/gloable.scss'
//antd
import 'antd/dist/antd.css'
import APP from './App'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <APP />
    </BrowserRouter>
  </React.StrictMode>,
)
