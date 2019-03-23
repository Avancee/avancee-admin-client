import * as React from 'react';

import * as styles from './index.m.css';
import {connect} from 'react-redux';
import * as avatar from '../../assets/avatar.jpeg';
import './home.css';
import { ModelConfig } from '@rematch/core';
import { Dispatch } from '../../index';

  interface IRootState  {
 count:  ModelConfig<number, number>;
}
const Home: React.FunctionComponent = () => {
  return (
    <div>
      <h1 className={styles.text}>Hello World!</h1>
      <img src={avatar} className="avatar" />

    </div>
  );
};
const mapState = (state:IRootState) => ({
count: state.count,
});

const mapDispatch = ({ count: { addBy, addByAsync }}:Dispatch) => ({
  addByOne: () => addBy(1),
  addByOneAsync: () => addByAsync(1)
});

export default connect(mapState, mapDispatch)(Home);
