import React from 'react'
import "./message.css"
import { useState,useEffect } from 'react';
import { getDatabase, ref, onValue ,set,push,remove} from "firebase/database";
import { useSelector, useDispatch} from 'react-redux'
import Image from '../../utils/Image';


const Message = () => {

  const [friendList,setFriendList] = useState()
  const db = getDatabase();
  const data = useSelector((state) => state.loginuserdata.value) 
  const activechat = useSelector((state) => state?.activeuserdata?.value) 
  const dispatch=useDispatch()
  const [msgtext,setMsgText]=useState("")
  const [message,setMessage] = useState([])

  console.log(activechat);

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

   let handleUser=(i)=>{
dispatch(activeuser(i))
   }
//message write operation
   let handleSubmit=()=>{

    set(push(ref(db,"message")),{
      senderid:data.uid,
      sendername:data.displayName,
      message:msgtext,
      receiverid:data.uid == activechat.whoreceiveid ? activechat.whosendid :activechat.whoreceiveid ,
      receivername:data.uid == activechat.whoreceiveid ? activechat.whosendname : activechat.whoreceivename ,

     }).then(()=>{
      console.log("msg send done");
     })

   }

   //message read operation
   useEffect(()=>{
    const messageRef = ref(db,'message');
    onValue(messageRef, (snapshot) => {
      let arr  = []
      let activeuserid = activechat.whosendid == data.uid ? activechat.whoreceiveid : activechat.senderid
      snapshot.forEach((item) => {
       if((data.uid == item.val().senderid  && item.val().receiverid == activeuserid )|| (item.val().senderid == activeuserid && item.val().receiverid == data.uid  )) {
       arr.push({...item.val(),id:item.key})
        }
      })
      setMessage(arr)
    });
   },[activechat])  
    

  return (
    <div className='msg_wrapper' >
      <div className='mesg_user_body'>
     <h3 className='list_heading'>Friendlist</h3>
     <div className='msg_user_wrapper'>
      { friendList && friendList.length > 0  ? friendList.map((item,index )=>(
       // <div key={index} className="msg_user_item"> </div>
       <div onClick={handleUser} key={index} className='msg_user_item'>
       <div className='userimgbox'>
       <Image source={data.uid == item.whosendid ? item.whoreceivephoto  : item.whosendphoto} alt='img'/>
       </div>
       <div className='userinfobox'>
       <div>
        {data.uid == item.whosendid
        ? (
        <h3>{item.whoreceiveame}</h3>
         ) : (
        <h3>{item.whosendname}</h3>
       ) }
        <p>Mern Developer</p>
       </div>
       <button  className='addbutton'>
        Message
        </button>
       </div>
       </div>
      ))
    :
   <h3>no friend available</h3>
    }

</div>

      </div>
      {activechat != null ?
       <div className='msg_box'>
       <div className="msg_box_heading">
         <h2>
           {activechat !== null &&
           activechat.whosendname == data.uid
           ?
           activechat.whoreceiveame
           :
           activechat.whosendname
           }
         </h2>
         <p>active now</p>
       </div>
       <div className="msg_main">
        {message.map((item,index)=>(
           <div className={'${item.receiverid == data.uid ? "receivemsg" : "sendmsg"}'} key={index}>
           <p>{item.message }</p>
         </div>
        ))}
      
         
       </div>
       <div className="msg_footer">
          <input onChange={(e)=>setMsgText(e.target.value)} type="text" placeholder='enter your message' className='msg_input'/>
          <button onClick={handleSubmit} className='msg_btn'>send</button>
       </div>
             </div>  
             :
             <div>
              <h1>please select a user</h1>
             </div>
    }
    </div>
  )
}

export default Message