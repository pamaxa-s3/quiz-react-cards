import cls from './CardsList.module.css';
import { Card } from '../Card/';

export const CardsList = ({ cards }) => {
	return (
		<ul className={cls.cardsList}>
			{cards.map(
				({
					id,
					question,
					answer,
					description,
					resources,
					level,
					completed,
					editDate
				}) => (
					<Card
		key={id}
						id={id}
						title={question}
						answer={answer}
						description={description}
						links={resources}
						level={level}
						completed={completed}
						editDate={editDate}
					/>
				)
			)}
		</ul>
	);
};
