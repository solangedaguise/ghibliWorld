import React, { FC } from 'react';
import styles from './Home.module.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    Welcome on Ghibli ! 
  </div>
);

export default Home;
