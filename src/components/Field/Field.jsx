import { useDispatch, useSelector } from 'react-redux';
import { restartGame, setField, gameResult, actionCurrentPlayer } from '../../actions';
import {
	selectCurrentPlayer,
	selectField,
	selectIsDraw,
	selectIsGameEnded,
	SELECT_WIN_PATTERNS,
} from '../../selectors';
import styles from './Field.module.css';

export const Field = () => {
	const dispatch = useDispatch();

	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);
	const WIN_PATTERNS = useSelector(SELECT_WIN_PATTERNS);

	const checkWinner = (field) => {
		let winnerCombination = WIN_PATTERNS;

		for (let combination of winnerCombination) {
			let [a, b, c] = combination;
			if (field[a] && field[a] === field[b] && field[b] === field[c]) {
				return field[a];
			}
		}

		if (field.every((item) => item !== '')) {
			dispatch(gameResult(true, true));
		}

		return null;
	};

	const hundleMove = (index) => {
		if (!isGameEnded && field[index] === '') {
			const newField = [...field];
			newField[index] = currentPlayer;

			dispatch(setField(newField));

			const winner = checkWinner(newField);

			if (winner) {
				dispatch(gameResult(false, true));
				dispatch(actionCurrentPlayer(winner));
			} else {
				dispatch(actionCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
			}
		}
	};

	const resetGame = () => {
		dispatch(restartGame);
	};

	return (
		<div className={styles.rootContainer}>
			{isDraw === true || isGameEnded === true ? (
				<button className={styles.resetBtn} onClick={resetGame}>
					Начать сначала
				</button>
			) : (
				''
			)}

			<div className={styles.container}>
				{field.map((item, index) => (
					<div
						key={index}
						className={styles.containerCell}
						onClick={() => hundleMove(index)}
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};
