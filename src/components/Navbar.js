import React from 'react'
import styled ,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { Button } from './Button'
import {FaBars} from 'react-icons/fa'


const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">ELIXR</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item,index) => (
                    <NavMenuLink to={item.link} key={index}>{item.title}</NavMenuLink>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true">Contact Us</Button>
            </NavBtn>
        </Nav>   
    )
}

export default Navbar

const Nav = styled.nav`
    height: 60px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    font-size: 1rem;
    position: fixed;
    width: 100%;
    z-index: 100;
`

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 760px){
        display: block;
        color: white;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%,50%);
        font-size: 1.8rem;
        cursor: pointer;

`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 760px){
        display: none;
    }
`

const NavMenuLink = styled(Link)`
    ${NavLink}
`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 760px){
        display: none;
    }
`
