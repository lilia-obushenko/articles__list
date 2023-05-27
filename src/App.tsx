import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export const App = () => {
  return (
    <>
      <Header />

      <Main />
    </>
  );
}
