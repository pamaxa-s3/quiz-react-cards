import { useState, useEffect } from 'react';
import { API_URL } from '../../constans';
import { Card } from '../Card/';
import cls from './CardsList.module.css';

export const CardsList = () => {
	const [cards, setCards] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const  fetchData= async()=> {
		try {
			setIsLoading(true);
			const res = await fetch(`${API_URL}/react`);
			if (!cardsData.ok) throw new Error('Fetch has bad request');

			const cardsData = await res.json();
			setCards(cardsData);
			// return cardsData;
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) return <h1>Loading...</h1>;

	if (error) return <h1>{error.message}</h1>;

// 	if (cards.length > 0) {
		return (
			<ul className={cls.cardsList}>
				{cards.length &&
					cards.map(
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
// 	}
};
