import React, {useState} from 'react';
import style from './navbar.module.scss';
import menu from '../../Assests/menu.png';

import filter from '../../Assests/filter.png';
import Filter from '../Filter/filter';
import Toast from '../Toast/Toast';


function Navbar(props) {
    const [toggle, setToggle] = useState(false);
    

    const filterClick = () => {
        setToggle(!toggle);
    }

    const freelancersClick = () => {
        window.location.href='/';
    }


    return (
        <div className={style.container}>
            {toggle &&
                <Filter setFilters={props.setFilters} filters={props.filters} />
            }
            <ul>
                <li>
                    <img src={menu} alt="menu"/>
                </li>
                <li onClick={freelancersClick}>Freelancers</li>
                <li><Toast /></li>
                <li onClick={filterClick}><img src={filter} alt="filter"/></li>
            </ul>
        </div>
    )
}

export default Navbar;
