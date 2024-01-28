import React from 'react'
import Userlist from './userlist';
import Friend from './Friend';
import Image from '../../utils/Image';
import GroupCard from '../../components/home/GroupCard';
import { FaPlus } from "react-icons/fa";

const Home = () => {
  return (
    <div className='homewrapper'>
  <Userlist/>
  <Friend/>
  
      </div>
  )}

export default Home