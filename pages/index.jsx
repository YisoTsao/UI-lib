import React from 'react';
import { Step } from '../components';

const Home = () => {
  const fakeStep = [{ status: true }, { status: true }, { status: false }, { status: false }];

  return (
    <div>
      <main>main</main>

      <Step className="p-8" stepList={fakeStep} />

      <footer>footer</footer>
    </div>
  );
};

export default Home;
