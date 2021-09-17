import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import store from './configureStore';
import Home from './pages/home_page/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AnimatePresence exitBeforeEnter initial>
          <Home />
        </AnimatePresence>
      </div>
    </Provider>
  );
}

export default App;
