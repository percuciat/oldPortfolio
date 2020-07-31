import React, {Component} from 'react';
import './About.scss'
import {Title} from "@components/common/commonStyled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import myPhoto from '../../assets/img/my_photoJpg.jpg'

class About extends Component{
    render() {
        return (
            <section className="about section">
                <Title>Обо мне</Title>
                <div className="about-wrapper">
                    <div className="about-content">
                        <div className="about-content__text">Я - Максим Семенов - <b>фронтенд разработчик</b>.
                            <span className="notMobileText">Занимаюсь разработкой сайтов с адаптивной и кроссбраузерной версткой.
                            Мне нравится реализовывать творческие идеи и решения, создавать полезные и перспективные проекты.<br/>
                            </span>
                            Знаком со стандартами семантической разметки <b>BEM</b>, работой с
                            CMS <b>Wordpress</b>, <b>Bitrix</b>;
                            фреймворком, <b>Bootstrap 4</b>, библиотекой <b>Jquery</b>, способами верстки на <b>Flex</b>,
                            <b>Grid</b>,
                            программированием на <b>JavaScript</b> и базовыми аспектами <b>PHP</b>.<br/>

                                В настоящее время продолжаю совершенствовать свои навыки по <b>JavaScript</b>, в
                                частности,
                                библиотеки <b>React</b>.<br/>
                        </div>
                        <figure className="about-img">
                           <img className="about-img-picture" src={myPhoto} alt="myPhoto"/>
                                <figcaption><a href="#" className="about-img__link">Скачать резюме</a></figcaption>
                        </figure>
                    </div>
                    <h3 className="about__subtitle"><b>Основные навыки:</b></h3>
                    <ul className="about__skills">
                        <li className="about__item">
                            <FontAwesomeIcon icon={["fab", "html5"]}/>
                            <p>HTML</p></li>
                        <li className="about__item">
                            <FontAwesomeIcon icon={["fab", "css3-alt"]}/>
                            <p>CSS</p></li>
                        <li className="about__item">
                            <FontAwesomeIcon icon={["fab", "js"]}/>
                            <p>JavaScript</p></li>
                        <li className="about__item">
                            <FontAwesomeIcon icon={["fab", "react"]}/>
                            <p>React</p></li>
                        <li className="about__item">
                            <FontAwesomeIcon icon={["fab", "wordpress"]}/>
                            <p>WordPress</p></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default About