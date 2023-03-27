import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import { getProfile, updateProfile } from "../../utils/Api/MainApi"
import { CurrentUserContext } from "../App/App";
import { PROFILE_UPDATE_MESSAGE } from "../../utils/Constants/constants"

function Profile() {
  const { user, setUser, setLogedId, openPopup } = useContext(CurrentUserContext);
  
  const [profile, setProfile] = useState(user || {name: '', email: ''})
  const [isUpdate, setIsUpdate] = useState(false)

  const navigate = useNavigate();

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
      openPopup(PROFILE_UPDATE_MESSAGE)
    })
    .catch(error => {
      console.error('handleProfileUpdate error ', error)
    });
  }

  const signOut = () => {
    localStorage.clear();
    setLogedId(false);
    navigate("/");
    window.location.reload();
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
                        name='email'
                        value={profile.email}
                        placeholder='E-mail'
                        onChange={(event)=> setProfile((prev)=>({...prev, email: event.target.value}))}
                        required />
                </label>
            </fieldset>
            <div className='profile__nav'>
                <button className='profile__button_edit' type='submit' onClick={()=>handleProfileUpdate(profile)} disabled={!isUpdate}>Редактировать</button>
                <button className='profile__button_signin' onClick={signOut} >Выйти из аккаунта</button>
            </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Profile;