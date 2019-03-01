import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './index.m.scss';

interface IError {
  email?: string;
}

const Login: React.FunctionComponent = props => {
  return (
    <div>
      <div className={`${styles.login}`}>
        <div className={styles.header}>
          <a className={styles.logo}>
            Logo
            {/*  TODO: img */}
          </a>
        </div>
        <div className={styles.loginCard}>
          <div className={styles.loginContent}>
            <h1 className={styles.title}>Log In</h1>
            <div className={styles.inner}>sf</div>
          </div>
          <div className={styles.loginFooter}>
            <a href="https://github.com/Avancee" target="_blank">
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
