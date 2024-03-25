import React, { useEffect } from 'react'
import GroupCard from '../../components/home/GroupCard'
import { FaPlus } from "react-icons/fa";
import { getDatabase, ref, onValue ,set,push,remove} from "firebase/database";
import Image from '../../utils/Image';
import { useSelector, useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';


const Userlist = () => {
  const [userList,setUserList] = useState();
  const db = getDatabase();
  const data = useSelector((state) => state.loginuserdata.value) 
  //console.log(data.uid);
  const [fRequest,setfRequest] = useState([])
  const [friendList, setfriendList]=useState([])
  const [requestCheck,setRequestCheck]=useState([])


 useEffect(()=>{
  const userRef = ref(db,'users');
  onValue(userRef, (snapshot) => {
    let arr  = []
    snapshot.forEach((item) => {
      if(data.uid != item.key){
      arr.push({...item.val(),id:item.key})
      }
    })
    setUserList(arr)
  });
 },[])

 //add friend operation
 let handlefrequest = (frequestinfo) => {

  set(ref(db,"friendrequest/" + frequestinfo.id),{
    senderid:data.uid,
    sendername:data.displayName,
    senderimg:data.photoURL, 
    recieverid:frequestinfo.id,
    recievername:frequestinfo.username,
    recieverimg:frequestinfo.profileimg
  }).then(()=>{
    toast("Friend request send successfully")
  });
 };

//friend request data
 useEffect(()=>{
  const fRequestRef = ref(db,'friendrequest');
  onValue(fRequestRef, (snapshot) => {
    let arr  = [] 
    let xyz=[]
    snapshot.forEach((item) => {
      if(item.val().receiverid ==  data.uid){
        xyz.push(item.val().senderid + item.val().receiverid)
      }
     if(data.uid == item.val().senderid){
      arr.push(item.val().senderid + item.val().receiverid)
     }
    })
    setfRequest(arr)
    setRequestCheck(xyz)
  });
   
},[])


console.log(fRequest);
console.log(requestCheck);

useEffect(()=>{
  const friendsRef = ref(db, 'friends');
  onValue(friendsRef, (snapshot) =>{
    let arr = []
    snapshot.forEach((item)=>{
      if(item.val().whoreceiveid == data.uid || item.val().whosendid == data.uid){
        arr.push(item.val().whoreceiveid + item.val().whosendid)
      }
    })
    setfriendList(arr)
  });
},[])

let handleCancle = (i)=>{
  remove(ref(db,"friendrequest/" + i.id)).then(()=>{
    toast("Request cancel")
});
};
  return (
    <>
    <ToastContainer/>
     <GroupCard cardtitle="userlist">
    <div className='usermainbox'>
     {userList && userList.length > 0
     ?(
     userList.map((item,index)=>{
      return (
      <div key={index} className='useritem'>
      <div className='userimgbox'>
     <Image source={item.profileimg} alt='img'/>
      </div>
      <div className='userinfobox'>
      <div>
       <h3>{item.username}</h3>
       <p>Mern Developer</p>
      </div>
      {( fRequest.length > 0 && fRequest.includes(item.id + data.uid )) || fRequest.includes(data.uid + item.id)
      ?(
      <>
      <button className='addbutton'>pending</button>
      <button  onClick={()=>handleCancle(item)} className='addbutton'>cancel</button>
      </>
      )
      :
friendList.includes(item.id + data.uid) || friendList.includes( data.uid + item.id)
? (
<button className='addbutton'>friend</button>
) :
requestCheck.includes(item.id + data.uid)
?
<button className='addbutton'>confirm koro </button>
    :
    (
      <button onClick={()=>handlefrequest(item)} className='addbutton'>
     add
     </button>
     ) 
    }
      </div>
      </div>
     );
     })
    ) : (
     <h2>No user available</h2>

     )}
    </div>
 </GroupCard>
    </>
  );
};

export default Userlist