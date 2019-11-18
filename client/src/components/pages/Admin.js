import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import Users from '../users/Users';
import axios from 'axios';
import Websites from '../websites/Websites';

// const fetchUsers = async () => {
//     const users = await axios.get('/api/users/userlist');
//     console.log(users);
// }
const Admin = () => {
    // const [users, setUsers] = useState(null);

    // useEffect( () => {
    //     fetchUsers();
    // }, [])

    const authContext = useContext(AuthContext);
    const { isAuthenticated, user, getUsers } = authContext;


    const x = getUsers();
    return (
        <div>
            <table>
                <tr>
                    <th>משתמש</th>
                    <th>אתרים</th>
                </tr>

                <Users />
            </table>
        </div>
    )
}

export default Admin
