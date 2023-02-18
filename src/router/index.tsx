import React,{lazy, Suspense} from 'react'
const Home=lazy(():any=>{import('../view/home/home')}) 
const APP=lazy(():any=>{import('../App')}) 
import App from '../App'
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom'
type Props = {}

const BaseRouter =()=>(/* 注意这里是小（）省略了return */
      <BrowserRouter>
        <Routes>{/* routes代表多条路由 */}
              <Route path='/' element={<APP/>}  >
                 <Route path='/' element={<Navigate to={'/home'} />}/>
                 <Route path='/home' element={<Home/>}/>   
              </Route>
        </Routes>
    
      </BrowserRouter>
)
export default  BaseRouter