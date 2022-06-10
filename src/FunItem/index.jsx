import React from 'react';
import './css/index.css';

const FunItem = ({title,info,img}) => {
    return (
        <li className='fun-item'>
            <div class='item-imgbox'>
                <img src={img} />
            </div>
            <div className='item-infobox'>
                <span className='info-title'>{title}</span>
                <span className='info-company'>{info}</span>
            </div>
        </li>
    );
};

export default FunItem;