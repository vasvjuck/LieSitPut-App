import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from 'react-router-dom';


const ItemList = ({ userData, data }) => {
    return (
        <div className='mainList__item'>
            <img src={data.imgSrc} />
            <p>{data.name}</p>
            <div className='quality'>
                <StarIcon /><span>{data.ratings}</span>
                <MonetizationOnIcon /><span>{data.price}</span>
                {
                    userData.role === 'Admin' ? (<Link to='/edit' className='edit'>Edit</Link>) : ('')
                }
            </div>
        </div>
    )
}

export default ItemList