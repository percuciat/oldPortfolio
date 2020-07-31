import React from 'react';
import './Footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__content">
                <li>
                    © Copyright 2019-2020. Designed by web-semenov
                </li>
                <li>
                    <a className="footer__link" href="https://github.com/percuciat" target="_blank" rel="nofollow">
                        <FontAwesomeIcon className="footer__icon" icon={["fab", "github"]}/>
                    </a>
                </li>
                <li>
                    <a className="footer__link" href="https://api.whatsapp.com/send?phone=+79503243404" target="_blank"
                       rel="nofollow">
                        <FontAwesomeIcon className="footer__icon" icon={["fab", "whatsapp"]}/>
                    </a>
                </li>
                <li>
                    <a className="footer__link" href="https://telegram.me/semenovWeb" target="_blank" rel="nofollow">
                        <FontAwesomeIcon className="footer__icon" icon={["fab", "telegram"]}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
};

export default Footer
