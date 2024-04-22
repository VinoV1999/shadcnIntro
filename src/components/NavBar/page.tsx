'use client'
import React from 'react'
import ThemePicker from '../ThemePicker'

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between text-4xl py-2">
        <h1 className="hover:cursor-pointer" onClick={() => { alert('Navigate to home page!!') }}>Explore Shadcn</h1>
       <ThemePicker />
      </nav>
  )
}

export default NavBar