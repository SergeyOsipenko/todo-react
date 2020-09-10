import React, { useState, useCallback } from 'react';
import './Board.scss';
import DoingsEnter from '../DoingsEnter/DoingsEnter';
import Doing from '../Doing/Doing';
import Footer from '../Footer/Footer';
import {useSelector, useDispatch} from 'react-redux';
import {deleteCompletedRows, toggleRows, addRow, deleteRow, updateRowStatus, selectRow} from '../actions'

function Board() {
    const dispatch = useDispatch();
    const doings = useSelector(state => state.todo.doings);

    const [filterBy, setFilterBy] = useState("All");
    const filterDoings = () => {
        return {
            All: doings,
            Completed: doings.filter(doing => doing.isCompleted),
            Active: doings.filter(doing => !doing.isCompleted)
        }[filterBy];
    };
    const handleSetFilterBy = useCallback(
        (event) => {
            event.persist();
            setFilterBy(event.target.dataset.action);
        },
        []
    );

    const handleDeleteCompletedRows = useCallback(
        () => { dispatch(deleteCompletedRows()) },
        [dispatch]
    );

    const handleToggleRows = useCallback(
        (event) => { dispatch(toggleRows(event.target.checked)) },
        [dispatch]
    );
    const handleAddRow = useCallback(
        (event) => {
            if(event.key === "Enter" && event.target.value)
                dispatch(addRow({key: event.key, element: event.target}))
        },
        [dispatch]
    );

    const handleDeleteRow = useCallback(
        (event) => {
            event.persist()
            dispatch(deleteRow(event.target.dataset.index));
        },
        [dispatch]
    );

    const handleUpdateRowStatus = useCallback(
        (event) => {
            event.persist();
            dispatch(updateRowStatus(event.target.dataset.index));
        },
        [dispatch]
    );

    const handleSelectRow = useCallback(
        (event) => {
            event.persist();
            dispatch(selectRow(event.target.dataset.index));
        },
        [dispatch]
    )

    return (
        <div className="board">
            <DoingsEnter
                doings={doings}
                hasUnCompletedElements={doings.filter(doing => !doing.isCompleted).length > 0}
                onToggleRows={handleToggleRows}
                onAddRow={handleAddRow}
            />
            <ul className="board__todo-list">
                {
                    filterDoings().map((doing, index) => {
                        return (
                            <li key={`${doing.value}_${index}`}>
                                <Doing
                                    value={doing.value}
                                    status={doing.isCompleted}
                                    description={doing.description}
                                    index={index}
                                    onDeleteRow={handleDeleteRow}
                                    onUpdateRowStatus={handleUpdateRowStatus}
                                    onSelectRow={handleSelectRow}
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
                    filterBy={filterBy}
                    onSetFilter={handleSetFilterBy}
                    onDeleteCompletedRows={handleDeleteCompletedRows}
                />
            ) : ("")}
        </div>
    )
}

export default Board;