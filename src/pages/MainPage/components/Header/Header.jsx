import React from 'react';

import { Navigation } from './components';
import { Container } from '../Container';

import styles from './styles.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<Navigation />
			</Container>
		</header>
	);
};
