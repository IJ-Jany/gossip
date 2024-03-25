import React from 'react'
import Sidebar from '../../components/layouts/Sidebar';
import Friend from './Friend';
import Image from '../../utils/Image';
import GroupCard from '../../components/home/GroupCard';
import { FaPlus } from "react-icons/fa";
import FriendRequest from './FriendRequest';
import Userlist from './Userlist';
import Blocklist from './Blocklist';

const Home = () => {
  return (
    <div className='homewrapper'>
   <Userlist/>
  <Friend/>
  <FriendRequest/>
  <Blocklist/>
  
      </div>
  )}

export default Home