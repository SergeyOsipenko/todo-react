import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <div className="footer">
            <span className="footer__items-left">{`${props.itemsNumber} items left`}</span>
            <div className="footer__filter">
                <div
                    className={`footer__filter-by ${props.filterBy === 'All' ? 'footer__filter-by-selected' : ''}`}
                    onClick={props.onSetFilter}
                    data-action='All'
                >All</div>
                <div
                    className={`footer__filter-by ${props.filterBy === 'Active' ? 'footer__filter-by-selected' : ''}`}
                    onClick={props.onSetFilter}
                    data-action='Active'
                >Active</div>
                <div
                    className={`footer__filter-by ${props.filterBy === 'Completed' ? 'footer__filter-by-selected' : ''}`}
                    onClick={props.onSetFilter}
                    data-action='Completed'
                >Completed</div>
            </div>
            {props.hasCompletedElements ?
                <button 
                    className="button"
                    onClick={props.onDeleteCompletedRows}
                >Clear completed</button> :
                null
            }
        </div>
    );
}

export default Footer;