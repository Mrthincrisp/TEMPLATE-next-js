import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import Joke from '../components/Joke';
import getAJoke from '../api/jokeCalls';

function Jokes() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');

  const getJoke = () => {
    getAJoke().then((jokeObj) => {
      console.warn('Joke object:', jokeObj);
      setJoke(jokeObj);
      setBtnText('Get A Punchline');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >

      <Joke joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get A New Joke' ? (
        <Button type="button" onClick={getJoke}>{btnText}</Button>
      ) : (
        <Button type="button" onClick={() => setBtnText('Get A New Joke')}>{btnText}</Button>
      )}
    </div>
  );
}

export default Jokes;
