import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';

const Logo = () => {
	const [animate, setAnimate] = useState('App-logo-spin-rotate');
	const [speed, setSpeed] = useState(2);
	const [size, setSize] = useState(2);
	const [customClassName, seCustomClassName] = useState('');

	useEffect(() => {
		const handleClassName = () => {
			switch (animate) {
				case 'App-logo-rotate':
					seCustomClassName('rotate');
					break;
				case 'App-logo-spin-rotate':
					seCustomClassName('');
					break;
				case 'App-logo-spin':
					seCustomClassName('spin');
					break;
				default:
					seCustomClassName('');
					break;
			}
		};
		handleClassName();
	}, [animate]);

	let frameNumbers = [
		0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8,
	];

	const addSpeed = () => {
		setSpeed(speed => speed + 1);
	};
	const slowSpeed = () => {
		if (speed !== 1) {
			setSpeed(speed => speed - 1);
		}
	};

	return (
		<div className='App'>
			<header className={`App-header ${customClassName}`}>
				{frameNumbers.map(el => (
					<img
						style={{
							animation: `${animate} infinite ${el * speed}s linear`,
						}}
						key={el}
						src={logo}
						className='App-logo'
						alt='logo'
					/>
				))}
			</header>
			<div className='control-btns'>
				<button
					onClick={() => {
						setAnimate('App-logo-spin-rotate');
						// handleClassName();
					}}
				>
					SWING
				</button>
				<button
					onClick={() => {
						setAnimate('App-logo-rotate');
					}}
				>
					ROTATE
				</button>
				<button
					onClick={() => {
						setAnimate('App-logo-spin');
					}}
				>
					CIRCLE
				</button>
				<div className='speed-control'>
					<span className='speed-value'>{speed}</span>

					<button onClick={addSpeed}> Speed-Down </button>
					<button onClick={slowSpeed}>Speed-Up</button>
				</div>
			</div>
		</div>
	);
};
export default Logo;
