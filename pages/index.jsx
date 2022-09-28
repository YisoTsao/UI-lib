import React from 'react';
import { BaseProgress, Step } from '../components';

const Home = () => {
  const fakeStep = [{ status: true }, { status: true }, { status: false }, { status: false }];

  return (
    <div>
      <main>main</main>

      <Step className="p-8" stepList={fakeStep} />
      <BaseProgress type="step" value="28" max="100" size="large" />

      <footer>footer</footer>
    </div>
  );
};

export default Home;
