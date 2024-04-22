'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from './ui/button'

const ThemePicker = () => {
    const { theme, setTheme } = useTheme();
    const variant = theme === 'light' || theme === 'system'  ? "default" : "light";
  return (
    <Button variant={variant} onClick={() => { setTheme(theme === 'light' || theme === 'system' ? 'dark' : 'light') }}>{theme === 'light' || theme === 'system' ? 'Dark' : 'Light'}</Button>
  )
}

export default ThemePicker