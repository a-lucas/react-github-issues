import React from 'react';
import {connect} from 'react-redux';
import {arrayOf, shape} from 'prop-types';
import Filter from './filter';
import {actions} from '../constants';
import {Form} from 'semantic-ui-react';

const FilterList = ({filters, onChange}) => {
	return (<Form inverted>
		{filters.map(filter => <Filter key={filter.name} {...filter} onChange={onChange}/>)}
	</Form>)
};

FilterList.PropTypes = {
	filters: arrayOf(shape(Filter.PropTypes)),
};

const mapStateToProps = (state) => {
		return {
			filters: state.availableFilters
		}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (name, options) => {
			dispatch({
				type: actions.FILTER,
				payload: {name, options},
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);