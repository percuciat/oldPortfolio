import React, {Component} from 'react';
import './Works.scss'

class Works extends Component{
    render() {
        return (
            <section className="portfolio section">
                <h2 id="portfolio" className="portfolio-title title-name">Портфолио</h2>
                <div className="portfolio-filter">
                    <button id="btnAll" className="filter-btn active">Все</button>
                    <button id="btn2020" className="filter-btn">2020</button>
                    <button id="btn2019" className="filter-btn">2019</button>
                </div>
                <ul className="portfolio-content">
                    <li className="portfolio__card">
                        {/*<img className="portfolio__card-img" src="img/klatcen.jpg" alt="Klatcen Print">*/}
                            <div className="portfolio-content__text">
                                <h3 className="portfolio-content__text-title">Klatcen Print | Печать на футболках
                                    (ткани)</h3>
                                <p className="portfolio-content__text-description">Создание Landing page с калькулятором
                                    стоимости
                                    изделия.
                                    Адаптация под любые устройства, кроссбраузерность. Применялся Jquery и препроцессор
                                    SCSS.
                                    <a href="https://github.com/percuciat/Bank" className="portfolio-content__text-link"
                                       target="_blank">
                                        <b>GitHub</b></a>.
                                </p>
                                <div className="portfolio-content__text-links">
                                    <a href="https://ksm-kazan.ru/" className="portfolio-content__text-link"
                                       rel="noopener noreferrer" target="_blank">Перейти на сайт</a>
                                    <p className="portfolio-content__text-link">Дата: 28.08.2019</p>
                                </div>
                            </div>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Works