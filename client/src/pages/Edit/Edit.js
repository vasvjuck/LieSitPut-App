import React, { useState } from 'react'
import './Edit.scss';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Edit = () => {
    const navigate = useNavigate()

    const product = useSelector(state => state.oneGoods.oneGoods)

    const [name, setName] = useState('')
    const [ratings, setRatings] = useState('')
    const [price, setPrice] = useState('')

    const editProduct = async (e, id) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3001/api/edit', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    name,
                    ratings,
                    price
                })
            })

            const data = await response.json()

            if (data.status === 'ok') {
                navigate('/home')
            }
        } catch (error) {
            console.log('Error: ', error)
        }
    }


    console.log(product)
    return (
        <div className='edit'>
            <div className='edit__right'>
                <img src={product.imgSrc} />
                <div className='right__content'>
                    <h3>{product.name}</h3>
                    <div className='rating'>
                        <p>Rating: </p> <span>{product.ratings}</span>
                        <p>Price: </p> <span>{product.price}$</span>
                    </div>

                </div>
            </div>
            <div className='edit__left'>
                <form>
                    <h2>Edit your product</h2>
                    <div className='inputs'>
                        <div className='content'>
                            <p>Change name</p>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter your new name...'
                            />
                        </div>
                        <div className='content'>
                            <p>Change rating</p>
                            <input
                                value={ratings}
                                onChange={(e) => setRatings(e.target.value)}
                                placeholder='Enter your new rating...'
                            />
                        </div>
                        <div className='content'>
                            <p>Change price</p>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Enter your new price...'
                            />
                        </div>
                        <div className='btn_block'>
                            <button className='btn' onClick={(e) => editProduct(e, product.id)}>Edit</button>
                            <Link to="/home" className='btn one'>Go back</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit