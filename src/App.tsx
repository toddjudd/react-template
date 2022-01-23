import { Landing } from '@/features/landing';
import { AppProvider } from '@/providers/app';

const App = () => {
  return (
    <AppProvider>
      <Landing />
    </AppProvider>
  );
};

export default App;
