import { Stage } from '@pixi/react';
import { memo, useMemo } from 'react';
import { useResize } from './shared/hooks/useResize';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import TitleScreen from './screens/TitleScreen';

const App = () => {
  const { width, height } = useResize();

  return (
    <Stage style={{ cursor: 'none' }} height={height} width={width}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Background width={width} />}>
            <Route index element={<TitleScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Stage>
  );
};

export default memo(App);
