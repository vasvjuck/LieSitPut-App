import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddIcon from '@mui/icons-material/Add';



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
                <div className='add'>
                    <AddIcon className='one' />
                </div>
            </div>
        </div>
    )
}

export default ItemList