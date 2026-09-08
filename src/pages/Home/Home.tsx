import React from 'react';
import Chakra3D from '../../components/Chakra3D/Chakra3D';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.chakra3DSection}>
        <Chakra3D />
      </section>
    </main>
  );
};

export default Home;
