import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
const SideBar = () => {
  return (
    <div className='border-r p-4 border-white flex flex-col'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default SideBar

//Starter Code for SideBar

// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// const SideBar = () => {
//   return (
//     <div>
//         <SearchInput/>
//         <div className='divider px-3'></div>
//         <Conversations/>
//         <LogOutButton/>
//     </div>
//   )
// }

// export default SideBar