import {actions} from '../constants';
import 'isomorphic-fetch';

const extractTagsFromIssues = (issues) => {
	const tags = {};
	issues.map((issue) => {
		issue.labels.forEach((label) => {
			if (typeof tags[label.id] === 'undefined') {
				tags[label.id] = label;
			}
		})
	});
	return Object.getOwnPropertyNames(tags).map((tagId) => {
		return {
			key: tagId,
			text: tags[tagId].name,
			value: tagId,
		};
	});
}

export const loadGithubIssues =  (dispatch, url) => {
	dispatch({
		type: actions.LOAD_GITHUB_ISSUES,
	});
	console.log('Fetching URL', url);
	fetch(`https://api.github.com/repos/${url}/issues`).then(res => {
		console.log(res);
		return res.json();
	}).then((json) => {
		dispatch({
			type: actions.GITHUB_ISSUES_LOADED,
			payload: json,
		});
		console.log('TAGS', extractTagsFromIssues(json));
		dispatch({
			type: actions.UPDATE_TAGS,
			payload: extractTagsFromIssues(json),
		});

	}).catch(err => dispatch({
		type: actions.GITHUB_ISSUES_ERROR,
		payload: err,
	}));
};