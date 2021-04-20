import React, {useState, useEffect, useCallback} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import style from './profile.module.scss';
import address from "../../Assests/home-address.png";


const Profile = () => {
    const [profileObj, setProfileObj] = useState(null);
    const location = useLocation();
    console.log('location--->', location);
    console.log('profileObj--->', profileObj);

    const apiUrl = "https://assets.toothsi.in/assets/json/test.json";

    const fetchData = useCallback((id) => {
        axios.get(apiUrl).then(res => {
            setProfileObj(res.data.find(obj => obj.id === id));
            console.log('res.data--->', res.data.find(obj => obj.id === id));
        })
    }, [])

    useEffect(() => {
        const {search} = location;
        fetchData(+search.split("=")[1]);

    }, [fetchData])

    return (
        <React.Fragment>
        { profileObj &&
        <div className={style.container}>
            <section>
            <img src={profileObj.image} alt=""/>
            <article>&#9733;{profileObj.avg_ratings}</article>
                <div className={style.main}>
                    <h1>{profileObj.first_name} {profileObj.last_name}</h1>
                    <span>{profileObj.email}</span>
                    <p className={style.p_first}>projects_completed: {profileObj.projects_completed}</p>
                    <p>{profileObj.about}</p>
                    <ul>
                    <li><p className={style.p_first}>{profileObj.specializations[0]}, {profileObj.specializations[1]}</p></li>
                    </ul>
                    <p className={style.p_last}><img src={address} alt="adrress"/>{profileObj.address}</p>
                </div>
            </section>
            <button>Proceed</button>
            
        </div>
        }
        </React.Fragment>
    )
}

export default Profile;
