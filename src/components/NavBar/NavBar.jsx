import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Navbar, NavItem} from 'react-materialize';


const NavBarTop = (props) => {

    let nav = 
    <Navbar>
        <NavItem href='/' classname='NavBar-link'> Home </NavItem>
        <NavItem href='setuptransaction'>Set Up Transaction</NavItem>
        <NavItem href='transactionhistory'>Past Transactions</NavItem>
        </Navbar>
    //     :
    // <Navbar>
    //   <NavItem href='/login' className='NavBar-link'>LOG IN</NavItem>
    //   <NavItem href='/signup' className='NavBar-link'>SIGN UP</NavItem>
    // </Navbar>;

    return (
        <header>
            {nav}
        </header>
    )
};

export default NavBarTop;