import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sideBar">
            <ul>
                <li className="sideBarItem">
                    <Link to='/' >עמוד הבית</Link>
                </li >
                <li className="sideBarItem">
                    <Link to="/addwebsite">הוסף עמוד </Link>
                </li>
                <li className="sideBarItem">
                    <Link to='/' >סטטיסטיקה</Link>
                </li>

            </ul>
        </div>
    )
}
export default SideBar
