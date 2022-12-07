import React from 'react';

import { LogoIcon } from '../../../../icons';

import { leftNavigationData, rightNavigationData } from './constants';

import styles from './styles.module.scss';

export const Navigation = () => {
	return (
		<nav className={styles.headerNavigation}>
			<ul>
				{leftNavigationData.map(({ title, link }) => (
					<li key={title}>
						<a href={link}>{title}</a>
					</li>
				))}
			</ul>
			<a href='#'>
				<LogoIcon />
			</a>
			<ul>
				{rightNavigationData.map(({ title, link }) => (
					<li key={title}>
						<a href={link}>{title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
