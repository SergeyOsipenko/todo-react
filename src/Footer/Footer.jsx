import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <div className="footer">
            <span className="items-left">{`${props.itemsNumber} items left`}</span>
            <div className="filter">
                <div
                    className={`filter-by ${props.filterBy === 'All' ? 'selected' : ''}`}
                    onClick={props.onSetFilter}
                    data-action='All'
                >All</div>
                <div
                    className={`filter-by ${props.filterBy === 'Active' ? 'selected' : ''}`}
                    onClick={props.onSetFilter}
                    data-action='Active'
                >Active</div>
                <div
                    className={`filter-by ${props.filterBy === 'Completed' ? 'selected' : ''}`}
                    onClick={props.onSetFilter}
                    data-action='Completed'
                >Completed</div>
            </div>
            {props.hasCompletedElements ?
                <button 
                    className="clear-completed"
                    onClick={props.onDeleteCompletedRows}
                >Clear completed</button> :
                null
            }
        </div>
    );
}

export default Footer;