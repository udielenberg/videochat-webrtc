import React from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";

import Login from "Components/Login";
import VideoContainer from "Components/VideoContainer";
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

@inject("userStore")
@observer
export default class App extends React.Component {
	state = {
		logged: false,
		user: null
	};

	login = user => {
		this.setState(prevState => ({
			logged: true,
			user
		}));
	};

	render() {
		const { logged } = this.state;
		return (
			<Wrapper>
				<h2>VideoChat:</h2>
				<Login isLoggedIn={logged} login={this.login} />
				<VideoContainer show={logged} />
			</Wrapper>
		);
	}
}
