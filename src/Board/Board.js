import React from 'react';
import './Board.css';
import DoingsEnter from '../DoingsEnter/DoingsEnter';
import Doing from '../Doing/Doing';
import Footer from '../Footer/Footer';
import {useSelector} from 'react-redux';

function Board() {
    const doings = useSelector(state => state.doings);
    const filterBy = useSelector(state => state.filterBy);

    return (
        <div className="Board">
            <DoingsEnter/>
            <ul className="todo-list">
                {
                    {
                        All: doings,
                        Completed: doings.filter(doing => doing.isCompleted),
                        Active: doings.filter(doing => !doing.isCompleted)
                    }[filterBy].map((doing, index) => {
                        return (
                            <li key={index}>
                                <Doing
                                    value={doing.value}
                                    status={doing.isCompleted}
                                    index ={index}
                                />
                            </li>
                        );
                    })
                }
            </ul>
            {doings.length > 0 ? (
                <Footer
                    itemsNumber={doings.filter(doing => !doing.isCompleted).length}
                    hasCompletedElements={doings.filter(doing => doing.isCompleted).length > 0}
                />
            ) : ("")}
        </div>
    )
}

export default Board;