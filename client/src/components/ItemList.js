import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddIcon from '@mui/icons-material/Add';

const ItemList = ({ data }) => {
    return (
        <div className='mainList__item'>
            <img src={data.imgSrc} />
            <p>{data.name}</p>
            <div className='quality'>
                <StarIcon /><span>{data.ratings}</span>
                <MonetizationOnIcon /><span>{data.price}</span>
                <div className='add'>
                    <AddIcon className='one' />
                </div>
            </div>
        </div>
    )
}

export default ItemList