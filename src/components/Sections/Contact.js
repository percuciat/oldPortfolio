import React, {Component} from 'react';
import {FormBtn, Title, Input, Textarea, Label} from "@components/common/commonStyled";
import './Contact.scss'


class Contact extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        title: 'Контакты'
    };

    render() {
        const {title} = this.state;
        return (
            <section className="contact section">
                <Title>{title}</Title>
                <div className="contact-content">
                    <p className="contact-content__text">Работаю удаленно по всей России и СНГ.
                        Поддерживаю сотрудничество и готов помочь по созданию проектов из Европы, США, Австралии.</p>
                </div>
                <form action="#" method="post" className="contact-form" encType="multipart/form-data">
                    <div className="contact-form--name">
                        <Label htmlFor="name">
                            Ваше имя
                        </Label>
                        <Input type="text" name="fio" required/>
                    </div>
                    <div className="contact-form--mail">
                        <Label htmlFor="contact-mix">
                            Ваш email или телефон
                        </Label>
                        <Input type="text" name="contact-mix" required/>
                    </div>
                    <div className="contact-form--textarea">
                        <Label htmlFor="message">
                            Детали заказа
                        </Label>
                        <Textarea name="message" id="message"></Textarea>
                    </div>
                    <FormBtn type={"submit"}>Отправить</FormBtn>
                </form>
            </section>
        );
    }
}

export default Contact