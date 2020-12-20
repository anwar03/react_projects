import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './Context';


const Home = () => {
    const {openSidebar, openModal } = useGlobalContext();
    // console.log(data);

    return (
        <main>
            <button className='sidebar-toggle' onClick={openSidebar}>
                <FaBars />
            </button>
            <button className='btn' onClick={openModal}>
                Show Modal
            </button>
        </main>
    );
}

export default Home;
