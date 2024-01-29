import React from 'react'
import GroupCard from '../../components/home/GroupCard'

const FriendRequest = () => {
  return (
  <>
  <GroupCard cardtitle="Friend Request">
    <div className='usermainbox'>
     <div className='useritem'>
     <div className='userimgbox'>
    
     </div>
     <div className='userinfobox'>
     <div>
      <h3>Israt</h3>
      <p>Mern Developer</p>
     </div>
     <button className='addbutton'>
     Accept
      </button>
     </div>
     </div>
    </div>
 </GroupCard>
  </>
  )
}

export default FriendRequest