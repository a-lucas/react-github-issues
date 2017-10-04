export const actions = {
	SET_ISSUE_URL:					'SET_ISSUE_URL',
	LOAD_GITHUB_ISSUES: 		'LOAD_GITHUB_ISSUES',
	GITHUB_ISSUES_LOADED: 	'GITHUB_ISSUES_LOADED',
	GITHUB_ISSUES_ERROR: 		'GITHUB_ISSUES_ERROR',
	FILTER: 								'FILTER',
	UPDATE_TAGS:						'UPDATE_TAGS',
};

export const pageStatus = {
	pristine: 0,
	loading: 1,
	loaded: 2,
	error: 3,
};