import React, { useState, useCallback } from 'react';
import './Board.scss';
import DoingsEnter from '../DoingsEnter/DoingsEnter';
import Doing from '../Doing/Doing';
import Footer from '../Footer/Footer';
import {useSelector, useDispatch} from 'react-redux';
import {setLocalStorage} from '../actions'
import { useHistory } from 'react-router-dom';
import { ADD_ROW, DELETE_COMPLETED_ROWS, DELETE_ROW, TOGGLE_ROWS_STATUS, UPDATE_ROW_STATUS } from '../Utils/Constants';

function Board() {
	const dispatch = useDispatch();
	const history = useHistory();
	const doings = useSelector(state => state.doings.data);
	const [hasLetters, setHasLetters] = useState(false);

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
		() => { dispatch(setLocalStorage(DELETE_COMPLETED_ROWS)) },
		[dispatch]
	);

	const handleToggleRows = useCallback(
		(event) => { dispatch(setLocalStorage(TOGGLE_ROWS_STATUS, event.target.checked)) },
		[dispatch]
	);
	
	const handleAddRow = useCallback(
		(event) => {
			if(event.key === "Enter" && event.target.value){
				dispatch(setLocalStorage(ADD_ROW, event.target.value))
				setHasLetters(false);
				event.target.value = '';
			}
		},
		[dispatch]
	);

	const handelExtendedAddRow = useCallback(
		(input) => {
			dispatch(setLocalStorage(ADD_ROW, input.value));
			requestAnimationFrame(() => {
				history.push(`/Doing/${doings.length}`);
			});
		},
		[dispatch, history, doings]
	);

	const handelEnterRowChange = useCallback(
		(event) => {
			setHasLetters(event.target.value.length > 0);
		},
		[]
	);

	const handleDeleteRow = useCallback(
		(event) => {
			dispatch(setLocalStorage(DELETE_ROW, event.target.dataset.index));
		},
		[dispatch]
	);

	const handleUpdateRowStatus = useCallback(
		(event) => {
			dispatch(setLocalStorage(UPDATE_ROW_STATUS, {index: event.target.dataset.index, value: event.target.checked}));
		},
		[dispatch]
	);

	return (
		<div className="board">
			<DoingsEnter
				doings={doings}
				hasUnCompletedElements={doings.filter(doing => !doing.isCompleted).length > 0}
				hasLetters={hasLetters}
				onToggleRows={handleToggleRows}
				onAddRow={handleAddRow}
				onExtendedAddRow={handelExtendedAddRow}
				onEnterRowChange={handelEnterRowChange}
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