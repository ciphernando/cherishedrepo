import { useState } from 'react'
import '../app/globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import  Header from './components/Header'
import  Switcher from './components/DrawerstyleSwitcher'
import { Link } from 'react-router-dom'
import mangal from '/mangal.svg' 

function App() {
 
  return (
    <>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    
    <main className='flex flex-col'>
      
<Header name="ਧਨਾਸਰੀ ਮਹਲਾ ੫ ॥"/>
<img src={mangal} />
ਅਉਖੀ ਘੜੀ ਨ ਦੇਖਣ ਦੇਈ ਅਪਨਾ ਬਿਰਦੁ ਸਮਾਲੇ ॥
ਹਾਥ ਦੇਇ ਰਾਖੈ ਅਪਨੇ ਕਉ ਸਾਸਿ ਸਾਸਿ ਪ੍ਰਤਿਪਾਲੇ ॥੧॥
ਪ੍ਰਭ ਸਿਉ ਲਾਗਿ ਰਹਿਓ ਮੇਰਾ ਚੀਤੁ ॥ ਆਦਿ ਅੰਤਿ ਪ੍ਰਭੁ ਸਦਾ ਸਹਾਈ ਧੰਨੁ ਹਮਾਰਾ ਮੀਤੁ ॥ ਰਹਾਉ ॥
ਮਨਿ ਬਿਲਾਸ ਭਏ ਸਾਹਿਬ ਕੇ ਅਚਰਜ ਦੇਖਿ ਬਡਾਈ ॥
ਹਰਿ ਸਿਮਰਿ ਸਿਮਰਿ ਆਨਦ ਕਰਿ ਨਾਨਕ ਪ੍ਰਭਿ ਪੂਰਨ ਪੈਜ ਰਖਾਈ ॥੨॥੧੫॥੪੬॥

<Switcher/>
    </main>
</ThemeProvider>
</>
  )
}

export default App
