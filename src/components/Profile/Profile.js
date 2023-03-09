import React from "react";
import "./Profile.css";
import { Link } from 'react-router-dom';

function Profile() {
  return(
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
              <label className='profile__fields'>
                  <p className='profile__input-edit'>E-mail</p>
                  <input className='profile__input'
                      type='email'
                      name='name'
                      defaultValue={'pochta@yandex.ru'}
                      placeholder='E-mail'
                      required />
              </label>
          </fieldset>
          <div className='profile__nav'>
              <button className='profile__button profile__button_edit' type='submit'>Редактировать</button>
              <Link className='profile__button profile__button_signin' to='/signin'>Выйти из аккаунта</Link>
          </div>
      </form>
    </div>
  );
}

export default Profile;