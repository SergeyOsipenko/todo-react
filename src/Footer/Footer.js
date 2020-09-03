import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <span className="items-left">{`${props.itemsNumber} items left`}</span>
            <div className="filter">
                <div
                    className={`filter-by ${props.filteredBy === 'All' ? 'selected' : ''}`}
                    onClick={props.onFilterClick}
                >All</div>
                <div
                    className={`filter-by ${props.filteredBy === 'Active' ? 'selected' : ''}`}
                    onClick={props.onFilterClick}
                >Active</div>
                <div
                    className={`filter-by ${props.filteredBy === 'Completed' ? 'selected' : ''}`}
                    onClick={props.onFilterClick}
                >Completed</div>
            </div>
            {props.hasCompletedElements ?
                <button 
                    className="clear-completed"
                    onClick={props.onClearClick}
                >Clear completed</button> :
                null
            }
            
        </div>
    );
}

export default Footer;