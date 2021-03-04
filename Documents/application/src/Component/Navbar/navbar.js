import React, { useState } from 'react';
import style from './navbar.module.scss';
import axios from 'axios';



const Navbar = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [users, setUsers] = useState(null);
     const apiURL = "https://reqres.in/api/users?page=2";

     const fetchData = () => {
        setIsLoading(true);
        axios.get(apiURL).then(res => {
            setIsLoading(false);
            setUsers(res.data);
            console.log('Response', res);
        }).catch(error => {
            setIsLoading(false);
            console.log("error", error);
        });
     }
     console.log('User', users);
    return (
        <div className={style.main}>
        
            <div className={style.container}>
                <ul>
                <li className={style.logo}>Navbar</li>
                    <button onClick={fetchData}><li>Get Users</li></button>
                </ul>
            </div>
            <div>
            {isLoading && (
                <div className={style.loader_container}>
                    <div className={style.loader} />
                </div>
            ) || (
                <div style={{overflowX : "auto"}}>
                        <table>
                        <tr>
                            <th>id</th>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>email</th>
                        </tr>
                     { users?.data?.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                     )
                    )}
                        </table>

                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Navbar;