import logo from '../../assets/reactLogo.svg';
import { Button } from '../../UI/Button';
import { useNavigate } from 'react-router-dom';
import cls from './Header.module.css';

export function Header() {
	const navigate = useNavigate();
	return (
		<header className={cls.header}>
			<p onClick={() => navigate('/')}>
				<img src={logo} alt='React logo' />
				<span>ReactQuiz</span>
			</p>

			<div className={cls.headerControlers}>
				<Button isActive onClick={() => navigate('/addquestion')}>
					Add
				</Button>
				<Button isDisabled onClick={() => navigate('/login')}>
					Login
				</Button>
			</div>
		</header>
	);
}
