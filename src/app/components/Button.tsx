import { Container, Graphics, Text } from '@pixi/react';
import { TextStyle, Graphics as PIXIGraphics } from 'pixi.js';
import { FC, memo, useCallback, useMemo } from 'react';

export interface Props {
  width: number;
  height: number;
  x?: number;
  y?: number;
  text: string;
  fontSize?: number;
  onClick: () => void;
}
const Button: FC<Props> = ({
  width,
  height,
  x,
  y,
  text,
  onClick,
  fontSize,
}) => {
  const textStyles = useMemo(
    () => new TextStyle({ fill: 'yellow', fontSize, fontWeight: 'bold' }),
    []
  );

  const draw = useCallback((g: PIXIGraphics) => {
    g.lineStyle(2, 0xff00ff, 1);
    g.beginFill(0xff00bb, 0.25);
    g.drawRoundedRect(0, 0, width, height, 15);
    g.endFill();
  }, []);

  return (
    <Container
      width={width}
      height={height}
      anchor={0.5}
      x={x}
      y={y}
      interactive={true}
      click={onClick}
    >
      <Graphics draw={draw} />
      <Text
        text={text}
        anchor={0.5}
        style={textStyles}
        x={width / 2}
        y={height / 2}
      />
    </Container>
  );
};

export default memo(Button);
