import React, {usedState} from 'react';
import {link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/fa';
import { AiOutlineAccountBook, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';

function Navbar(props){

    const [sidebar, setSidebar] = usedState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div classname='Navbar'>
                <link to="#" classname='menu-bars' >
                    <FaIcons.FaBars onClick={showSidebar}/>
                </link>
            </div>
            <nav classname={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul classname='nav-menu-items'>
                    <li classname='navbar-toggle'>
                    <link to="#" classname='menu-bars'>
                        <AiOutlineClose />
                    </link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} classname={item.cName}>
                                <link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;