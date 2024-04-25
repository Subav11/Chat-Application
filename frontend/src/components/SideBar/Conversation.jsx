import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext'

const Conversation =({conversation,lastIdx,emoji})=>{
  const {selectedConversation, setSelectedConversation} = useConversation()
  const isSelected=selectedConversation?._id===conversation._id
  const { onlineUsers } = useSocketContext()
	const isOnline = onlineUsers.includes(conversation._id)
  return( <>
  <div className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 py-1 cursor-pointer ${isSelected? "bg-cyan-200":""}`} onClick={()=>setSelectedConversation(conversation)}>
    <div className={`avatar ${isOnline?'online':''}`}>
        <div className="w-12 rounded-flow">
            <img src={conversation.profilePic} alt="user avatar"/>
        </div>
    </div>
    <div className="flex flex-col flex-1">
      <div className="flex gap-3 justify-between">
        <p className="font-bold text-gray-800">{conversation.fullname}</p>
        <span className='text-xl'>{emoji}</span>
      </div>
    </div>
  </div>
  {!lastIdx&&<div className='divider py-0 my-0 h-1'/>}
  </>
  )
}

export default Conversation

//Starter Code for Conversation Component

// import React from 'react'

// const Conversation = () => {
//   return <>
//   <div className='flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 py-1 cursor-pointer'>
//     <div className="avatar online">
//         <div className="w-12 rounded-flow">
//             <img src="https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-avatar-profile-user-account-512.png " alt="user avatar"/>
//         </div>
//     </div>
//     <div className="flex flex-col flex-1">
//       <div className="flex gap-3 justify-between">
//         <p className="font-bold text-gray-800">Jhon Doe</p>
//         <span className='text-xl'>🔥🎃</span>
//       </div>
//     </div>
//   </div>
//   <div className='divider py-0 my-0 h-1'/>
//   </>
// }

// export default Conversation