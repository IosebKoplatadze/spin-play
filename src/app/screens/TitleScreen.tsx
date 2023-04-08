import { Container, Text, useApp } from '@pixi/react';
import { FC, memo, useCallback, useMemo } from 'react';
import { TextStyle } from 'pixi.js';
import { IScreenProps } from './IScreenProps';
import { useResize } from '../shared/hooks/useResize';
import Button from '../components/Button';

const TitleScreen: FC<IScreenProps> = ({ onNavigate }) => {
  const { width, height } = useResize();
  const titleStyles = useMemo(
    () =>
      new TextStyle({
        fill: 0xffffff,
        fontSize: 100,
        fontStyle: 'italic',
        fontWeight: 'bold',
      }),
    []
  );

  const handleStart = useCallback(() => {
    onNavigate('bonus');
  }, [onNavigate]);

  return (
    <Container anchor={0.5} x={width / 2} y={height / 2}>
      <Text text="Spin Play" anchor={0.5} style={titleStyles} />
      <Button
        width={200}
        height={100}
        text="Start"
        fontSize={50}
        x={-100}
        y={100}
        onClick={handleStart}
      />
    </Container>
  );
};

export default memo(TitleScreen);
