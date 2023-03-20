import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import { getProfile, updateProfile } from "../../utils/Api/MainApi"
import { CurrentUserContext } from "../App/App";
function Profile() {
  const { user, setUser } = useContext(CurrentUserContext);
  
  const [profile, setProfile] = useState(user)
  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(()=>{
    getProfile()
    .then(data => {
      setUser(data);
      setProfile(data);
    }).catch(error=>{
        console.error('getProfile error ', error)
    });
  },[])

  useEffect(() => {
    if((user.name !== profile.name || user.email !== profile.email)){
      setIsUpdate(true)
    } else {
      setIsUpdate(false)
    }
  }, [profile, user])
  
  const handleProfileUpdate = (user) => {
    updateProfile(user)
    .then(data => {
      setUser(data);
      setProfile(data);
      console.log('изменения')
    }).catch(error=>{
        console.error('handleProfileUpdate error ', error)
    });
  }

  return(
    <>
    <Header loged={true}/>
    <section className="profile">
      <div className='profile__content'>
        <h2 className='profile__title'>Привет, {user?.name}!</h2>
        <form className='profile__form' onSubmit={e => e.preventDefault()}>
            <fieldset className='profile__fieldset'>
                <label className='profile__fields'>
                    <p className='profile__input-name'>Имя</p>
                    <input className='profile__input'
                        type='text'
                        name='name'
                        placeholder='Имя'
                        value={profile.name}
                        required
                        onChange={(event)=> setProfile((prev)=>({...prev, name: event.target.value}))}
                    />
                </label>
                <div className="profile__line"></div>
                <label className='profile__fields'>
                    <p className='profile__input-email'>E-mail</p>
                    <input className='profile__input'
                        type='email'
                        name='name'
                        value={profile.email}
                        placeholder='E-mail'
                        onChange={(event)=> setProfile((prev)=>({...prev, email: event.target.value}))}
                        required />
                </label>
            </fieldset>
            <div className='profile__nav'>
                <button className='profile__button_edit' type='submit' onClick={()=>handleProfileUpdate(profile)} disabled={!isUpdate}>Редактировать</button>
                <Link className='profile__button_signin' to='/signin'>Выйти из аккаунта</Link>
            </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Profile;