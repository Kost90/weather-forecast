import Header from "./components/header/Header";
import Container from "./layout/containers/Container";
import WeatherDataPriview from "./components/weatherDataPreview/WeatherDataPriview";

function App() {
  return (
    <Container>
      <Header/>
      <WeatherDataPriview/>
    </Container>
  );
}

export default App;
