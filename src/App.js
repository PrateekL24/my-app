
import './App.css';
import Navbar from './components/Navbar';
import Formtext from './components/Formtext';

function App() {
  return (
    <>
<Navbar title="1st apps" aboutText="About 1st App"/>

<div className="container my3">
<Formtext heading="Enter the text Below"/>
</div>
    </>
    
  );
}

export default App;
