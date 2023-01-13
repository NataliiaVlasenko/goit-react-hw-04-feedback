import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
				<button  type="button" key={shortid.generate()} name={option} onClick={onLeaveFeedback}> 
					{option}
				</button>
			))}
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};
