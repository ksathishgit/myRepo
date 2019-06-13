import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="container header">
                <ul className="menu">
                    <li className="hover-white">SPOTLIGHT</li>
                    <i className="hover-white fa fa-caret-down"></i>   
                    <li className="hover-white">PODCASTS</li>
                    <li className="menu-item">RICHARD</li>
                    <li className="menu-item">VIRGIN UNITE</li>
                    <li className="menu-item">VIRGIN RED</li>
                    <li className="menu-item">DISCOVER VIRGIN</li>
                </ul>
            </div>
        )
    }
}

export default Header