import { Badge } from '../../UI/Badge';
import { Button } from '../../UI/Button';
import cls from './Card.module.css';

export const Card = () => {
	return (
		<div className={cls.card}>
			<div className={cls.cardLabels}>
				<Badge level={2} completed>
					level: 1
				</Badge>
				<Badge level={1} completed={false}>
					completed
				</Badge>
			</div>

			<h5 className={cls.cardTitle}>some question</h5>

			<div className={cls.cardAnswers}>
				<label>Short answer: </label>
				<p className={cls.cardAnswer}>
					lorem sjafjslfj sjfj asfsjjgaj fasfjljg safjg sfja sagwo
					sfagj
				</p>
			</div>

			<Button onClick={()=>{}}>View</Button>
		</div>
	);
};
