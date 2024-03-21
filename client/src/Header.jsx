import { Link } from 'react-router-dom';
import houseLogo from './assets/house.svg'
import userIcon from './assets/user.svg'
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Header() {
  const { user } = useContext(UserContext)
  return (
    <header className="p-4 flex justify-between border border-gray-300 rounded-full">
      <Link to={'/'} className="flex items-center gap-3">
        <img src={houseLogo} class="w-16 h-16" alt="Logo" />
        <span className="font-bold text-xl">
          logo
        </span>
      </Link>

      <div className="flex items-center border border-gray-300 rounded-full p-4 space-x-3 shadow-md ">
        <div>Anywhere</div>
        <div>Any week</div>
        <div>Add guests</div>
        <button className="bg-primary text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>

      <Link to={user?'/account':'/login'} className="flex items-center border border-gray-300 rounded-full p-4 space-x-3 shadow-md ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <div>
          <img src={userIcon} className="" alt="userIcon" />
        </div>
        {!!user && (
          <div>
            {user.name}
          </div>
        )}
      </Link>
    </header>
  );
}