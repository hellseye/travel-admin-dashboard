import React from 'react'
import { Outlet } from 'react-router'

export default function AdminLayout() {
  return (
    <div className='admin-layout'>
      admin - layout
      <aside className='hidden lg:block'>sidebar</aside>
      <Outlet/>
    </div>
  )
}
