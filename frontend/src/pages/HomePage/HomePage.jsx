import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import MessageContainer from '../../components/messages/MessagesContainer'
const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overgflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
      <SideBar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage


//Starter code for Homepage

// import React from 'react'
// import SideBar from '../../components/SideBar/SideBar'

// const HomePage = () => {
//   return (
//     <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overgflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
//       <SideBar/>
//       {/* <MessageContainer/> */}
//     </div>
//   )
// }

// export default HomePage