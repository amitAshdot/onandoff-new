import React ,{ Fragment } from 'react'
import Websites from '../websites/Websites';

const UserItem = ({ user }) => {
    const { name, email } = user;
    return (
        <Fragment>
            <tr>
            <td>
                <ul className="userDetails">
                    {email && (<li className='fa fa-envelope'>
                        {email}
                    </li>)}
                    {name && (<li className='fa fa-id-card-o'>
                        {name.charAt(0).toUpperCase() + name.slice(1)} {' '}
                    </li>)}
                </ul>
            </td>
            <td>
                <Websites user={user}/> 
            </td>
            </tr>
        </Fragment>

    )
};

export default UserItem
