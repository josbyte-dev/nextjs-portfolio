import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import styles from '../styles/about.module.scss';
import Image from "next/legacy/image";
import PrimaryButton from './buttons/PrimaryButton';

const AboutCard = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<section id='aboutme' className={styles.aboutSection}>
			<div className='container'>
				<div className={styles.aboutContent}>
					<div className={styles.sectionImage}>
					
							<div className={styles.imageContainer}>
								<Image width="250px" height="250px" className={styles.imageProfile} src="https://i.imgur.com/0xC1ejw.png" />
							</div>
					
					</div>
					<div className={styles.textAbout}>
						<div className={styles.aboutText}>
							<h3>About me</h3>
							<p>
								Hello! My name is Josue, i’m from Guatemala City, i’m a technology enthusiast and a lover of development and design.
								<br />
								<br />
								What are my specialties? The development and design.
								That's why I'm fascinated by frontend development, ui design and little by little getting into the UX branch
							</p>
							<PrimaryButton text={'Download CV'} color={'#FFF'} link={'https://drive.google.com/file/d/1S6w8LFpkEqOqtLhZxpfGGM1deGa55Gw6/view?usp=drive_link'} noLinkPage={true} />
						</div>
						<div className={styles.aboutImage}>
							<div className={styles.imageSecondContainer}>
								<Image width="544px" height="527px" src="https://i.imgur.com/GFIsp1k.jpg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutCard;
