import React, {Component} from 'react';
import "./Preloader.scss"; // подключение scss

class Preloader extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="preloader active">
                <div className="item-1"></div>
                <div className="item-2"></div>
                <div className="item-3"></div>
                <div className="item-4"></div>
                <div className="item-5"></div>
            </div>
        );
    }
}

export default Preloader;