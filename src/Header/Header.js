
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

class Header extends Component{
    render(){
        return (
            <div className = "header">
                <Logo  logoname ="myapp"></Logo>
                <div>
                    <NavLink to='/'>Home </NavLink>
                    <NavLink to='/about'>About us </NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    
                </div>
            </div>
        )
    }

}

export default Header