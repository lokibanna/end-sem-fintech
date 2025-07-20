import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import HomePage from './pages/HomePage';
import EMICalculator from './pages/EMICalculator';
import SmartBudgeting from './pages/SmartBudgeting';
import EasyTracking from './pages/EasyTracking';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="emicalculator" element={<EMICalculator />} />
            <Route path="smartbudgeting" element={<SmartBudgeting />} />
            <Route path="easytracking" element={<EasyTracking />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
