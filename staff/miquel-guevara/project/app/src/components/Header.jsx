// import { useEffect, useState } from "react"
// import logic from "../logic"

// const Header = () => {
//     const [user, setUser] = useState(null)

//     const handleLogoutClick = () => {
//         try {
//             logic.logoutUser()
//         } catch (error) {
//             logic.cleanUpLoggedInUserId()
//         } finally {
//             onUserLoggedOut()
//         }
//     }

//     useEffect(() => {
//         try {
//             logic.retrieveUser()
//                 .then(setUser)
//                 .catch(error => console.log(error))
//         } catch (error) {
//             console.log(error)
//         }
//     }, [])


// return (
    
//     <header className="flex items-center bg-[#1B1F47] p-1">
    
//         {user && user.avatar ? <img src={user.avatar} alt="profile pic" className="w-20 h-20 rounded-full mr-4"></img> : <img className="w-20 h-20 rounded-full mr-2"  src="../../public/Avatarsimbol.png" alt="profile pic"></img>}  
        
//         <div className="flex flex-col">
//         {user && <h1 className="text-white font-bold text-lg">{user.name}</h1>}
//         {user && <p className="text-white text-lg font-light">{user.email}</p>}
//         </div>

//         <button className="ml-auto  " onClick={handleLogoutClick} > <img src="../../public/logoutIcon.png" alt="menu" className="w-8 h-8 " /></button>

//     </header>
    
// )


// }


// export default Header