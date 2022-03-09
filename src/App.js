import './App.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe.jsx';
import ImageScene from './screens/header/Background/ImageScene';
import Technologies from './screens/technologies/Technologies';
import Poetry from './screens/poetry/Poetry';

function App() {
  return (
    <div className="App" style={{backgroundColor: 'hsl(210, 11%, 15%)'}}>
      <NavigationBar />
      <Header />
      <ImageScene />
      <AboutMe />
      <Technologies />
      <Poetry />
    </div>
  );
}

export default App;
