import React, { FC } from 'react';
import styles from './Home.module.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    Routing on Home Works !
  </div>
);

export default Home;
