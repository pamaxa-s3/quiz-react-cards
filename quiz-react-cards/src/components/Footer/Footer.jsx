import cls from './Footer.module.css';

export function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={cls.footer}>
			React Question Card Application | {currentYear} <br />
			by Roman Strynzha
		</footer>
	);
}
