import React, {Component} from 'react';

import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Main from "./Sections/Main";
import Footer from "./Footer/Footer";



class App extends Component{
    constructor(props) {
        super(props);
        this.showAside = this.showAside.bind(this)
    }
    preloader(){
        return new Promise(resolve => setTimeout(resolve, 10000))
    }
    showAside(){
        const aside = document.querySelector('.aside');
        return setTimeout(() => {
            aside.classList.remove('load');
        }, 2000)
    };

    componentDidMount(){
        this.preloader().then(() => {
            const ele =  document.querySelector('.preloader.active');
            if(ele){
                ele.classList.remove('active');
                setTimeout(() => {
                    ele.outerHTML = ''
                }, 200)
            }
        });
        this.showAside()
    }
    render() {
        return (
            <div className="containerMain">
                <Header/>
                <Aside/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App