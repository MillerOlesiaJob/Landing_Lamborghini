import React from 'react';

import { Container } from '../Container';
import { ArrowIcon } from '../../icons';

import styles from './styles.module.scss';

export const Promo = () => {
	return (
		<div className={styles.promo}>
			<Container>
				<div className={styles.promoInner}>
					<h1>LAMBORGHINI SUPER TROFEO</h1>
					<h2>
						Гранд-финал 2022
						<span>3-6 ноября </span>
					</h2>
					<p>автодром Портимао,Португалия</p>
					<ArrowIcon />
				</div>
			</Container>
		</div>
	);
};
