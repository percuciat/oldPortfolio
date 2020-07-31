import React, {Component} from 'react';
import './Aside.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Aside extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="aside load">
                <ul className="aside__list">
                    <li>
                        <a className="aside__link" href="https://api.whatsapp.com/send?phone=+79503243404" rel="nofollow"
                           target="_blank">
                            <FontAwesomeIcon className="aside__icon" icon={["fab", "whatsapp"]}/>
                        </a>
                    </li>
                    <li>
                        <a className="aside__link" href="https://telegram.me/semenovWeb" target="_blank" rel="nofollow">
                            <FontAwesomeIcon className="aside__icon" icon={["fab", "telegram"]}/>
                        </a>
                    </li>
                    <li>
                        <a className="aside__link" href="https://github.com/percuciat" target="_blank" rel="nofollow">
                            <FontAwesomeIcon className="aside__icon" icon={["fab", "github"]}/>
                        </a>
                    </li>
                </ul>
            </aside>
        );
    }
}


export default Aside