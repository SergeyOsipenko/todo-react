import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {clearRedirectTo, setLocalStorage} from '../actions'
import './DoingCard.scss';
import { UPDATE_ROW_DESCRIPTION } from '../Utils/Constants';
import Loader from 'react-loader-spinner';

function DoingCard() {
	const dispatch = useDispatch();
	const { id } = useParams();
	
	const redirectTo = useSelector(state => state.doings.redirectTo);
	const isLoading = useSelector(state => state.doings.isLoading);
	const [doing, setDoing] = useState(useSelector(state => state.doings.data)[id])
	const [isEdit, setIsEdit] = useState(false);
	const inputRef = useRef(null); 

	useEffect(() => {
		if(redirectTo.length > 0){
			dispatch(clearRedirectTo())
		}
	}, [dispatch, redirectTo]);

	useEffect(() => {
		if(isEdit)
			inputRef.current.focus();
	}, [isEdit]);

	const toggleEdit = () => {
		setIsEdit(!isEdit);
	}

	const saveDescription = () => {
		dispatch(setLocalStorage(UPDATE_ROW_DESCRIPTION, {index: id, value: doing.description}));
		toggleEdit();
	}

	const changeDescription = (value) => {
		const copy = {...doing}
		copy.description = value;
		setDoing(copy);
	}

	if(isLoading)
	return (
		<Loader
			type="ThreeDots"
			color="rgba(175, 47, 47, 0.5)"
			height={100}
			width={100}/>
	);

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