import { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext.jsx'
const MessagesContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
        {!selectedConversation ? (
            <NoChatSelectedComponent/>
        ) : (
        <>
        <div className='px-2 mb-2'>
            <span className='label-text'>To: </span>
            <span className='text-gray-900 font-bold'>{selectedConversation.fullname}</span>
        </div>
        <Messages/> 
        <MessageInput/> 
        </>
        )}
    </div>
  )
}

export default MessagesContainer

const NoChatSelectedComponent = () => {
  const {authUser}=useAuthContext()
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullname}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="sm:text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  )
}

//Starter Code MessageContainer

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// const MessagesContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//         <>
//         <div className='px-2 mb-2'>
//             <span className='label-text'>To: </span>
//             <span className='text-gray-900 font-bold'>John Doe</span>
//         </div>
//         <Messages/> 
//         <MessageInput/> 
//         </>
//     </div>
//   )
// }

// export default MessagesContainer