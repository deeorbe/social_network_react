import React from 'react'
import nv from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const NavigationPage = () => {
    return (
        <div className={nv.navigation}>
            
            <div className={nv.item}>
                <NavLink to='/profil' activeClassName={nv.active}>Profile</NavLink>
            </div>
            <div className={nv.item}>
                <NavLink to='/dialogs' activeClassName={nv.active}>Message</NavLink>
            </div>
            <div className={nv.item}>
                <NavLink to='/music' activeClassName={nv.active}>Music</NavLink>
            </div>
            <div className={nv.item}>
                <NavLink to='/news' activeClassName={nv.active}>News</NavLink>
            </div>
            <div className={nv.item}>
                <NavLink to='/settings' activeClassName={nv.active}>Settings</NavLink>
            </div>

        </div>);
}
export default NavigationPage;