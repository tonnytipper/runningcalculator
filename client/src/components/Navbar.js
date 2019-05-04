import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render () {
        
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link"> Login </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link"> Register </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link"> User </Link>
                </li>
                <li className="nav-item">
                    <span className="span-clickable" onClick={this.logOut.bind(this)} className="nav-link"> Logout </span>
                </li>
            </ul>
        )
        
        
        return (
            <div className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/calculator" className="nav-link"> Reward Calculator </Link>
                    </li>
                     <li className="right">
                     {localStorage.usertoken ? userLink : loginRegLink}
                     </li>
                </ul>                   
            </div>
        )
    }
}

export default withRouter(Navbar)