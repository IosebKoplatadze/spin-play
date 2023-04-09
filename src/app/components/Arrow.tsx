import { Graphics, useTick } from '@pixi/react';
import { Graphics as PIXIGraphics } from 'pixi.js';
import { FC, memo, useCallback, useState } from 'react';

export interface Props {
  started: boolean;
  onAngleChange?: (angle: number) => void;
}
const Arrow: FC<Props> = ({ started, onAngleChange }) => {
  const [angle, setAngle] = useState(0);

  useTick((delta) => {
    if (started) {
      setAngle((prevAngle) => {
        const newAngle = (prevAngle + delta * 2) % 360;
        onAngleChange?.(newAngle);
        return newAngle;
      });
    }
  });

  const draw = useCallback((g: PIXIGraphics) => {
    g.lineStyle(2, 0xff00ff, 1);
    g.beginFill(0xff00bb, 0.25);
    g.drawRoundedRect(-5, 0, 10, 300, 15);
    g.endFill();
  }, []);

  return <Graphics draw={draw} angle={angle} />;
};

export default memo(Arrow);
