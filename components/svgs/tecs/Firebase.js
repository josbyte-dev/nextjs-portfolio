import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const Firebase = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<svg
			width='60'
			height='60'
			viewBox='0 0 50 70'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				className={darkMode ? 'theme-dark' : 'theme-light'}
				d='M1.654 45.7083L8.45785 1.34249C8.68242 -0.162546 10.6841 -0.503804 11.3815 0.841542L18.7036 14.7522L1.654 45.7083ZM50 56.4754L43.5222 15.6404C43.4731 15.355 43.3478 15.0887 43.1599 14.8704C42.972 14.6521 42.7287 14.4901 42.4564 14.402C42.184 14.3138 41.893 14.3029 41.615 14.3705C41.337 14.438 41.0825 14.5814 40.8793 14.785L0 56.4733L22.6162 69.393C24.0326 70.2023 25.7644 70.2023 27.183 69.393L50 56.4754ZM31.6246 20.8467L26.3841 10.6834C26.2514 10.4282 26.0524 10.2147 25.8087 10.0657C25.565 9.9167 25.2857 9.83796 25.0011 9.83796C24.7164 9.83796 24.4372 9.9167 24.1935 10.0657C23.9497 10.2147 23.7508 10.4282 23.6181 10.6834L0.61971 52.4525L31.6246 20.8467Z'
				fill='#505050'
			/>
		</svg>
	);
};

export default Firebase;
