import React from 'react'
import GroupCard from '../../components/home/GroupCard'
import { FaPlus } from "react-icons/fa";
import Image from '../../utils/Image';
import { useState,useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector, useDispatch ,set,push} from 'react-redux'
import { toast } from 'react-toastify';

const Friend = () => {
  const [friendList,setFriendList] = useState()
  const db = getDatabase();
  const data = useSelector((state) => state.loginuserdata.value) 


  useEffect(()=>{
    const friendRef = ref(db,'friends');
    onValue(friendRef, (snapshot) => {
      let arr  = []
      snapshot.forEach((item) => {
        if(data.uid == item.val().whoreceiveid || data.uid == item.val().whosendid) {
        arr.push({...item.val(),id:item.key})
        }
      })
      setFriendList(arr)
    });
   },[])  


  return (
   <>
  <GroupCard cardtitle="Friend">
    <div className='usermainbox'>
      { friendList && friendList.map((item,index)=>(
       <div key={index} className='useritem'>
       <div className='userimgbox'>
       <Image source={data.uid == item.whosendid ? item.whoreceivephoto : item.whosendphoto} alt='img'/>
       </div>
       <div className='userinfobox'>
       <div>
        {data.uid == item.whosendid
        ?
        <h3>{item.whoreceiveame}</h3>
        :
        <h3>{item.whosendname}</h3>
        }
        <p>Mern Developer</p>
       </div>
       <button className='addbutton'>
        Block
        </button>
       </div>
       </div>
      ))
     }
    </div>
   </GroupCard>
  
   </>
      )
     }

export default Friend