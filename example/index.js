import React from 'react';
import ReactDOM from 'react-dom';

import HeroInput from './HeroInput';
import HashHeroes from '../src';
import './index.css';

const base = '0xa12341678dabedef012a456789ebcaee0d23';
const chars = '0123456789abcdef';

class Example extends React.Component {
  getRandomEnd = () => (
    chars[Math.floor(10 * Math.random(16))] +
    chars[Math.floor(10 * Math.random(16))] +
    chars[Math.floor(10 * Math.random(16))] +
    chars[Math.floor(10 * Math.random(16))]
  );

  render() {
    return (
      <div className="container">
        <h1>hash-heroes</h1>
        <HeroInput seed="0xa12341678dabedef012a456789ebcaee0d234567" />
        <h3>More Examples</h3>
        <div className="hero-grid">
        {Array(64).fill(0).map((h, i) => (
          <HashHeroes key={i} seed={base + this.getRandomEnd()} scalingFactor={3} />
        ))}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
