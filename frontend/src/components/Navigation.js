import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav id="navpr" className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <Link id="titulopr" className="navbar-brand" to="/">
                        <i id="titulopr" className="material-icons">
                         </i> ☕ 🍪 DESAYUNOS ONLINE 🍪 ☕
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/desayunos" className="nav-link">Desayunos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/desayunos/create" className="nav-link">Crear Desayuno</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/client" className="nav-link">Crear Cliente</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
