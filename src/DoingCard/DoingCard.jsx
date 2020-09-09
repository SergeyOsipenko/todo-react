import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import './DoingCard.scss';

function DoingCard(props) {
    const doings = useSelector(state => state.todo.doings);
    const index = useSelector(state => state.todo.selected);
    const doing = doings[index];

    const status = doing.isCompleted ? 'Completed' : 'Active';
    return(
        <div className="doing-card">
            <div className="doing-card__content">
                <div className="doing-card__title">Name</div>
                <span className="doing-card__value">{doing.value}</span>
                
                <div className="doing-card__title">Status</div>
                <span className="doing-card__value">{status}</span>
                
                <div className="doing-card__title">Description</div>
                <span className="doing-card__value">{doing.description}</span>
            </div>
            <div className="doing-card__actions">
                <Link to="/Board" className="doing-card__link">Back to list</Link>
            </div>
        </div>
    );
}

export default DoingCard;