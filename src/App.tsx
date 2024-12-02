import CryptoList from './pages/cryptoList';
import CryptoDetail from './pages/cryptoDetail';
import MainLayout from './components/layouts/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE_PATHS } from './util/constants/routes';
import './App.css';
import { CurrencyProvider } from './context/CurrencyContext'; // Import CurrencyProvider

function App() {
  return (
    <div className="App">
      <CurrencyProvider>  {/* Wrap the entire app with CurrencyProvider */}
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path={ROUTE_PATHS.HOME} element={<CryptoList />} />
              <Route path={`${ROUTE_PATHS.CRYPTO_DETAIL}/:id`} element={<CryptoDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CurrencyProvider>
    </div>
  );
}

export default App;
