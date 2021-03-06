import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const WebpackSVG = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<svg
			width='85'
			height='85'
			viewBox='0 0 85 85'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				className={darkMode ? 'theme-dark' : 'theme-light'}
				d='M82.381 65.5171L44.1799 85V69.821L67.9828 58.0115L82.381 65.5171ZM85 63.3816V22.6217L71.0152 29.9057V56.0976L85 63.3816ZM2.61905 65.5171L40.8201 85V69.821L17.0172 58.0115L2.61905 65.5171ZM0 63.3816V22.6217L13.9848 29.9057V56.0976L0 63.3816ZM1.63691 19.9831L40.8201 0V14.6788L15.5357 27.2222L1.63691 19.9831ZM83.3631 19.9831L44.1799 0V14.6788L69.4643 27.2222L83.3631 19.9831ZM40.8201 66.3767L17.3446 54.7229V31.6519L40.8201 43.8807V66.3767ZM44.1799 66.3767L67.6554 54.7229V31.6519L44.1799 43.8807V66.3767ZM18.9286 28.9863L42.5066 17.3025L66.0847 28.9863L42.5066 41.263L18.9286 28.9863Z'
				fill='#505050'
			/>
		</svg>
	);
};

export default WebpackSVG;
