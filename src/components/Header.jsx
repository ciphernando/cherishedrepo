import React from 'react'
import { ModeToggle } from "@/components/mode-toggle"
import { HamLink } from './LinkStyles'
import {headingStyle} from '../theme'

import {
    
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    } from "@/components/ui/sheet"
    
    import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
    
const Header = (props) => {
    return (

        <>

            <header className='flex justify-between items-center'>
                <Sheet>
                    <SheetTrigger><Menu />  </SheetTrigger>
                    <SheetContent className="flex flex-col  items-start" side="left">
                        <SheetHeader>
                            <SheetTitle className='ml-4' ><Link to='/' >Cherished</Link></SheetTitle>
                        </SheetHeader>
                        <SheetDescription>
                            {/*  */}
                        </SheetDescription>
                        <nav class="md:ml-auto flex flex-col mt-4 justify-start items-start">
                            <HamLink  to="/japjisahib" name="ਜਪੁਜੀ ਸਾਹਿਬ"/>
                            <HamLink  to="/chaupaisahib" name="ਚੌਪਈ ਸਾਹਿਬ"/>
                            <HamLink  to="/brahamkavach" name="ਬ੍ਰਹਮ ਕਬੱਚ"/>
                            <HamLink  to="/rehrassahib" name="ਰਹਿਰਾਸ ਸਾਹਿਬ"/>
                            <HamLink  to="/ardaas" name="ਅਰਦਾਸ"/>
                        </nav>
                        
                        {/* <span className="flex justify-center  text-sm text-slate-600"><SquareSlash size={16} strokeWidth={2.5} className='mt-1 mr-2 ' />Inspired by Material You. Made with shadcn</span> */}

                    </SheetContent>
                </Sheet>
                <span className={` text-slate-100 text-2xl ${headingStyle}`}>{props.name}</span>
                <ModeToggle />

            </header>


        </>
    )
}

export default Header

// Header.defaultProps = {
//     title: 'Cherished',
// }