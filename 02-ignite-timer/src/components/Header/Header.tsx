import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo.svg'
import { Timer, Scroll } from 'phosphor-react'

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={logoIgnite} alt="" />
            <nav>
                <NavLink to="/">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}

// Nav Link to - realizando a renderização para as páginas
// ele cria uma classe active e um aria-current='page'
// podendo ser utilizado para realizar estilização
