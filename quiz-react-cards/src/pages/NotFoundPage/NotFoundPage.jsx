import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
	return (
		<div className={styles.container}>
			<div className={styles.gradient}></div>

			<h1 className={styles.code}>404</h1>
			<h2 className={styles.title}>Page Not Found</h2>
			<p className={styles.text}>
				The page you’re looking for doesn’t exist or has been moved.
			</p>

			<Link to="/" className={styles.button}>
				Go Home
			</Link>
		</div>
	);
}
