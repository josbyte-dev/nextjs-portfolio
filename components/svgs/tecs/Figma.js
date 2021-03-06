import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const Figma = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<svg
			width='85'
			height='85'
			viewBox='0 0 80 90'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				className={darkMode ? 'theme-dark' : 'theme-light'}
				d='M60 59.9998C71.0457 59.9998 80 53.284 80 44.9998C80 36.7155 71.0457 29.9998 60 29.9998C48.9543 29.9998 40 36.7155 40 44.9998C40 53.284 48.9543 59.9998 60 59.9998Z'
				fill='#505050'
			/>
			<path
				className={darkMode ? 'theme-dark' : 'theme-light'}
				fillRule='evenodd'
				clipRule='evenodd'
				d='M20 90C25.3043 90 30.3914 88.4197 34.1421 85.6066C37.8929 82.7936 40 78.9783 40 75V60H20C14.6957 60 9.60859 61.5804 5.85787 64.3934C2.10714 67.2065 0 71.0218 0 75C0 78.9783 2.10714 82.7936 5.85787 85.6066C9.60859 88.4197 14.6957 90 20 90V90Z'
				fill='#505050'
			/>
			<path
				className={darkMode ? 'theme-dark' : 'theme-light'}
				fillRule='evenodd'
				clipRule='evenodd'
				d='M20 59.9998H40V29.9998H20C14.6957 29.9998 9.60859 31.5801 5.85787 34.3932C2.10714 37.2062 0 41.0215 0 44.9998C0 48.978 2.10714 52.7933 5.85787 55.6064C9.60859 58.4194 14.6957 59.9998 20 59.9998V59.9998Z'
				fill='#505050'
			/>
			<path
				className={darkMode ? 'theme-dark' : 'theme-light'}
				fillRule='evenodd'
				clipRule='evenodd'
				d='M20 30H40V0H20C14.6957 0 9.60859 1.58035 5.85787 4.3934C2.10714 7.20645 0 11.0218 0 15C0 18.9783 2.10714 22.7936 5.85787 25.6066C9.60859 28.4197 14.6957 30 20 30V30Z'
				fill='#505050'
			/>
			<path
				className={darkMode ? 'theme-dark' : 'theme-light'}
				fillRule='evenodd'
				clipRule='evenodd'
				d='M60 30H40V0H60C65.3043 0 70.3914 1.58035 74.1421 4.3934C77.8929 7.20645 80 11.0218 80 15C80 18.9783 77.8929 22.7936 74.1421 25.6066C70.3914 28.4197 65.3043 30 60 30Z'
				fill='#505050'
			/>
		</svg>
	);
};

export default Figma;
