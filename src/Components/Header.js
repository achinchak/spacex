import React from 'react'
import '../Styles/home.css'

const Header = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
                    <a className="navbar-brand" href="!#">SpaceX</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">About <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Header