import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";


export default function AccountPage() {
    const { ready, user } = useContext(UserContext);

    if(ready && !user) {
        return <Navigate to={'/login'} />
    }

    return (
        <div>account page for {user.name}</div>
    );
}