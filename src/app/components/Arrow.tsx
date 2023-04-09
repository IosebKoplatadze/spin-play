import { Graphics, useTick } from '@pixi/react';
import { Graphics as PIXIGraphics } from 'pixi.js';
import { FC, memo, useCallback, useState } from 'react';

export interface Props {
  started: boolean;
  onAngleChange?: (angle: number) => void;
  onStopped?: (angle: number) => void;
}
const Arrow: FC<Props> = ({ started, onAngleChange, onStopped }) => {
  const [angle, setAngle] = useState(0);
  const [speed, setSpeed] = useState(10);

  useTick((delta) => {
    if (started) {
      setAngle((prevAngle) => {
        const newAngle = (prevAngle + delta * speed) % 360;
        onAngleChange?.(newAngle);
        return newAngle;
      });

      setSpeed((prevSpeed) => {
        const speed = Math.max(prevSpeed - 0.01, 0);
        if (speed === 0) {
          onStopped?.(angle);
        }
        return speed;
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
