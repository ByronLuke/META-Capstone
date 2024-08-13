import Header from './components/Header';
import  BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"

function App() {
  return (
    <div className="App">
    <Header></Header>
    <BookingForm></BookingForm>
    <Footer></Footer>
    </div>
  );
}

export default App;
