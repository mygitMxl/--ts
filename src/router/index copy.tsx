import React,{Children, lazy} from 'react'
import Home from '@/view/home/home'
import Page1 from '@/view/page1/index'
import Page2 from '@/view/page2/index'
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom'
const routes=[
      /* 嵌套路由 */
      {
            path:'/',
            element:<Navigate to='/page1'/>
      },
      {
            path:'/',
            element:<Home/>,
            children:[
                  {
                        path:'/page1',
                        element:<Page1/>
                  },
                  {
                        path:'/page2',
                        element:<Page2/>
                  }
            ]
              
            
      }
]
export default  routes