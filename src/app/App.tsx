import { memo, useMemo, useState } from 'react';
import TitleScreen from './screens/TitleScreen';
import World from './components/World';
import BonusScreen from './screens/BonusScreen';

export type screen = 'title' | 'bonus';
const App = () => {
  const [screen, setScreen] = useState<screen>('bonus');

  const Screen = useMemo(() => {
    switch (screen) {
      case 'title':
        return TitleScreen;
      case 'bonus':
        return BonusScreen;
      default:
        return TitleScreen;
    }
  }, [screen]);

  return (
    <World>
      <Screen onNavigate={setScreen} />
    </World>
  );
};

export default memo(App);
