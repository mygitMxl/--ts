import { Button, } from 'antd'
import React from 'react'
import { Outlet,useRoutes, Link } from 'react-router-dom'
import MyRouter from './router/index copy'

type Props = {}
export default function App({}: Props) {
  const Outlet =useRoutes(MyRouter)
  return (
    <div>
    {/* <Outlet/> */}
     {Outlet}
    </div>
  )
}