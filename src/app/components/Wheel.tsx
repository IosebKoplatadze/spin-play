import { Container, Sprite, Text, useTick } from '@pixi/react';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import wheelSlice from '../../assets/images/wheel-slice.png';
import wheelCenter from '../../assets/images/wheel-center.png';
import { TextStyle } from 'pixi.js';
import Arrow from './Arrow';
import { sound } from '@pixi/sound';
import clickSound from '../../assets/sounds/wheel-click.wav';
sound.add('click-sound', clickSound);

const VALUES = [
  [5000, 4],
  [200, 100],
  [1000, 20],
  [400, 50],
  [2000, 10],
  [200, 100],
  [2000, 10],
  [400, 50],
];

const SLICES = new Array(8)
  .fill(0)
  .map((_, i) => ({ angle: i * 45, value: VALUES[i][0] }));

export interface Props {
  started: boolean;
  onStopped?: (angle: number) => void;
  x?: number;
  y?: number;
}

const Wheel: FC<Props> = ({ started, x, y, onStopped }) => {
  const [activeSliceIndex, setActiveSliceIndex] = useState(0);
  const textStyles = useMemo(
    () => new TextStyle({ fill: 'red', fontSize: 40, fontWeight: 'bold' }),
    []
  );

  const handleAngleChange = useCallback((angle: number) => {
    let sliceIndex = SLICES.findIndex(({ angle: sliceAngle }) => {
      const sliceStart = sliceAngle - 22.5;
      const sliceEnd = sliceAngle + 22.5;
      return angle >= sliceStart && angle <= sliceEnd;
    });
    sliceIndex = Math.max(sliceIndex, 0);
    setActiveSliceIndex((prevSliceIndex) => {
      if (sliceIndex !== prevSliceIndex) {
        sound.play('click-sound');
        return sliceIndex;
      }
      return prevSliceIndex;
    });
  }, []);

  return (
    <Container x={x} y={y}>
      {SLICES.map(({ angle, value }, i) => (
        <Container anchor={{ x: 0.5, y: 1 }} angle={angle}>
          <Sprite anchor={{ x: 0.5, y: 1 }} image={wheelSlice} />
          <Text
            text={value}
            x={0}
            y={-350}
            anchor={{ x: 0.5, y: 1 }}
            style={textStyles}
          />
        </Container>
      ))}

      <Arrow
        started={started}
        onAngleChange={handleAngleChange}
        onStopped={onStopped}
      />
      <Sprite image={wheelCenter} anchor={0.5} />
    </Container>
  );
};

export default memo(Wheel);
