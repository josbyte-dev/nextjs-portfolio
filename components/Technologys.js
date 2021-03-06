import CssIcon from '../components/svgs/tecs/Css';
import FigmaIcon from '../components/svgs/tecs/Figma';
import FirebaseIcon from './svgs/tecs/Firebase';
import GitIcon from '../components/svgs/tecs/Git';
import HtmlIcon from '../components/svgs/tecs/Html';
import JsIcon from '../components/svgs/tecs/Js';
import NextIcon from '../components/svgs/tecs/Next';
import PhpIcon from '../components/svgs/tecs/Php';
import ReactIcon from '../components/svgs/tecs/React';
import SassIcon from '../components/svgs/tecs/Sass';
import WebpackIcon from '../components/svgs/tecs/WebpackSVG';
import WordpressIcon from '../components/svgs/tecs/Wordpress';
import style from '../styles/tech.module.scss';
import svgDots from '../public/Images/Particles/Mask-Group.svg';
import svgCircle from '../public/Images/Particles/Polygon-4.svg';
import Image from 'next/dist/client/image';
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
const Technologys = () => {
	const tecsIcons = [
		JsIcon,
		ReactIcon,
		NextIcon,
		HtmlIcon,
		CssIcon,
		FigmaIcon,
		WebpackIcon,
		SassIcon,
		GitIcon,
	];

	const tecsTitle = [
		'Js',
		'ReactJS',
		'NextJS',
		'HTML',
		'CSS',
		'Figma',
		'Webpack',
		'Sass',
		'Git',
	];

	const otherTecIcons = [PhpIcon, WordpressIcon, FirebaseIcon];
	return (
		<section className={style.techSection}>
			<Fade left>
				<div className={style.dotsContainer}>
					<Image alt='' src={svgDots} width={500} height={350} />
				</div>
			</Fade>
			<Fade right>
				<div className={style.circleContainer}>
					<Image alt='' src={svgCircle} width={300} height={150} />
				</div>
			</Fade>
			<article className='container'>
				<Bounce top>
					<h2>Technologys I use </h2>
				</Bounce>
				<Reveal bottom>
					<div className={style.gridTec}>
						{tecsIcons.map((Tecs, index) => (
							<div key={index}>
								<Tecs className={style.svgTec} />
								<h3> {tecsTitle[index]} </h3>
							</div>
						))}
					</div>

					<h3> Other technologys that i use</h3>

					<div className={style.flexOther}>
						{otherTecIcons.map((TecO, index) => (
							<div key={index}>
								<TecO />
							</div>
						))}
					</div>
				</Reveal>
			</article>
		</section>
	);
};

export default Technologys;
