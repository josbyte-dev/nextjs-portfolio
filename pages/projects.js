import styles from '../styles/projectshome.module.scss';
import Footer from '../components/Footer';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import svgTriangle from '../public/Images/Particles/Polygon-6.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import Reveal from 'react-reveal/Reveal';

export default function Projects({ projects }) {
	const [mappedProjects, setMappedProjects] = useState([]);
	const [slideCuantity, setslideCuantity] = useState(1);

	useEffect(() => {
		if (projects) {
			const imgBuilder = imageUrlBuilder({
				projectId: 'mw14nmly',
				dataset: 'production',
				useCdn: true,
			});
			setMappedProjects(
				projects.map((p) => {
					return {
						...p,
						imageP: imgBuilder.image(p.imageP),
					};
				})
			);
		} else {
			setMappedProjects([]);
		}

		const handleViewSlider = () => {
			if (window.matchMedia('(min-width: 768px)').matches) {
				setslideCuantity(2);
			}
			if (window.matchMedia('(min-width: 1024px)').matches) {
				setslideCuantity(2);
			} else {
				setslideCuantity(1);
			}
		};

		const mql = window.matchMedia('(min-width: 1024px)');
		handleViewSlider();

		mql.addEventListener('change', () => {
			handleViewSlider();
		});
	}, [projects]);
	return (
		<main className={styles.projectMain}>
			<h1>Projects</h1>
			<section className={styles.projects}>
				<div className={styles.triangleContainer}>
					<Image src={svgTriangle} alt='' width={700} height={550} />
				</div>
				<div className={styles.projectsSection}>
					<div className={styles.contentProjects}>
						{mappedProjects.map((p, index) => (
							<div key={index} className={styles.cardProject}>
								<div>
									<img src={p.imageP} alt={p.title} />
								</div>
								<div className={styles.toolsContent}>
									<ul>
										{p.tools.map((tool, index) => (
											<li key={index}> {tool} </li>
										))}
									</ul>
								</div>
								<div className={styles.infoContent}>
									<h3>{p.title}</h3>
									<Link href={`project/${p.slug.current}`}>
										<button className='btn btn-sutil'>
											<a> See Project </a>
										</button>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent('*[ _type == "project"]');
	const url = `https://${process.env.PROJECT_API_KEY}.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());

	if (!result.result) {
		console.log(result.result);
		return {
			props: {
				projects: [],
			},
		};
	} else {
		return {
			props: {
				projects: result.result,
			},
		};
	}
};
