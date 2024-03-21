import { useContext, useState } from "react"
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import { Link } from 'react-router-dom';
import axios from "axios";


export default function AccountPage() {
    const { ready, user, setUser  } = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

    let {subpage} = useParams();
    if(subpage == undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
        
    }

    if (!ready) {
        return 'Loading...'
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    function linkClasses (type = null) {
        let classes = 'py-2 px-6'
        if (typeof type === 'string' && type === subpage) {
            classes += ' bg-primary text-white rounded-full';
        }
        return classes;

    }
   
    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div>
            <nav className="w-full flex justify-center mt-8 mb-8 gap-4">
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My accomodations</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="mt-5 text-center">
                    Logged in as {user.name} ({user.email})
                    <br />
                    <button onClick={logout} className="bg-primary rounded-full px-3 py-1 text-white mt-5">Log out</button>

                </div>
            )}
        </div>
    );
}