import React from 'react';
import ProfilePic from './profilePic';



function Profile() {
  return (
    <div className="col span-1-of-5">
      <ProfilePic />
      <p>name</p>
      <p>age</p>
      <p>guarantor</p>
      <p>contact</p>
    </div>
  );
}

export default Profile;
