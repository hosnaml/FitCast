import React, {usedState} from 'react';
import {link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/fa';
import { AiOutlineAccountBook, AiOutlineClose } from 'react-icons/ai';

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
                    <link to="#" classname='menu-bars'>
                        <AiOutlineClose />
                    </link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;