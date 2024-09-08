import React from 'react'
import Nav from '../component/Nav';
import './Profile.css'
import netflixAvatar from '../assets/netflix-avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
// import PlansScreen from './PlansScreen';

function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav hideNavbarItems={true} />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src={netflixAvatar} alt="" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              
              {/* <PlansScreen /> */}
              
              <button className="profileScreen_signOut"
                onClick={() => auth.signOut()}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile