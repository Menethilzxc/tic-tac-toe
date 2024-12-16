import { Information, Field } from './components';
import styles from './Game.module.css';

function Game() {
	return (
		<div className={styles.gameContainer}>
			<Information />
			<Field />
		</div>
	);
}

export default Game;
