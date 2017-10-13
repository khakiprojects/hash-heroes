import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Rect, Stage, Group } from 'react-konva';
import md5 from 'md5';

import ScaledRect from './ScaledRect';
import hero1 from './data/hero1';
import hero2 from './data/hero2';
import hero3 from './data/hero3';
import hero4 from './data/hero4';
import colors from './data/colors';

const SIDE_LENGTH = 16;
const NUMBER_BASE = 16; // hex
const HERO_STEP_SIZE = 4;

export default class HashHero extends React.PureComponent {
    draw = (characterObj, colorSet) => {
        let allRects= [];
        let keys = Object.keys(characterObj);

        keys.forEach((key) => {
            let shapes = characterObj[key];
            shapes.forEach((shapeObj) => {
                allRects.push(<ScaledRect
                    scalingFactor={this.props.scalingFactor}
                    x={shapeObj.x}
                    y={shapeObj.y}
                    height={shapeObj.height}
                    width={shapeObj.width}
                    fill={colorSet[key]} />);
            })
        });
        return allRects;
    }

    getCharacter = (hex) => {
        const num = Number.parseInt(hex, NUMBER_BASE);
        let heroOptions = [hero1, hero2, hero3, hero4];
        return heroOptions[Math.floor(num / HERO_STEP_SIZE)]
    }

    getColors = (seed) => {
        let charColors = {};
        let keys = Object.keys(hero1);

        keys.forEach((key, i) => {
            let num = Number.parseInt(seed[seed.length - i - 2], NUMBER_BASE);
            charColors[key] = colors[key][num];
        });
        return charColors;
    }

    /**
     * From https://github.com/ethereum/go-ethereum/blob/aa9fff3e68b1def0a9a22009c233150bf9ba481f/jsre/ethereum_js.go
     * Checks if the given string is an address
     *
     * @method isAddress
     * @param {String} address the given HEX adress
     * @return {Boolean}
    */
    isAddress = (seed) => {
        if (!/^(0x)?[0-9a-f]{40}$/i.test(seed)) {
            // check if it has the basic requirements of an address
            return false;
        }
        return true;
    };

    render() {
        const { seed, scalingFactor } = this.props;
        if (!this.isAddress(seed)) {
            return null;
        }

        // todo: potential performance issue with this in render. maybe set in state?
        const hashedSeed = md5(seed);
        const firstChar = hashedSeed[hashedSeed.length - 1];
        let charColors = this.getColors(hashedSeed);
        const allRects = this.draw(this.getCharacter(firstChar), charColors);

        return (
            <div>
                <Stage width={SIDE_LENGTH*scalingFactor} height={SIDE_LENGTH*scalingFactor}>
                    <Layer>
                        {allRects}
                    </Layer>
                </Stage>
            </div>

        );
    }
}

HashHero.propTypes = {
    seed: PropTypes.string.isRequired,
};

HashHero.defaultProps = {
    scalingFactor: 5,
};
