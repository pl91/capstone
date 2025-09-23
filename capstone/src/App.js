import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ReservationPage from './ReservationPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<ReservationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

