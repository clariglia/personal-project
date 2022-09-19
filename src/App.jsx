import Hero from './Components/Hero/Hero';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import FormComment from './Components/Guestbook/FormComment'
import Guestbook from './Components/Guestbook/Guestbook';

function App() {
  return (
    <div className="App w-screen h-screen max-w-screen max-h-screen flex justify-center items-center flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/comment" element={<FormComment />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
