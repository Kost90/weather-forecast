import Header from './components/header/Header';
import Container from './layout/containers/Container';
import WeatherDataPriview from './components/weatherDataPreview/WeatherDataPriview';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <WeatherDataPriview />
        </Container>
      </main>
    </>
  );
}

export default App;
