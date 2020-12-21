import React, { useState, useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { sublinks } from './data';
import { useGlobalContext } from './Context';



const Submenu = () => {
    const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext();
    const [columns, setColumns] = useState('col-2');
    const container = useRef(null);

    useEffect( () => {
        
        const submenu = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;

        if(links.length === 3){
            setColumns('col-3');
        }
        if(links.length > 3 ){
            setColumns('col-4');
        }
    }, [location, links])

    return (
        <aside ref={container} className={`${isSubmenuOpen ? 'submenu show': 'submenu'}`}>
            <h2>{page}</h2>
            <div className={`submenu-center ${columns}`}>
                {links.map( (link, index) => {
                    const { url, icon, label } = link;
                    return (
                        <a key={index} href={url}>
                            { icon }
                            { label }
                        </a>
                    )
                })}
            </div>
        </aside>
    );
}

export default Submenu;