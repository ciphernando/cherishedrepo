import React from 'react'
import { ChevronUp, Minus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { DrawerLink } from './LinkStyles'

const Switcher = () => {
  return (
    
    <>
    <div className=' flex justify-center mt-6' >
      
    <Drawer>
  <DrawerTrigger>
    
  {/* <ChevronUp className=' mx-auto flex justify-center items-center align-center content-center text-center '/> */}
  <div className="w-8 bg-slate-400 h-1 my-8 mx-auto rounded-full"></div>
  </DrawerTrigger>
  <DrawerContent  className='rounded-t-[35px] ' >
    <DrawerHeader>
      <DrawerTitle></DrawerTitle>
      <DrawerDescription></DrawerDescription>
    </DrawerHeader>

    <DrawerLink to="/japjisahib" name="ਜਪੁਜੀ ਸਾਹਿਬ"/>
     <DrawerLink to="/chaupaisahib" name="ਚੌਪਈ ਸਾਹਿਬ"/>
    <DrawerLink to="/brahamkavach" name="ਬ੍ਰਹਮ ਕਬੱਚ"/>
    <DrawerLink to="/rehrassahib" name="ਰਹਿਰਾਸ ਸਾਹਿਬ"/>
     <DrawerLink to="/ardaas" name="ਅਰਦਾਸ"/>
    <DrawerFooter>
      <DrawerClose>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    </div>
</>
    
    
  )
}

export default Switcher