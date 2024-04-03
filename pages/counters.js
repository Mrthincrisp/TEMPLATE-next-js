import React from 'react';
import Counter from '../components/Counter';

export default function CounterList() {
  const counterTitles = [{ title: '>_>' }, { title: '<_<' }, { title: '͡° ͜ʖ ͡°' }];
  return (
    <>
      {counterTitles.map((tl) => <Counter title={tl.title} />)}
    </>
  );
}
