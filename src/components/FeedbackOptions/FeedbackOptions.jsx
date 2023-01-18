import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
				<Button  type="button" key={shortid.generate()} name={option} onClick={onLeaveFeedback}> 
					{option}
				</Button>
			))}
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};
