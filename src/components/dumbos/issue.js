import {arrayOf, func, number, shape, string} from 'prop-types';
import React from 'react';
import {Label, Item} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

const Issue = ({title, user, html_url,  state, body, created_at, labels}) => {
	return (
	<Item>
		<Item.Image
			as="a"
			url={user.url}
			size='tiny'
			label={{color: 'blue', content: user.login,  ribbon: false, attached: 'top'}}
			src={user.avatar_url}
		/>

		<Item.Content>
			<Item.Header as="a" href={html_url}>{title}</Item.Header>
			<Item.Meta>
				<Label content={state} color={state === "open" ? "red" : "green"}/>
				{labels.map((label) => (<Label key={`label_${label.id}`} content={label.name} color="blue" />))}
			</Item.Meta>
			<Item.Description>
				<ReactMarkdown source={body} />
			</Item.Description>
			<Item.Extra>
				Created on {created_at}
			</Item.Extra>
		</Item.Content>
	</Item>
	);
};

Issue.PropTypes = {
	title: string.isRequired,
	created_at: string.isRequired,
	html_url: string.isRequired,
	labels: arrayOf(shape({
		id: number,
		name: string,
	})).isRequired,
	body: string.isRequired,
	state: string.isRequired,
	user: shape({
		login: string,
		avatar_url: string,
		url: string,
	}),
};

export default Issue;

