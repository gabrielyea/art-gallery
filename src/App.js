import { AnimatePresence } from 'framer-motion';
import Home from './pages/home_page/Home';

function App() {
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial>
        <Home />
      </AnimatePresence>
    </div>

  );
}

export default App;
