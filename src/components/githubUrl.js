import {func, string} from 'prop-types';
import React from 'react';
import { Button, Icon, Input } from 'semantic-ui-react'


import {connect} from 'react-redux';
import {actions} from '../constants';
import {loadGithubIssues} from '../actionCreators';

const GithubUrl = ({repoUrl, changeRepoFn, loadRepoFn}) => {
	let url = repoUrl;

	return (
		<div>
			<Input icon='github' iconPosition='left' placeholder='Github Issues url' value={url} onChange={(e) => changeRepoFn(e.target.value)}/>
			<Button animated onClick={() => {loadRepoFn(url)}}>
				<Button.Content visible>Load</Button.Content>
				<Button.Content hidden>
					<Icon name='right arrow' />
				</Button.Content>
			</Button>
		</div>
	)
};

GithubUrl.propTypes = {
	repoUrl: 			string.isRequired,
	changeRepoFn: func.isRequired,
	loadRepoFn: 	func.isRequired,
};


const mapStateToProps = (state, props) => {
	console.log('STATE', state);
	return Object.assign({}, props, {
		repoUrl: state.issueURL,
	});
};

const mapDispatchToProps = (dispatch, props) => {
	return Object.assign({}, props, {
		changeRepoFn: (newURL) => {
			console.log('newURL', newURL)
			if (newURL !== props.repoUrl) {
				dispatch({
					type: actions.SET_ISSUE_URL,
					payload: newURL,
				});
			}
		},
		loadRepoFn: (url) => {
				loadGithubIssues(dispatch, url);
		},
	});
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubUrl);



