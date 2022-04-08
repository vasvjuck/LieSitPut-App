import React, { useState, useEffect } from 'react';
import './Main.scss';
import SquareIcon from '@mui/icons-material/Square';
import SearchIcon from '@mui/icons-material/Search';
import { Items, MenuItems } from '../../Data.js'
import MenuItem from '../MenuItem';
import ItemList from '../ItemList';


const Main = () => {
    const [menu, setMenu] = useState(MenuItems)
    const [items, setItems] = useState(Items.filter((element) => element.itemId == "bed01"))

    useEffect(() => {
        const menuCard = document
            .querySelector(".list")
            .querySelectorAll(".list__item");

        function setMenuCardActive() {
            menuCard.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }

        menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
    }, [])

    const setData = (itemId) => {
        setItems(Items.filter((element) => element.itemId == itemId));
    };

    console.log(items)
    return (
        <main>
            <div className='main__title'>
                <SquareIcon />
                <h2>Best Furniture for your house</h2>
                <SquareIcon />
            </div>
            <div className='form'>
                <div className='search'>
                    <div className='inputBar'>
                        <SearchIcon />
                        <input placeholder='Search furniture' />
                    </div>
                    <button className='btn'>Apply</button>
                </div>
                <div className='filterBar'>
                    <select className='filter'>
                        <option className='optional' value="">Filter by:</option>
                        <option className='optional' value="">From cheaper to expensive</option>
                        <option className='optional' value="">From expensive to cheaper</option>
                        <option className='optional' value="">By quality</option>
                    </select>
                </div>
            </div>
            <div className='list'>
                {
                    menu && menu.map((data) => (
                        <div className='list__content' onClick={() => setData(data.itemId)}>
                            <MenuItem
                                data={data}
                                key={data.id}
                                isActive={data.id == "1" ? true : false}
                            />
                        </div>))
                }
            </div>
            <div className='mainList'>
                {
                    items && items.map((data) => (
                        <ItemList data={data} key={data.id} />
                    ))
                }
            </div>
        </main>
    )
}

export default Main