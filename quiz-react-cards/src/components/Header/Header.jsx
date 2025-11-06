import logo from '../../../public/vite.svg';
import { Button } from '../Button/';
import cls from './Header.module.css';

export function Header() {
	return (
		<header className={cls.header}>
			<p>
				<img src={logo} alt='React logo' />
				<span>ReactQuiz</span>
			</p>

			<div className={cls.headerControlers}>
				<Button isActive>Add</Button>
				<Button isDisabled>Login</Button>
			</div>
		</header>
	);
}
