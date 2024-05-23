import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
   <header className = 'bg-slate-300 shadow-md'>

    <div className='flex justify-between items-center max-w-5xl mx-auto p-4'>
    <Link to='/'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
       <span className='text-slate-600'>your</span>
       <span className='text-slate-800'>Home</span>

    </h1>
    </Link>

    <form className="bg-slate-100 p-4 rounded-lg flex items-center">
        <input type='text' placeholder='Search here...' className="bg-transparent focus:outline-none w-24 sm:w-64"/>
        <FaSearch className='text-slate-500'/>
    </form>
    <ul className='flex gap-3 space-x-9 '>
    <Link to='/'>
      <li className='hidden sm:inline text-slate-200 hover:text-slate-800 hover:underline'>Home</li></Link>
      <Link to='about'>
      <li className='hidden sm:inline text-slate-200 hover:text-slate-800 hover:underline'>About Us</li></Link>
      <Link to='/sign-in'>
      <li className=' text-slate-200 hover:text-slate-800 hover:underline'>Sign in</li></Link>


    </ul>

    </div>
   </header>
 
  )
}
