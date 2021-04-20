import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import style from './card.module.scss';
import star from '../../Assests/star-16.png';

function List({filters}) {

    const [lists, setList] = useState(null);
    const apiUrl = "https://assets.toothsi.in/assets/json/test.json";

    const fetchData = useCallback(() => {
        axios.get(apiUrl).then(res => {
            setList(res.data);
            console.log('res.data--->', res.data);
        })
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleClick = id => () => {
        window.location.href = `/profile?id=${id}`;
    }

    const getFilteredList = () => {
        if(lists && filters && filters.length) {
            return lists.filter(obj => filters.some(val => val >= obj.avg_ratings));
        };
        return lists || [];
    }


    return (
        <div>
            <div className={style.main}>
            { getFilteredList()?.map(list => (
                <div className={style.container}>
                <div className={style.card} onClick={handleClick(list.id)}>
                    <div className={style.cardLeft}>
                     <h1>{list.first_name} {list.last_name} </h1>
                    <span><span>projects_completed:</span> {list.projects_completed}</span>
                    <p>{list.email}</p>

                    </div>

                    <div className={style.cardRight}>
                    <img src={list.image} alt=""/>
                    </div>
                </div>
                    <hr />
                    <section>
                        <ul>
                            <li><p>{list.specializations[0]}, {list.specializations[1]}</p></li>
                        </ul>
                        <span><img src={star} alt="star" />{list.avg_ratings}</span>
                        </section>
                    </div>
                
                ))
            }
            </div>
        </div>
    )
}

export default List
