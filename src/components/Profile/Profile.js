import React from "react";
import "./Profile.css";
import { Link } from 'react-router-dom';
import Header from "../Header/Header";

function Profile() {
  return(
    <>
    <Header loged={true}/>
    <section className="profile">
      <div className='profile__content'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='profile__form'>
            <fieldset className='profile__fieldset'>
                <label className='profile__fields'>
                    <p className='profile__input-name'>Имя</p>
                    <input className='profile__input'
                        type='text'
                        name='name'
                        placeholder='Имя'
                        defaultValue={'Виталий'}
                        required />
                </label>
                <div className="profile__line"></div>
                <label className='profile__fields'>
                    <p className='profile__input-email'>E-mail</p>
                    <input className='profile__input'
                        type='email'
                        name='name'
                        defaultValue={'pochta@yandex.ru'}
                        placeholder='E-mail'
                        required />
                </label>
            </fieldset>
            <div className='profile__nav'>
                <button className='profile__button_edit' type='submit'>Редактировать</button>
                <Link className='profile__button_signin' to='/signin'>Выйти из аккаунта</Link>
            </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Profile;