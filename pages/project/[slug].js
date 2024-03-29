import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/slug.module.scss';
import Footer from '../../components/Footer';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'
import Head from 'next/head';

const Project = ({
	title,
	description,
	date,
	projectType,
	image,
	link,
	repo = null,
	place,
	tools,
}) => {
	const [imageUrl, setImageUrl] = useState('');
	const router = useRouter()

	useEffect(() => {
		const imgBuilder = imageUrlBuilder({
			projectId: 'mw14nmly',
			dataset: 'production',
		});

		setImageUrl(imgBuilder.image(image));
	}, [image]);
	console.log(image);
	return (
		<>
			<Head>
				<title> {title} | Josbyte </title>
			</Head>
			<section className={styles.slugSection}>
				<div className="container">
					<button className={styles.backButton} type="button" onClick={() => router.back()}>
						<BiArrowBack /> BACK
					</button>
				</div>
				<div className={styles.imgContent}>
					{imageUrl && <img className={styles.imgSlug} src={imageUrl} alt={title} />}
				</div>
				<div className='container'>
					<div className={styles.proyectContainer}>
					
							<div className={styles.imageContent}>
								<div className={styles.imageContainerProyect}>
									{imageUrl && <img className={styles.imgSlug} src={imageUrl} alt={title} />}
								</div>
							</div>
					
						
							<div className={styles.contentDescription}>
								<h2> {title} </h2>
							</div>
					
					</div>
					<div className={styles.containerProject}>
						<p className={styles.paragraph}> {description} </p>
						<div className={styles.informationProjects}>
							<span>
								<strong> Finished: </strong>
								{new Date(date).toLocaleDateString('es-GT')}
							</span>
							<h3>
								Project type: {projectType}
							</h3>
							<h4>
								<strong> Place: </strong> {place}
							</h4>
							<div className={styles.buttons}>
								<PrimaryButton target={'_blank'} text={'See live preview!'} color={'#DE154D'} link={link} noLinkPage={true} />
								{
									!repo ?
										<div></div>
										:
										<PrimaryButton target={'_blank'} text={'See repo'} color={'#FFF'} link={repo} noLinkPage={true} />
								}
							</div>
							<h4>Tools</h4>
							<ul>{tools && tools.map((el, index) => <li key={index}> {el} </li>)}</ul>
						</div>
					</div>
				</div>
				<Footer />
			</section>
		</>
	);
};

export const getServerSideProps = async (pageContext) => {
	const pageSlug = pageContext.query.slug;

	if (!pageSlug) {
		return {
			notFound: true,
		};
	}

	const query = encodeURIComponent(
		`*[ _type == "project" && slug.current == "${pageSlug}"]`
	);
	const url = `https://${process.env.NEXT_PUBLIC_PROJECT_API_KEY}.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());
	const project = result.result[0];

	if (!project) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				description: project.description,
				date: project.date,
				title: project.title,
				image: project.imageP,
				projectType: project.projectType,
				link: project.link,
				repo: project.repo || null,
				place: project.place,
				tools: project.tools,
			},
		};
	}
};

export default Project;
