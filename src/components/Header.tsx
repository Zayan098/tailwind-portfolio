'use client'
import {useState} from 'react';
import { userInfo ,headerItems} from '@/constants/constant';
import { NavItems } from '@/models/Header';
import { BiMenu } from 'react-icons/bi';

const Header : React.FC = () => {
  const[ navItem, showNavItems ] = useState<boolean>(false);
    return (
   <header className="bg-white p-6 justify-between fixed top-0  w-full z-10 md:flex ">
     <div className="flex justify-between">
<h2 className="text-2xl font-bold">{userInfo.name}</h2>
<BiMenu
size={30}
className="md:hidden"
onClick={() => showNavItems (prevState => !prevState) }
/>
     </div>
     <div className={`mr-8 md:space-x-6 mt-3 md:mt-0  md:block ${navItem ? 'block':'hidden'}`}>
       {
       Object.keys( headerItems).map(item => (
        <a
        key={headerItems[item as keyof NavItems].label}
        className="block md:inline-block cursor-pointer"
        href={`#${headerItems[item as keyof NavItems].page}`}
        >{headerItems[item as keyof NavItems].label}</a>
        ))
       }

     </div>
   </header>

  )
}

export default Header;


// git init
// git remote add origin https://github.com/Zayan098/tailwind-portfolio.git
// git add .
// git commit -m "first commit"
// git push -u origin main