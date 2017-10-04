import React from 'react';
import {Container, Image, List} from 'semantic-ui-react';

const Welcome = () => {
		return (
			<Container>
				<h1>Hello devs</h1>

				<p>I hope you'll enjoy my code, and that it will work on your computer.</p>
				<p> Unit tests are missing, but you'll notice I get some extra points.</p>
				<p> Also this time I decided to go from a scratch dev environment, so no browser reload, linting, etc...</p>

				<h2>Who am I?</h2>

				<p> You can check my online profiles here :</p>

				<List divided relaxed>
					<List.Item>
						<List.Icon name='github' size='large' verticalAlign='middle' />
						<List.Content>
							<List.Header as='a' href="https://github.com/a-lucas">Github</List.Header>
							<List.Description >Check out my typescript cdn repos !</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name='stack overflow' size='large' verticalAlign='middle' />
						<List.Content>
							<List.Header as='a' href="https://stackoverflow.com/users/544287/ant">Stack Overflow</List.Header>
							<List.Description > Not that active anymore</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name='linkedin' size='large' verticalAlign='middle' />
						<List.Content>
							<List.Header as='a' href="https://www.linkedin.com/in/antoinelucas1/">Linkedin</List.Header>
							<List.Description as='a'>For my work experience - all failed startup are not shown..</List.Description>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name='facebook' size='large' verticalAlign='middle' />
						<List.Content>
							<List.Header as='a'  href="https://www.facebook.com/cooluhuru" >Facebook</List.Header>
							<List.Description as='a'>Maybe we know someone in common</List.Description>
						</List.Content>
					</List.Item>
				</List>

				<h4>And don't forget to have fun !</h4>

				<Image src='https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif' size='medium' shape='circular' />
			</Container>

		)
};

export default Welcome;