import style from '../styles/hero.module.scss';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import PrimaryButton from './buttons/PrimaryButton';

const Hero = () => {
	return (
		<>
			<div className={style.hero}>
				<div className='container'>
					<div className={style.containerHero}>
						<div className={style.heroLeft}>
							<Fade>
								<div className={style.socialButtom}>
									<a href="https://github.com/josbyte-dev">
										<i className="ri-github-fill"></i>
									</a>
									<a href="https://www.instagram.com/_josbyte/">
										<i className="ri-instagram-fill"></i>
									</a>
									<a href="https://www.behance.net/josbyte">
										<i className="ri-behance-fill"></i>
									</a>
								</div>
							</Fade>
							<div className={style.intro}>
								<Fade left cascade>
									<h3>Hi There!</h3>
								</Fade>
								<section className='section-process'>
									<div className='section-container'>
										<div className='process-steps-container container-medium with-padding'>
											<div className='process-step-container process-step-1'>
												<div className='process-step-title-container'>
													<h2 className='step-title-outprocess'>My name is <span className='process-step-title' >Josue</span></h2>
													<h2 className='step-title-outprocess-overlay'>My name is
														<span className='process-step-title-overlay'> Josue</span>
													</h2>
												</div>
											</div>
											<div className='process-step-container process-step-2'>
												<div className='process-step-title-container'>
													<h2 className='step-title-outprocess'>I’m a  <span className='process-step-title' >frontend developer</span></h2>
													<h2 className='step-title-outprocess-overlay'>I’m a
														<span className='process-step-title-overlay'> frontend developer</span>
													</h2>
												</div>
											</div>
											<div className='process-step-container process-step-3'>
												<div className='process-step-title-container'>
													<h2 className='step-title-outprocess'>& <span className='process-step-title' >digital designer.</span></h2>
													<h2 className='step-title-outprocess-overlay'>&
														<span className='process-step-title-overlay'> digital designer.</span>
													</h2>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
							<div className={style.buttonsGroup}>
								<PrimaryButton link={'/contact'} text="Contat Me" color={'#DE154D'} noLinkPage={false} />
								<PrimaryButton link={'#aboutme'} text={'About Me'} color={'#FFF'} noLinkPage={true} />
							</div>
						</div>
						<div className={style.heroRight}>
							<Fade top cascade>
								<div className={style.imageProfile} >
									<Image width="650px" height="650px" src="https://i.imgur.com/0xC1ejw.png" />
								</div>
							</Fade>
						</div>
					</div>

				</div>
			</div>

		</>
	);
};

export default Hero;
