import { useState } from 'react';
import styles from '@/styles/base.module.css';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <button className={styles.hamburger} onClick={toggleModal}>
        &#9776;
      </button>
      {isModalOpen && (
        <div className={styles.modal}>
          <p>menu</p>
          <p>menu</p>
          <p>menu</p>
        </div>
      )}
    </div>
  );
}
