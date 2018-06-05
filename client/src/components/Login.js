import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 400px;
	padding: 20px;
	border: 1px solid lightgray;

	.form {
		display: flex;
		flex-direction: column;

		input {
			margin-bottom: 10px;
			padding: 10px;
		}
	}

	display: ${({ isLoggedIn }) => (isLoggedIn ? "none" : "block")};
`;

export default class Login extends React.Component {
	state = {
		email: null,
		password: null
	};

	onClickHandler = () => {
		const { email, password } = this.state;
		this.props.login({ email, password });
	};

	onChangeHandler = e => {
		const { id, value } = e.target;

		if (id === "email") {
			this.setState({ email: value });
		} else {
			this.setState({ password: value });
		}
	};

	render() {
		return (
			<Wrapper {...this.props}>
				<h2>Login:</h2>
				<div className="form">
					<input
						type="email"
						id="email"
						placeholder="email"
						onChange={this.onChangeHandler}
					/>
					<input
						type="password"
						id="password"
						placeholder="password"
						onChange={this.onChangeHandler}
					/>
				</div>
				<button onClick={this.onClickHandler}>Login</button>
			</Wrapper>
		);
	}
}
