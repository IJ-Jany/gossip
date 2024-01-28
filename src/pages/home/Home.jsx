import React from 'react'
import Userlist from './userlist';
import Friend from './Friend';
import Image from '../../utils/Image';


const Home = () => {
  return (
    <div className='homewrapper'>
  <Userlist/>
   <GroupCard cardtitle="Friend">
      <div className='usermainbox'>
       <div className='useritem'>
       <div className='userimgbox'>
      <Image source="" alt="img"/>
       </div>
       <div className='userinfobox'>
       <div>
        <h3>Israt jaman</h3>
        <p>Mern Developer</p>
       </div>
       <button className='addbutton'>
        <FaPlus/>
        </button>
       </div>
       </div>
      </div>
      <div className='usermainbox'>
       <div className='useritem'>
       <div className='userimgbox'>
       <Image source="" alt="img"/>
       </div>
       <div className='userinfobox'>
       <div>
        <h3>Israt jaman</h3>
        <p>Mern Developer</p>
       </div>
       <button className='addbutton'>
        <FaPlus/>
        </button>
       </div>
       </div>
      </div>
      <div className='usermainbox'>
       <div className='useritem'>
       <div className='userimgbox'>
       <Image source="" alt="img"/>
       </div>
       <div className='userinfobox'>
       <div>
        <h3>Israt jaman</h3>
        <p>Mern Developer</p>
       </div>
       <button className='addbutton'>
        <FaPlus/>
        </button>
       </div>
       </div>
      </div>
   </GroupCard>
  
      </div>
  )}

export default Home