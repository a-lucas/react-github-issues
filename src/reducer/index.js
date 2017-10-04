import {actions, pageStatus} from '../constants';
import config from '../config';

const defaultState = {
	issues: [],
	status: pageStatus.pristine,
	issueURL: config.defaultRepo,
	availableFilters: [
		{
			name: 'status',
			options: [{key: 'open', text: 'open', value: 'open'}, {key: 'closed', text: 'closed', value: 'closed'}],
			selected: [],
		},
		{
			name: 'tags',
			options: [],
			selected: [],
		},
	],
};


export const pageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.LOAD_GITHUB_ISSUES:
			return Object.assign({}, state, {status: pageStatus.loading});
		case actions.UPDATE_TAGS:
			return Object.assign({}, state, {
				availableFilters: [
					{
						name: 'status',
						options: [{key: 'open', text: 'open', value: 'open'}, {key: 'closed', text: 'closed', value: 'closed'}],
						selected: [],
					},
					{
						name: 'tags',
						options: action.payload,
						selected: [],
					},
				]
			});
		case actions.GITHUB_ISSUES_LOADED:
			return Object.assign({}, state, {
				status: pageStatus.loaded,
				issues: action.payload,
			});
		case actions.GITHUB_ISSUES_ERROR:
			return Object.assign({}, state, {
				status: pageStatus.error,
				error: action.payload,
			});
		case actions.FILTER:
			const newFilter = state.availableFilters.map((filter) => {
				if (filter.name === action.payload.name) {
					return Object.assign({}, filter, {
						selected: action.payload.options,
					});
				}
				return filter;
			});
			return Object.assign({}, state, {availableFilters: newFilter});

		case actions.SET_ISSUE_URL:
			return Object.assign({}, state, {issueURL: action.payload});
		default: return state;
	}
};
