import { useSelector } from 'react-redux';
import { selectIsDraw, selectCurrentPlayer, selectIsGameEnded } from '../../selectors';
import styles from './Information.module.css';

export const Information = () => {
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const getTitle = () => {
		if (isDraw) {
			return 'Ничья';
		}

		if (isGameEnded) {
			return `Победа: ${currentPlayer}`;
		}

		return `Ходит: ${currentPlayer}`;
	};

	return (
		<div className={styles.rootContainer}>
			<div className={styles.infoContainer}>
				<h1 className={styles.infoContainerTitle}>{getTitle()}</h1>
			</div>
		</div>
	);
};
