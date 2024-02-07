import React from 'react'
import {NavLink} from 'react-router-dom';
export const Header = () => {
  return (
    <header className="headComp">
        <div className ="logo">
            <span>A</span>
            <h3>Alonso Antuña Gómez</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <NavLink to = "/" className={({isActive}) => isActive ? "active": ""}>Sobre mí</NavLink>
                </li>
                <li>
                    <NavLink to = "/curriculum" className={({isActive}) => isActive ? "active": ""}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to = "/projects" className={({isActive}) => isActive ? "active": ""}>Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to = "/contact" className={({isActive}) => isActive ? "active": ""}>Contacto</NavLink>
                </li>
            </ul>
        </nav>

    </header>
  )
}
