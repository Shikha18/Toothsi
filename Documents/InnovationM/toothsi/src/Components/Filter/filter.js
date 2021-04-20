import React from 'react';
import style from './filter.module.scss';

function Filter({filters, setFilters}) {
    const filterClickHandler = value => ({target: {checked}}) => {
        if(checked && !filters.includes(value)) {
            setFilters([
                ...filters,
                value
            ]);
        } else if(!checked && filters.includes(value)) {
            const updatedFilters = [...filters];
            const index = updatedFilters.findIndex(ele => ele === value);
            updatedFilters.splice(index, 1);
            setFilters(updatedFilters);
        }
    }
    return (
        <div className={style.container}>
            <section>
                <div>
                    <h1>Beginer</h1>
                    <p>Budget : Below Rs 50 K</p>
                </div>
                <div>
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                <input name="star" type="checkbox" onClick={filterClickHandler(3)}/>
                </div>
            </section>
                <hr />
            <section>
                <div>
                    <h1>Moderate</h1>
                    <p>Budget : Below Rs 100 K</p>
                </div>
                <div>
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                    <input name="star" type="checkbox"  onClick={filterClickHandler(4)}/>
                </div>
            </section>
                <hr />
            <section>
                <div>
                    <h1>Expert</h1>
                    <p>Budget : Below Rs 200 K</p>
                </div>
                <div><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                <input name="star" type="checkbox"  onClick={filterClickHandler(5)}/>
                </div>
            </section>
               <button>Save</button>
        </div>
    )
}

export default Filter;
