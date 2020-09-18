import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {updateRowDescription} from '../actions'
import './DoingCard.scss';

function DoingCard() {
	const dispatch = useDispatch();
	const { id } = useParams();
	
	const [doing, setDoing] = useState(useSelector(state => state.doings)[id])
	const [isEdit, setIsEdit] = useState(false);
	const inputRef = useRef(null); 

	useEffect(() => {
		if(isEdit)
			inputRef.current.focus();
	}, [isEdit]);

	const toggleEdit = () => {
		setIsEdit(!isEdit);
	}

	const saveDescription = () => {
		dispatch(updateRowDescription({index: id, value: doing.description}));
		toggleEdit();
	}

	const changeDescription = (value) => {
		const copy = {...doing}
		copy.description = value;
		setDoing(copy);
	}

	return(doing !== undefined ? (
			<div className="doing-card">
				<div className="doing-card__content">
					<div className="doing-card__title">Name</div>
					<span className="doing-card__value">{doing.value}</span>
					
					<div className="doing-card__title">Status</div>
					<span className="doing-card__value">{doing.isCompleted ? 'Completed' : 'Active'}</span>
					
					<div className="doing-card__title">Description</div>
					{isEdit ? 
						<input
							className="doing-card__description"
							onChange={(event) => changeDescription(event.target.value)}
							value={doing.description}
							ref={inputRef}
						/> :
						<span className="doing-card__value">{doing.description}</span>
					}
				</div>
				<div className="doing-card__actions">
					{!isEdit ?
						<button 
							className="button"
							onClick={toggleEdit}
						>Edit</button> :
						<button 
							className="button"
							onClick={saveDescription}
						>Save</button>
					}
					<Link to="/Board" className="doing-card__link back-link">Back to list</Link>
				</div>
			</div>
		) : (
			<div className="error-wrapper">
				<span className="error-wrapper__text">Selected Doing doesn't exist</span>
				<Link to="/Board" className="error-wrapper__link back-link">Back to list</Link>
			</div>
		)
	);
}

export default DoingCard;