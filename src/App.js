import { Routes, Route } from 'react-router-dom';
import Home from './homepage/Home';
import Counter from './projects/counter/Counter';
import Accordion from './projects/accordion/Accordion';
import Tabs from './projects/tabs/Tabs';
import Tictactoe from './projects/tictaactoe/Tictactoe';
import Timer from './projects/timer/Timer';
import Pokemon from './projects/pagination/pagination';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='counter' element={<Counter />} />
        <Route path='accordion' element={<Accordion />} />
        <Route path='tabs' element={<Tabs />} />
        <Route path='tictactoe' element={<Tictactoe />} />
        <Route path='timer' element={<Timer />} />
        <Route path='pagination' element={<Pokemon />} />
    
      </Routes>
    </>
  );
}

export default App;
