import React from 'react'
import Userlist from './userlist';
import Friend from './Friend';
import Image from '../../utils/Image';
import GroupCard from '../../components/home/GroupCard';
import { FaPlus } from "react-icons/fa";
import FriendRequest from './FriendRequest';

const Home = () => {
  return (
    <div className='homewrapper'>
  <Userlist/>
  <Friend/>
  <FriendRequest/>
  
      </div>
  )}

export default Home