import { Link, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from "axios";
import { UserContext } from '../UserContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext)


    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const {data} = await axios.post('/login', {
                email,
                password,
            });
            setUser(data);
            alert('Login succesful');
            setRedirect(true);
        } catch (error) {
            alert('Login failed');
        }
    }

    if (redirect) {
        console.log('Redirecting to /');
        return <Navigate to={'/'} />;
    }

    return (
        <div className="m-5 grow flex items-center justify-around">
            <div className="mb-32 w-3/4">

                <form className="max-w-md mx-auto border bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleLoginSubmit}>
                    <h1 className="text-4xl text-center">Login</h1>
                    <div className="mb-4 mt-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input id="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="email@example.com"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input id="password" type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="your password"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="remember" className="flex items-center">
                            <input id="remember" type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
                        <button type="submit" className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
                    </div>
                    <div className="text-center mt-5 text-gray-500">
                        Don't have account yet? <Link className="underline text-blue-500" to={'/register'}>Register</Link>
                    </div>
                </form>
            </div>
        </div>

    );
}