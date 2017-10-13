import React from 'react';
import { Rect } from 'react-konva';

const ScaledRect = ({x, y, height, width, fill, scalingFactor=5}) => (
    <Rect
        x={x*scalingFactor}
        y={y*scalingFactor}
        height={height*scalingFactor}
        width={width*scalingFactor}
        fill={fill}
    />
);

export default ScaledRect;
