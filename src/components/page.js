import React from 'react';
import {Container, Menu} from 'semantic-ui-react';

import IssueList from './issueList';
import GithubURL from './githubUrl';
import FilterList from './filterList';


const Page = () => {
	return (
		<div>
			<Menu fixed='top' inverted fluid widths={3}>

					<Menu.Item as='a' header>
						Github Issue Vizualizer
					</Menu.Item>
					<Menu.Item>
						<GithubURL/>
					</Menu.Item>
					<Menu.Item size="large">
						<FilterList/>
					</Menu.Item>

			</Menu>

			<Container text style={{ marginTop: '10em' }}>
				<IssueList />
			</Container>
		</div>
		);
};

export default Page;
