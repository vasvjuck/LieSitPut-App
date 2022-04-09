import React from 'react'
import './Edit.scss';


const Edit = () => {
    return (
        <div className='edit'>
            <div className='edit__right'>
                <img src="https://pngimg.com/uploads/bed/bed_PNG17424.png" />
                <div className='right__content'>
                    <h3>Modern Bed</h3>
                    <div className='rating'>
                        <p>Rating: </p> <span>4</span>
                        <p>Price: </p> <span>45.3</span>
                    </div>

                </div>
            </div>
            <div className='edit__left'>
                <div className='content'>
                    <p>Change name</p>
                    <input
                        placeholder='Enter your new name...'
                    />
                </div>
                <div className='content'>
                    <p>Change rating</p>
                    <input
                        placeholder='Enter your new rating...'
                    />
                </div>
                <div className='content'>
                    <p>Change price</p>
                    <input
                        placeholder='Enter your new price...'
                    />
                </div>
            </div>
        </div>
    )
}

export default Edit