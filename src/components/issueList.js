import React from 'react';
import {connect} from 'react-redux';
import {Dimmer, Loader, Segment, Item} from 'semantic-ui-react';
import Issue from './issue';
import {arrayOf, shape, number} from 'prop-types';
import {pageStatus} from '../constants';
import {loadGithubIssues} from '../actionCreators';
import FilterList from './filterList';

const mapStateToProps = (state, props) => {
	return Object.assign({}, props, state);
};

const mapDispatchToProps = (dispatch, props) => {
	return Object.assign({}, props, {loadGithubIssues});
};

const filterTheIssues = (issues, filters) => {
		console.log('filter issues', issues, filters);
		return issues.filter((issue) => {
				return filters.reduce((acc, filter) => {
					let show;
					switch(filter.name) {
						case 'status':
							show =  filter.selected.length === 0 || filter.selected.indexOf(issue.state) >= 0;
							if (!show || !acc) return false;
							return acc;

						case 'tags':
							const labelKeys = issue.labels.map(label => label.id);
							console.log('Labels, ', labelKeys, 'Selected', filter.selected);
							show =   filter.selected.length === 0 || labelKeys.reduce((acc2, labelKey) => acc2 ? acc2 : filter.selected.map(parseInt).indexOf(labelKey) >= 0, false);
							if (!show || !acc) return false;
							return acc;
					}
				}, true);
		});
};

const IssueList = ({issues, status, availableFilters}) => {
	switch (status) {
		case pageStatus.pristine: return (<div>PRISTINE</div>);
		case pageStatus.loading: return (<Segment>
			<Dimmer active>
				<Loader content='Loading' />
			</Dimmer>
		</Segment>);
		case pageStatus.error: return (<div>Error loading URL</div>);
		case pageStatus.loaded: return ( <Item.Group divided relaxed>
			{filterTheIssues(issues, availableFilters).map(issue => <Issue key={issue.url} {...issue} />)}
			</Item.Group>);
		default: return (<div>Unknown status: {status}</div>);
	}
};

IssueList.PropTypes = {
	issues: arrayOf(shape(Issue.PropTypes)).isRequired,
	status: number.isRequired,
	availableFilters: FilterList.PropTypes.filters,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);

