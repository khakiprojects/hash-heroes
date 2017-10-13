import React from 'react';

import HashHero from '../src';

const SCALING_FACTOR = 8;
const SEED = '0x0123456789abcdef0123456789abcdef01234567';

class HeroInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seed:  this.props.seed || SEED,
    };
  }

  onChange = (e) => this.setState({ seed: e.target.value });

  render() {
    const { seed } = this.state;

    return (
      <div className="hero-input">
        <input
          type="text"
          onChange={this.onChange}
          value={seed}
        />
        <div className="hash-hero-wrapper">
          <HashHero seed={seed} scalingFactor={SCALING_FACTOR} />
        </div>
      </div>
    )
  }
}

export default HeroInput;
