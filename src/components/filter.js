import {arrayOf, func, string} from 'prop-types';
import React from 'react';
import {Dropdown, Form} from 'semantic-ui-react';

const Filter = ({name, options, onChange}) => {
	return (
		<Form.Group inline style={{width: '100%"'}}>
			<Dropdown name={name} placeholder={name} multiple selection options={options} onChange={(e, data) => {
				console.log(e);
				console.log(data);
				onChange(name, data.value)
			}}/>
		</Form.Group>
	);
};

Filter.PropTypes = {
	name: string.isRequired,
	options: arrayOf(string).isRequired,
	onChange: func.isRequired,
};

export default Filter;


