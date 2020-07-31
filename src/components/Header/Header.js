import React, {Component} from 'react';
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<header className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    {/*<a href="index.html">
                        <img className="header__logo-img" src="img/logoSvg.svg"
                             alt="Logo"></a>*/}
                </div>
                <nav className="header__nav">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/">
                                <FontAwesomeIcon icon="home"/>
                                <span className="header__navText">Главная</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/works">
                                <FontAwesomeIcon icon="images"/>
                                <span className="header__navText">Портфолио</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">
                                <FontAwesomeIcon icon="address-card"/>
                                <span className="header__navText">Контакты</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/*<button className="nav-mobile">
                    <i className="nav-mobile__item"></i>
                </button>*/}
            </div>
        </header>)
    }
}

export default Header


