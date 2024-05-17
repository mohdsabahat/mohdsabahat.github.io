import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAVBAR_LINKS } from '../../utils/constants';

import './PageSwitchButton.css';


const  PageSwitchButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentPageIndex = NAVBAR_LINKS.findIndex(link => link.to === location.pathname);

    const isNextPage = currentPageIndex !== NAVBAR_LINKS.length - 1;
    const nextPage = currentPageIndex < NAVBAR_LINKS.length - 1 ? 
        NAVBAR_LINKS[currentPageIndex + 1].to : NAVBAR_LINKS[0].to;

    const isPrevPage = currentPageIndex !== 0;
    const prevPage = currentPageIndex > 0 ? 
        NAVBAR_LINKS[currentPageIndex - 1].to : NAVBAR_LINKS[NAVBAR_LINKS.length - 1].to;

    const handleNextPageClick = () => {
        navigate(nextPage);
    }

    const handlePrevPageClick = () => {
        navigate(prevPage);
    }

    return (
        <>
            {isPrevPage && <div className="page-switch page-switch-prev">
                <button 
                    title='Previous Page'
                    onClick={handlePrevPageClick}
                >
                    <span className="fas fa-chevron-left"></span>
                </button>
            </div>
            }
            {isNextPage && <div className="page-switch page-switch-next">
                <button 
                    title='Next Page'
                    onClick={handleNextPageClick}
                >
                    <span className="fas fa-chevron-right"></span>
                </button>
            </div>
            }
        </>
    )
}

export default PageSwitchButton;
