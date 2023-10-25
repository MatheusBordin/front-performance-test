import { NextUIProvider } from '@nextui-org/react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { SongList } from './containers/SongList';

const App = () =>(
  <NextUIProvider>
    <Container>
      <Header />
      
      <SongList />
    </Container>
  </NextUIProvider>
);

export default App;
