import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

export default function Header() {
    let category = useSelector(state => state.category);
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">News App</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            category.length > 0 && category.map((c, i) => (
                                <li className="nav-item" key={i}>
                                    <NavLink className="nav-link text-capitalize" to={`/category/${c}`}>{c}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

