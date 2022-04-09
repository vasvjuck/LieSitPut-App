import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const ItemList = ({ userData, data }) => {
    return (
        <div className='mainList__item'>
            <img src={data.imgSrc} />
            <p>{data.name}</p>
            <div className='quality'>
                <StarIcon /><span>{data.ratings}</span>
                <MonetizationOnIcon /><span>{data.price}</span>
                {
                    userData.role === 'Admin' ? (<div ><button className='edit'>Edit</button>  </div>) : ('')
                }
            </div>
        </div>
    )
}

export default ItemList