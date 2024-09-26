import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header() {
    const [toggleMenu, setToggleMenu ]= useState(false);
    
    return <header className="flex justify-between px-5 py-5 bg-primary display:flex justify-around">
        
        <a class="font-bold text-black text-4xl" href="#">VSR</a>
        <nav className="sticky top-0 nav-bar hidden md:block">
        <ul className="flex text-black text-2xl">
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#project'>Project</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#contact'>Contact</a></li>
            <section class="banner"></section>
        </ul>
        </nav>
        
       { toggleMenu && <nav className="block md:hidden mobile-nav">
        <ul onClick={()=> setToggleMenu(!toggleMenu)} className="flex flex-col text-white">
        <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#project'>Project</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=> setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-black h-5'/></button>
    </header>
} 