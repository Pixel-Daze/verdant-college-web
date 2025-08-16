// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 引入 normalize.css 重置浏览器默认样式
import 'normalize.css';
import './assets/styles/common.scss'
import Router from './router'

createRoot(document.getElementById('root')!).render(
    <Router />,
)
