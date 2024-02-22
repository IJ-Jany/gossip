import React, { useState } from 'react'
import GroupCard from '../../components/home/GroupCard'
import { useSelector} from 'react-redux'
import { getDatabase, ref, onValue ,remove ,set,push} from "firebase/database";
import { useEffect } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import Image from '../../utils/Image';

const FriendRequest = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.loginuserdata.value) 
  const [fRequest,setfRequest] = useState()

  let handleCanclefRequest = (cancleinfo) =>{
remove(ref(db,"friendrequest/" + cancleinfo.id)).then(()=>{
  toast("Request cancel")
})
  }
  let handleAcceptfRequest =(acceptinfo) =>{

    set(push(ref(db,"friendrequest")),{
     whosendname:acceptinfo.sendername,
     whosendid:acceptinfo.senderid,
     whosendphoto:acceptinfo.senderimg,
     whoreceivename:data.displayname,
     whoreceiveid:data.uid,
     whoreceivephoto:data.photoURL
    } .then(()=>{
      remove(ref(db,"friendrequest/" + acceptinfo.id))
      toast("Request accepted")
    }))
  }

  useEffect(()=>{
    const fRequestRef = ref(db,'friendrequest');
    onValue(fRequestRef, (snapshot) => {
      let arr  = []
      snapshot.forEach((item) => {
       if(data.uid == item.val().receiverid){
        arr.push({...item.val(),id:item.key})
       }
      })
      setfRequest(arr)
    });
   
   },[])
   console.log(fRequest);

  

  return (
  <>
  <GroupCard cardtitle="Friend Request">
    <div className='usermainbox'>
      {fRequest && fRequest.length > 0 ?
      fRequest.map((item,index)=>(
        <div key={index} className='useritem'>
        <div className='userimgbox'>
       <Image source={item.senderimg} alt='img'/>
        </div>
        <div className='userinfobox'>
        <div>
         <h3>{item.sendername}</h3>
         <p>Mern Developer</p>
        </div>
        <div className='buttongroup'>
        <button onClick={()=>handleAcceptfRequest(item)}  className='addbutton'>
        Accept
         </button>
         <button onClick={()=>handleCanclefRequest(item)} className='addbutton'>
        cancel
         </button>
        </div>
        </div>
        </div>
      ))
      :
      <h2>No request found.....</h2>
    }
    </div>
 </GroupCard>
  </>
  )
}

export default FriendRequest