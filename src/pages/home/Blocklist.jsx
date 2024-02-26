import React, {useEffect,useState} from 'react'
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utils/Image'
//import { getDatabase } from 'firebase/database'
import { UseSelector } from 'react-redux'
import { getDatabase, ref, onValue ,set,push} from "firebase/database";

const Blocklist = () => {

    const [blockList,setBlockList] = useState()
    const db = getDatabase();
    const data = useSelector((state) => state.loginuserdata.value) 
  
  
    useEffect(()=>{
      const blockRef = ref(db,'block');
      onValue(blockRef, (snapshot) => {
        let arr  = []
        snapshot.forEach((item) => {
          if(item.val().whoblockid == data.uid) {
          arr.push({...item.val(),id:item.key})
          }
        })
        setBlockList(arr)
      });
     },[])  

  return (
   <>
   <GroupCard cardtitle="Block list">
<div className='usermainbox'>
{blockList && blockList.map((item,index)=>(
    <div key={index} className='useritem'>
     <div className='userimgbox'>
     <Image source="" alt="img"/>
     </div>
     <div className='userinfobox'>
     <div>
        <h3>{item.blockname}</h3>
        <p>MERN DEVELOPER</p>
     </div>
     </div>
    </div>
))}
</div>
   </GroupCard>
   </>
  )
}

export default Blocklist