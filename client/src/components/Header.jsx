import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import  {useSelector} from 'react-redux'

export default function Header() {
  const {currentUser}=useSelector(state=>state.user)
  return (
   <header className = 'bg-slate-300 shadow-md'>

    <div className='flex justify-between items-center max-w-5xl mx-auto p-4'>
    <Link to='/'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
       <span className='text-slate-600'>your</span>
       <span className='text-slate-800'>Home</span>

    </h1>
    </Link>

    <form className="bg-slate-200 p-4 rounded-lg flex items-center">
        <input type='text' placeholder='Search here...' className="bg-transparent focus:outline-none w-24 sm:w-64"/>
        <FaSearch className='text-slate-500'/>
    </form>
    <ul className='flex gap-3 space-x-9 '>
    <Link to='/'>
      <li className='font-bold hidden sm:inline text-slate-500 hover:text-slate-800 hover:underline'>Home</li></Link>
      <Link to='about'>
      <li className='font-bold hidden sm:inline text-slate-500 hover:text-slate-800 hover:underline'>About Us</li></Link>
      <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='font-bold hidden sm:inline text-slate-500 hover:text-slate-800 hover:underline'> Sign in</li>
            )}
          </Link>
    </ul>

    </div>
   </header>
 
  )
}
