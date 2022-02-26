import './App.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe.jsx';
import ImageScene from './screens/header/Background/ImageScene';
import Technologies from './screens/technologies/Technologies';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <ImageScene />
      <AboutMe />
      <Technologies />
    </div>
  );
}

export default App;
