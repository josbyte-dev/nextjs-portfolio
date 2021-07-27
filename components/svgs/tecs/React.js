import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const React = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<svg
			className='theme'
			width='85'
			height='85'
			viewBox='0 0 85 80'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				className={darkMode ? 'theme-dark' : 'theme-light'}
				d='M42.5 31.9826C38.3217 31.9826 34.9191 35.582 34.9191 40.0019C34.9191 44.4218 38.3217 48.0212 42.5 48.0212C46.6783 48.0212 50.0809 44.4218 50.0809 40.0019C50.0809 35.582 46.6783 31.9826 42.5 31.9826ZM21.2766 55.9393L19.6031 55.501C7.15062 52.1629 0 46.5151 0 39.9879C0 33.4606 7.15328 27.8128 19.6031 24.4747L21.2766 24.0364L21.7467 25.7925C23.01 30.3923 24.625 34.8757 26.5758 39.1983L26.9344 39.9879L26.5758 40.7915C24.6209 45.1122 23.0057 49.596 21.7467 54.1972L21.2766 55.9393ZM18.8302 28.5715C9.36594 31.3813 3.55672 35.6972 3.55672 39.9879C3.55672 44.2785 9.36859 48.5775 18.8302 51.4043C19.99 47.506 21.3902 43.6923 23.0217 39.9879C21.3879 36.2844 19.9877 32.4706 18.8302 28.5715ZM63.7234 55.9393L63.2533 54.1832C61.9922 49.5872 60.3772 45.1083 58.4242 40.7915L58.0656 39.9879L58.4242 39.1842C60.3791 34.8635 61.9943 30.3797 63.2533 25.7785L63.7234 24.0364L65.3969 24.4747C77.8494 27.8128 85 33.4606 85 39.9879C85 46.5151 77.8467 52.1629 65.3969 55.501L63.7234 55.9393ZM61.9783 39.9879C63.6152 43.6899 65.0155 47.5039 66.1698 51.4043C75.6473 48.5804 81.4433 44.2785 81.4433 39.9879C81.4433 35.6972 75.6314 31.3982 66.1698 28.5715C65.0073 32.4687 63.6071 36.2822 61.9783 39.9879ZM18.8009 28.5574L18.3308 26.8013C14.8298 13.7468 15.895 4.38156 21.25 1.11652C26.5067 -2.0895 34.9323 1.70097 43.7723 11.3022L44.9756 12.606L43.7723 13.9097C40.6331 17.3648 37.7646 21.0841 35.1953 25.0311L34.7119 25.7476L33.8805 25.8206C29.3608 26.198 24.8774 26.962 20.4744 28.105L18.8009 28.5574ZM25.5239 3.72406C24.5703 3.72406 23.7256 3.92918 23.0191 4.36751C19.5048 6.51985 18.8833 13.9828 21.3031 24.0504C25.0788 23.157 28.9058 22.5263 32.7595 22.1622C34.9782 18.8196 37.4042 15.6365 40.0217 12.6341C34.502 6.94133 29.2719 3.72125 25.5239 3.72125V3.72406ZM59.4894 79.9972C59.4761 79.9972 59.4761 79.9972 59.4894 79.9972C54.4398 79.9972 47.9506 75.9875 41.2277 68.6707L40.0244 67.367L41.2277 66.0632C44.3669 62.6081 47.2354 58.8888 49.8047 54.9418L50.2748 54.2253L51.1063 54.1382C55.6317 53.7735 60.1205 53.0094 64.5256 51.8538L66.1991 51.4155L66.6692 53.1716C70.1702 66.2262 69.105 75.5773 63.75 78.8395C62.4553 79.6267 60.9824 80.0259 59.4894 79.9944V79.9972ZM44.9756 67.3389C50.4953 73.0316 55.7255 76.2517 59.4734 76.2517H59.4867C60.427 76.2517 61.2717 76.0325 61.9783 75.6082C65.4925 73.4559 66.13 65.9929 63.6942 55.9253C59.9192 56.8196 56.0919 57.4458 52.2378 57.7994C50.0193 61.1466 47.5932 64.3344 44.9756 67.3417V67.3389ZM66.1991 28.5574L64.5256 28.105C60.1173 26.9658 55.6299 26.2019 51.1063 25.8206L50.2748 25.7476L49.8047 25.0311C47.2354 21.0841 44.3669 17.3648 41.2277 13.9097L40.0244 12.606L41.2277 11.3022C50.0677 1.70097 58.4933 -2.0895 63.75 1.11652C69.105 4.37875 70.1702 13.7468 66.6692 26.8013L66.1991 28.5574ZM52.2405 22.1622C56.0943 22.5253 59.9213 23.156 63.6969 24.0504C66.1327 13.9828 65.4952 6.51704 61.9809 4.36751C58.48 2.23203 51.8952 5.50831 44.9783 12.6369C47.5887 15.6458 50.0144 18.8284 52.2405 22.165V22.1622ZM25.5239 79.9972C24.0284 80.0253 22.5489 79.6319 21.25 78.8423C15.895 75.5801 14.8298 66.2262 18.3308 53.1744L18.8009 51.4183L20.4744 51.8566C24.5703 52.9553 29.0806 53.7139 33.8805 54.141L34.7119 54.2281L35.182 54.9446C37.7513 58.8916 40.6198 62.611 43.7591 66.066L44.9623 67.3698L43.7591 68.6735C37.0494 75.9904 30.5602 80 25.5239 80V79.9972ZM21.3058 55.9253C18.87 65.9929 19.5075 73.4587 23.0217 75.6082C26.5227 77.7156 33.0942 74.4674 40.0244 67.3389C37.4068 64.3315 34.9807 61.1438 32.7622 57.7966C28.908 57.444 25.0806 56.8179 21.3058 55.9225V55.9253ZM42.5 58.2799C39.5808 58.2799 36.5925 58.1479 33.5909 57.8837L32.7595 57.8107L32.2761 57.0801C30.5806 54.5032 28.9881 51.8521 27.5028 49.1339C26.0144 46.4156 24.6346 43.6323 23.367 40.7915L23.0084 39.9879L23.367 39.1842C25.9065 33.5038 28.8864 28.0556 32.2761 22.8956L32.7595 22.165L33.5909 22.092C39.5198 21.5637 45.4802 21.5637 51.4091 22.092L52.2405 22.165L52.7239 22.8956C56.118 28.0527 59.0981 33.5013 61.633 39.1842L61.9916 39.9879L61.633 40.7915C59.1032 46.4773 56.1229 51.9263 52.7239 57.0801L52.2405 57.8107L51.4091 57.8837C48.4458 58.146 45.4736 58.2782 42.5 58.2799ZM34.7252 54.2113C39.9553 54.6356 45.0447 54.6356 50.2881 54.2113C53.2124 49.6816 55.8113 44.9261 58.063 39.9851C55.8208 35.0358 53.2169 30.2793 50.2748 25.7588C45.0994 25.3345 39.9006 25.3345 34.7252 25.7588C31.781 30.2779 29.177 35.0346 26.937 39.9851C29.1893 44.9286 31.7928 49.6843 34.7252 54.2113Z'
				fill='#505050'
			/>
		</svg>
	);
};

export default React;
