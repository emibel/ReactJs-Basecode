import React from 'react';

import useHome from './Home.hook';
interface Props {
  title?: string
}

const Home: React.FC<Props> = ({ title }) => {

  const { messages, someState, handleOnClick} = useHome();

  return <div>
    <h3>{title || 'Home'}</h3>
    <div>state: {someState ? 'ON' : 'OFF'}</div>

    <table>
      <tbody>
        {messages.map((item, i) => <tr key={i}><td>{item}</td></tr>)}
      </tbody>
    </table>
    <button onClick={handleOnClick}>Change State</button>
  </div>;
};

export default Home;
