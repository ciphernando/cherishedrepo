import React, { useState } from 'react'
import  Header from '../components/Header'
import  Switcher from '../components/DrawerstyleSwitcher'
import { ThemeProvider } from "@/components/theme-provider"
import { headingStyle } from '../theme'



const Brahamkavach  = () => {
  
  
  return (
    <ThemeProvider>
        <Header name="ਬ੍ਰਹਮ ਕਬੱਚ"/>
        
<div className="flex flex-col items-center text-center">
  

    
<h3>    
ਖੜਗ ਖੰਡਾ ਅਸੀ ਅਰਿਗਰ ਧਰਮ ਰੱਚ ਤੱਗ ਛਤ੍ਰੀ ॥ <br/>
ਬਿਸ਼੍ਵ ਪਾਲ ਭੂਪਾਲ ਪੱਛ ਪਲ ਭੱਛ ਰਣ ਕੱਛ ਅੱਤ੍ਰੀ ॥ <br/>
ਰਾਜ ਮੰਡਾ ਅਤਿ ਪ੍ਰਚੰਡਾ ਈਸ੍ਵਰੀ ਕਰਵਾਰ ਹੈ ॥ <br/>
ਸ਼ਕਤਿ ਬ੍ਰਹਿਮੀ ਬੈਸ਼ਨਵੀ ਭਵਾਨੀ ਤੂੰ ਤਰਵਾਰ ਹੈ ॥ <br/>
ਨਿਤ ਜਿਯੋਤੀ ਮੁਕਤਿ ਦਾਇਕ ਧਾਰਾਧਾਰ ਕ੍ਰਿਪਾਨ ਹੈ ॥ <br/>
ਚੰਡਕਾ ਮੰਡਕਾ ਮ੍ਰਿਤਕਾ ਜਗਤ ਜਨਨੀ ਕਾਲਕਾ ਗੁਨਖਾਨਿ ਹੈ ॥ <br/>
ਭਵ ਮਾਨਕਾ ਖਲ ਹਾਂਨ ਕਾ ਰੱਤ ਪਾਲਕਾ ਜਗ ਮਾਨ ਹੈ ॥ <br/>
ਇਹ ਕਵਚਿ ਬ੍ਰਹਮਾ ਕੋ ਬਤੀਸਾ ਪਢੈ ਜੋ ਨਿਤ ਛੱਤ੍ਰੀ ॥ <br/>
ਰਣ ਜੀਤ ਲੈਹ ਨਿਰਭੀਤ ਰਹਿ ਰਿਧਿ ਸਿਧਿ ਪਾਵੈ ਅੱਤ੍ਰੀ ॥ <br/>
ਲਹਿ ਬੇਦ ਭੇਦ ਜੋ ਪਢੈ ਬਿਪ੍ਰਬੈਸਯ ਧੰਨ ਸੁਖ ਸੰਪਤਾ ॥ <br/>
ਧਨ ਧਾਮ ਤਨ ਅਰੋਗ ਸੂਦਰ ਪਾਇ ਸੁਖ ਅਕੰਪਤਾ ॥ <br/>
ਇਹ ਬੋਲਾ ਹਰਿਗੋਬਿੰਦ ਕਾ ਸੁਣੋ ਖਾਲਸਾ ਬੀਰ ॥ <br/>
ਫਤਿਹ ਪਾੳ ਮੈਦਾਨ ਮੈ ਪਕੜ ਹਾਥ ਸ਼ਮਸ਼ੀਰ ॥ <br/>
</h3>
<br />
<h2 className={headingStyle}>ਦੋਹਰਾ</h2>
<h3>
ਯਾ ਬਿਧਿ ਨਾਮ ਉਚਾਰ ਬਿਧਿ ਪੁਨਹ ਕਰੋ ਪ੍ਰਯੋਗ ॥<br/>
ਪਾਠ ਸਵਾ ਲੱਖ ਹਵਨ ਕਰ ਜੀਤ ਜੰਗ ਤਬ ਹੋਗ ॥
</h3>
    <span className='absolute bottom-0' >
      
    <Switcher/>
    </span>
</div>
        
    </ThemeProvider>
  )
}

export default Brahamkavach 