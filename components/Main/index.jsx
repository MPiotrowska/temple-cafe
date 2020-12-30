import React from 'react';
import styles from '../../styles/Home.module.css';

export const Main = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
