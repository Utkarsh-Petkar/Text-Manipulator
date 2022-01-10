import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
function App() {
  return (
    <>
      <Navbar title="TextManipulator" aboutText="About Us" />
      <div className="container my3">
        <TextForm heading= "Enter your Text Below"/>
      </div>
    </>
  );
}

export default App;
