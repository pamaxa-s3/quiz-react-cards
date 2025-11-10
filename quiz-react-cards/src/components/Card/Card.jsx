import { useNavigate } from 'react-router-dom';
import { Badge } from '../../UI/Badge';
import { Button } from '../../UI/Button';
import cls from './Card.module.css';

export const Card = ({
  id,
	title,
	answer,
	description,
	links,
	level,
	completed,
	editDate
}) => {
	const navigate = useNavigate();

	return (
		<div className={cls.card}>
			<div className={cls.cardLabels}>
				<Badge level={level}>level: {level}</Badge>
				<Badge completed={completed}>
					{completed ? 'Completd' : 'Not completed'}
				</Badge>
			</div>

			<h5 className={cls.cardTitle}>{title}</h5>

			<div className={cls.cardAnswers}>
				<label>Short answer: </label>
				<p className={cls.cardAnswer}>{answer}</p>
			</div>

			<Button onClick={() => navigate(`/question/${id}`)}>View</Button>
		</div>
	);
};
