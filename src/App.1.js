import logo from './logo.svg';
import './App.1.css';
import React from 'react';
function App() {
	const add_contents = 'react Hello3';
	function clickEvent(){
		alert(11)
	}
	class Toggle extends React.Component{
		constructor(props){
			super(props);
			this.state = {isToggleOn : true};

			this.handleClick = this.handleClick.bind(this);
		}

		handleClick() {
			this.setState(prevState =>({
				isToggleOn: !prevState.isToggleOn
			}));
		}

		render() {
			return (
				<button onClick={this.handleClick}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
			)
		}
	}

	/*
		7. 조건부 렌더링 START
	*/
	
	function UserGreeting(props){
		return <h1>Wekcome back!</h1>;
	}

	function GuestGreeting(props){
		return <h1>Please sign up</h1>;
	}

	function Greeting(props){
		const isLoggedIn = props.isLoggedIn;
		if(isLoggedIn){
			return <UserGreeting />;
		}
		return <GuestGreeting />;
	}

	function LoginButton(props){
		return (
			<button onClick={props.onClick}>
				Login
			</button>
		);
	}
	function LogoutButton(props){
		return (
			<button onClick={props.onClick}>
				Logout
			</button>
		);
	}

	class LoginControl extends React.Component {
		constructor(props){
			super(props);
			this.handleLoginClick = this.handleLoginClick.bind(this);
			this.handleLogoutClick = this.handleLogoutClick.bind(this);
			this.state = {
				isLoggedIn: false
			}
		}
		handleLoginClick(){
			this.setState({
				isLoggedIn:true
			});
		}
		handleLogoutClick(){
			this.setState({
				isLoggedIn:false
			});
		}
		
		render() {
			const isLoggedIn = this.state.isLoggedIn;
			let button;
			let expression_logical_operator = isLoggedIn && '논리 && 연산자를 이용하여 표현 할 수 있다. &&의 앞에 조건이 true이면 뒤에 있는 엘리먼트가 출력된다.'; 
			let expression_trinomial_operator = isLoggedIn ? '삼항연산자도 사용 가능' : '';
			if(isLoggedIn){
				button = <LogoutButton onClick={this.handleLogoutClick} />
			}else{
				button = <LoginButton onClick={this.handleLoginClick} />
			}
			
			return (
				<div>
					<Greeting isLoggedIn={isLoggedIn } />
					{button}<br/>
					{expression_logical_operator}<br/>
					{expression_trinomial_operator}
				</div>
			)
		}

	}

	// 렌더링 막기 - null을 반환하여 막을 수 있다.
	
	function WarningBanner(props){
		if(props.warn){
			return null;
		}

		return (
			<div className ="warning">
				Warning!
			</div>
		);
	}

	class Page extends React.Component{
		constructor(props){
			super(props);
			this.state = {showWarning : true};
			this.handleToggleClick = this.handleToggleClick.bind(this);
		}

		handleToggleClick(){
			this.setState(state => ({
				showWarning : !state.showWarning
			}));
		}
		
		render() {
			return (
				<div>
					<WarningBanner warn = {this.state.showWarning } />
					<button onClick={this.handleToggleClick}>
						{this.state.showWarning ? 'Hide' : 'Show'}
					</button>
				</div>
			);
		}
	}
	

	/*
		7. 조건부 렌더링 END
	*/

	/*
		8. 리스트와 Key START
		
		- 리스트의 각 항목 속성에 key를 넣어야 하며 생략할 경우 경고문이 뜬다. 
		  key는 react에서 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는데 이 때 key 속성에 고유한 값을 부여하여 지정해야한다.
		  만약 고유한 값이 없다면 최후의 수단으로 해당 항목의 index를 key로 사용할 수 있다.
		  key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없다.
		  key 속성은 클라이언트에 노출되지 않는다.

	*/ 

	const number = [1,2,3,4,5];
	function ListItem(props){
		return <li>{props.value}</li>
	}

	function NumberList(props){
		const numbers = props.numbers;
		const listItems = numbers.map((number) => 
			<ListItem key = {number.toString()} value = {number * 2}/>
		);
		return (
			<ul>
				{listItems}
			</ul>
		);
	}

	const posts = [
		{id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
 	 	{id: 2, title: 'Installation', content: 'You can install React from npm.'}
	]

	function Blog(props){
		const sidebar = (
			<ul>
				{props.posts.map((post) => 
					<li key={post.id}>
						{post.title}
					</li>
				)}
			</ul>
		);
		
		const content = props.posts.map((post) => 
			<div key = {post.id} id = {post.id}>
				<h3>
					{post.title}
				</h3>
				<p>
					{post.content}
				</p>
			</div>
		);
		
		return (
			<div>
				{sidebar}
				<hr />
				{content}
			</div>
		)
	}
	/*
		8. 리스트와 Key END
	*/

	/*
		9. 폼 START
		- 여기서 form, input, textarea, select 태그를 어떻게 사용하는지 알아보겠다.
	
	*/
	class NameForm extends React.Component {
		constructor(props){
			super(props);
			this.state = {
				input_value : '',
				textarea_value : '',
				select_value : 'coconut',
			};
			this.handleInputChange = this.handleInputChange.bind(this);
			this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
			this.handleSelectChange = this.handleSelectChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleInputChange(event){
			this.setState({
				input_value : event.target.value
			});
		}
		handleTextAreaChange(event){
			this.setState({
				textarea_value : event.target.value
			})
		}
		
		handleSelectChange(event){
			this.setState({
				select_value : event.target.value
			})
		}
		handleSubmit(event){
			const contents = 
			`
				A name was submitted :  ${this.state.input_value}         
				A n essay was submitted : ${this.state.textarea_value}
				Your Select favorite flavor is : ${this.state.select_value}
			`
			alert(
				contents	
			);
			event.preventDefault();
		}

		render() {
			return (
				<form onSubmit={this.handleSubmit}>
					<label>
						name :
						<input type="text" value={this.state.input_value} onChange={this.handleInputChange}/>
						<br /><br />
						essay :
						<textarea value={this.state.textarea_value} onChange={this.handleTextAreaChange}/>
						<br /><br />
						<select value={this.state.select_value} onChange={this.handleSelectChange}>
							<option value="grapefruit">Grapefruit</option>
							<option value="lime">Lime</option>
							<option value="coconut">Coconut</option>
							<option value="mango">Mango</option>
						</select>

					</label>
					<br /><br />
					<input type="submit" value="Submit"/>
				</form>
			)
		};
	}
	/*
		9. 폼 END
	*/

	/** / 
	 * 10. State 끌어올리기 START
	 * - 동일한 데이터에 대한 변경사항을 여러 컴포넌트에 반영해야 할 필요가 있는데 이 때 공통 조상으로 state를 끌어올려 반영하는 방법을 알아보겠다.
	 */
	const scaleNames = {
		c: 'Celsius',
		f: 'Fahrenheit'
	}
	class TemperatureInput extends React.Component{
		constructor(props){
			super(props);
			this.handleChange = this.handleChange.bind(this);
		}

		handleChange(event){
			this.props.onTemperatureChange(event.target.value);
		}
		
		render(){
			const temperature2 = this.props.temperature2;
			const scale = this.props.scale;
			return (
				<fieldset>
					<legend>
						Enter temperature in {scaleNames[scale]} : 
					</legend>
					<input value={temperature2} onChange={this.handleChange}/>
				</fieldset>
			)
		}
	}

	function BoilingVerdict(props){
		if(props.celsius >= 100){
			return <p>The water would boil.</p>;
		}
		return <p>The water would not boil</p>;
	}
	function toCelsius(fahrenheit){
		return (fahrenheit - 32) * 5 / 9;	
	}
	function toFahrenheit(celsius){
		return (celsius * 9 / 5) + 32;
	}
	function tryConvert(temperature, convert){
		const input = parseFloat(temperature);
		if(Number.isNaN(input)){
			return '';
		}
		const output = convert(input);
		const rounded = Math.round(output * 1000) / 1000;
		return rounded.toString();
	}

	class Calculator extends React.Component{
		constructor(props){
			super(props);
			this.state = {
				temperature : '',
				temperature2 : '', 
				scale:'c'
			};
			this.handleChange = this.handleChange.bind(this); 
			this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
			this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		}
		handleChange(event){
			this.setState({temperature : event.target.value});
		}
		handleCelsiusChange(temperature){
			this.setState({
				scale:'c', 
				temperature2: temperature
			});
		}
		handleFahrenheitChange(temperature){
			this.setState({
				scale:'f',
				temperature2: temperature
			});
		}
		render(){
			const temperature = this.state.temperature;
			const temperature2 = this.state.temperature2;
			const scale = this.state.scale;
			const celsius = scale === 'f' ? tryConvert(temperature2, toCelsius) : temperature2;
			const fahrenheit = scale === 'c' ? tryConvert(temperature2, toFahrenheit) : temperature2;
			return (
				<fieldset>
					<legend>Enter temperature in Celsius:</legend>
					<input value={temperature} onChange={this.handleChange}/>
					<BoilingVerdict celsius={parseFloat(temperature)} />
					<TemperatureInput temperature2={celsius} onTemperatureChange={this.handleCelsiusChange} scale="c"/>
					<TemperatureInput temperature2={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} scale="f"/>
				</fieldset>
			)
		}
	}

	/**
	 * 10. State 끌어올리기 END
	 */

	/**
	 * 11. 합성 vs 상속 START
	 * - react는 상속 대신 합성을 사용하여 컴포넌트 간에 코드를 재사용 하는게 좋다고 한다.
	 * - 그러니깐 상속 대신에 함수, 객체, 클래스 등으로 import 하여 사용하는게 React에서는 권장한다는 소리인 것 같다.
	 */
	function FancyBorder(props){		
		return (
			<div className={'FancyBorder FancyBorder-' + props.color}>
				<div>
					{props.children}
				</div>
				<div>
					{props.left}
				</div>
				<div>
					{props.right}
				</div>
			</div>
		)
	}
	function Left(){
		return (
			<div>
				left 함수에서 출력!
			</div>
		)
	}
	function Right(){
		return (
			<div>
				right 함수에서 출력 !
			</div>
		)
	}
	function WelcomeDialog(){
		return (
			<FancyBorder color="blue" left={<Left />} right={<Right />}>
				<h1>
					WelcomeDialog 함수에서 FancyBorder 함수를 호출하여  자식태그를 전달 할 수 있다!
				</h1>
				<p className="Dialog-message">
					대신 FancyBorder 함수에는 {'{props.children}'} 구문을 추가해야 함
				</p>
			</FancyBorder>
		)
	}

	/**
	 * 11. 합성 vs 상속 END
	 */
	
	/**
	 * 12. React로 생각하기 START
	 */
 
	function Chapter12(){
		return (
			<div>
				<h1>12. React로 생각하기</h1>
				<ul>
					<strong>1단계: UI를 컴포넌트 계층 구조로 나누기</strong>
					<li>
						react는 보통 JSON 타입으로 디자인을 목업 한다(목업 : 디자인의 검토를 위해 실물과 비슷하게 제작하는 실물 모형).
					</li>
					<li>
						단일 책임 원칙 - 하나의 컴포넌트는 한 가지 일을 하는게 이상적이라는 원칙이다. 하나의 컴포넌트가 커지면 작은 하위 컴포넌트를 분리해야 한다는 의미인거 같다.
					</li>
				</ul>
				<img src='/img/chapter12_img1.png'/>
				<p>
					1.FilterableProductTable(노란색): 예시 전체를 포괄합니다.<br/>
					2.SearchBar(파란색): 모든 유저의 입력(user input) 을 받습니다.<br/>
					3.ProductTable(연두색): 유저의 입력(user input)을 기반으로 데이터 콜렉션(data collection)을 필터링 해서 보여줍니다.<br/>
					4.ProductCategoryRow(하늘색): 각 카테고리(category)의 헤더를 보여줍니다.<br/>
					5.ProductRow(빨강색): 각각의 제품(product)에 해당하는 행을 보여줍니다.<br/>
					3.ProductTable에서 데이터 컬렉션이 렌더링의 일부이며 헤더가 복잡해진다면 별도의 컴포넌트를 만들어 나누는게 더 합리적이라고 한다.
				</p>
				<br/>
				<br/>
				<strong>2단계: React로 정적인 버전 만들기</strong>
				<p>
					정적으로 만드는 것은 생각을 적게 타이핑은 많이 필요로 하니깐 함 노가다 뛰어보라는거 같다.<br/>
					그러면 나중에 반대로 동적으로 만드는 것을 필요로 할 것 이니(물론 무조건은 아니다. 간단한 홈페이지는 오히려 정적으로 간단히 만드는게 더 효율적일 것 이다.)<br/>
					근데 정적으로 만들 때에는 state를 사용하지 말라고 한다.<br/>
					이유는 state는 오직 상호작용을 위해 동적으로 만들기 위해서 이니<br/>
					<br/>
					앱을 만들 때 하양식 또는 상향식이 있다고 한다.<br/>
					하양식은 5.ProductRow 만드는 것을 의미하고 상향식은 반대로 1.FilterableProductTable 부터 만드는 것을 의미한다.<br/>
					리액트는 단방향 바인딩을 사용한다.<br/>
				</p>
			</div>
		)
	}



	/**
	 * 12. React로 생각하기 END
	 */

	return (
		<div className="App1">
			<header className="App-header">
				<h1>react Hello2 {add_contents}</h1>
			</header>
			<button onClick={clickEvent}>
				버튼
			</button>
			<Toggle />
			<LoginControl />
			<Page />
			<NumberList numbers={number} />
			<Blog posts={posts}/>
			<NameForm />
			<Calculator />
			<WelcomeDialog />
			<Chapter12 />
		</div>
	);
}

export default App;
