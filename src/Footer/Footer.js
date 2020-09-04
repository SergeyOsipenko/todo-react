import React from 'react';
import './Footer.css';
import {useDispatch, useSelector} from 'react-redux';
import {setFilter, deleteCompletedRows} from '../actions'

function Footer(props) {
    const dispatch = useDispatch();
    const filteredBy = useSelector(state => state.filterBy);

    return (
        <div className="footer">
            <span className="items-left">{`${props.itemsNumber} items left`}</span>
            <div className="filter">
                <div
                    className={`filter-by ${filteredBy === 'All' ? 'selected' : ''}`}
                    onClick={() => dispatch(setFilter('All'))}
                >All</div>
                <div
                    className={`filter-by ${filteredBy === 'Active' ? 'selected' : ''}`}
                    onClick={() => dispatch(setFilter('Active'))}
                >Active</div>
                <div
                    className={`filter-by ${filteredBy === 'Completed' ? 'selected' : ''}`}
                    onClick={() => dispatch(setFilter('Completed'))}
                >Completed</div>
            </div>
            {props.hasCompletedElements ?
                <button 
                    className="clear-completed"
                    onClick={() => dispatch(deleteCompletedRows())}
                >Clear completed</button> :
                null
            }
            
        </div>
    );
}

export default Footer;