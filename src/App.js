import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
	const contents = <h1>react Hello1</h1>;
	const contents2 = <h3>index.js에 App.js와 App.1.js을 선언하여 나누어 렌더링이 가능하다 </h3>;
	const new_tag = <sanghwa>sanghwa 태그 정의</sanghwa>
	const user = {
		firstName : 'SANGHWA',
		lastName : 'LEE'
	}
	const element = (
		<h1>
			Hello, {formatName(user)}
		</h1>
	)

	function formatName(user){
		return user.firstName + ' ' + user.lastName;
	}

	function getGreeting(user){
		if(user){
			return <h1>hello, {formatName(user)}</h1>
		}
		return <h1>Hello, Stranger.</h1>
	}

	function component_before_divide() {
		return (
			<div className="Comment">
				<div className="UserInfo">
					<img className="Avatar"></img>
					<div className="UserInfo-name">
						작성자명
					</div>
				</div>
				<div className="Comment-text">
					코멘트
			  </div>
				<div className="Comment-date">
					데이타
			  </div>
			</div>
		);
	}

	function Avatar(){
		return (
			<img className="Avatar"></img>
		)
	}

	function UserInfo(){
		return (
			<div className="UserInfo">
				<Avatar user=''/>
				<div className="UserInfo-name">
					작성자명2
				</div>
			</div>
		)
	}

	function component_after_divide(){
		return (
			<div className="Comment">
				<UserInfo user=''/>
				<div className="Comment-text">
					코멘트
				</div>
				<div className="Comment-date">
					데이타
				</div>
			</div>
		)
	}
	
	class Clock extends React.Component{
		constructor(props) {
			super(props);
			this.state = {date: new Date()};
		}
		
		componentDidMount(){
			this.timerId = setInterval(()=> this.tick(),1000);
		}

		componentWillMount(){
			clearInterval(this.timerID);
		}
	
		tick() {
			this.setState({
				date: new Date()
			});
		}
	
		render() {
			return (
				<div>
					<h1>Hello, Clock</h1>
					<h2>It is {this.state.date.toLocaleTimeString()}</h2>
				</div>
			)
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				{contents}
				{contents2}
				{element}
				{getGreeting()}
				{new_tag}
				{component_before_divide()}
				{component_after_divide()}
				<Clock />
			</header>
		</div>
	);
}

export default App;
