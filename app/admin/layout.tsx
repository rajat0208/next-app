import React, { ReactNode } from 'react'

interface props{
    children: ReactNode;
}

const AdminLayout = ({children }:props) => {
  return (
    <div className='flex'>
        <aside className='bg-slate-700 p-4 mr-5'>AdminSide Bar</aside>
        <div>{children}</div>
    </div>
  )
}

export default AdminLayout