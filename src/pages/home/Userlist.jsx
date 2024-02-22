import React, { useEffect } from 'react'
import GroupCard from '../../components/home/GroupCard'
import { FaPlus } from "react-icons/fa";
import { getDatabase, ref, onValue } from "firebase/database";
import Image from '../../utils/Image';
import { useSelector, useDispatch ,set,push} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';


const userlist = () => {
  const [userList,setUserList] = useState()
  const db = getDatabase();
  const data = useSelector((state) => state.loginuserdata.value) 
  //console.log(data.uid);
  const [fRequest,setfRequest] = useState()


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

 let handlefrequest = (frequestinfo) => {

  set(push(ref(db,"friendrequest")),{
    senderid:data.uid,
    sendername:data.displayName,
    senderimg:data.photoURL, 
    recieverid:frequestinfo.id,
    recievername:frequestinfo.username,
    recieverimg:frequestinfo.profileimg
  } .then(()=>{
    toast("Friend request send successfully")
  }))
 }


 useEffect(()=>{
  const fRequestRef = ref(db,'friendrequest');
  onValue(fRequestRef, (snapshot) => {
    let arr  = [] 
    snapshot.forEach((item) => {
     if(data.uid == item.val().senderid){
      arr.push(item.val().senderid + item.val().receiverid)
     }
    })
    setfRequest(arr)
  });
   
},[])

let handleCancle = ()=>{

}
  return (
    <>
    <ToastContainer/>
     <GroupCard cardtitle="userlist">
    <div className='usermainbox'>
     {userList && userList.length > 0
     ?
     userList.map((item,index)=>{
      <div key={index} className='useritem'>
      <div className='userimgbox'>
     <Image source={item.profileimg} alt='img'/>
      </div>
      <div className='userinfobox'>
      <div>
       <h3>{item.username}</h3>
       <p>Mern Developer</p>
      </div>
      { fRequest && fRequest.includes(item.id + data.uid ) || fRequest.includes(data.uid + item.id)
      ?
      <button  onClick={()=>handleCancle(item)} className='addbutton'>cancel</button>
      :
      <button onClick={()=>handlefrequest(item)} className='addbutton'>
      <FaPlus/>
      </button>
       }
      </div>
      </div>
     })
     :
     <h2>No user available</h2>

     }
    </div>
 </GroupCard>
    </>
  )
}

export default userlist