import { Routes, Route } from 'react-router-dom';

import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Layout from './layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function App() {
  const matchDownXs = useMediaQuery(useTheme().breakpoints.down('xs'));
  const matchDownSm = useMediaQuery(useTheme().breakpoints.down('sm'));
  const matchDownMd = useMediaQuery(useTheme().breakpoints.down('md'));
  const matchUpLg = useMediaQuery(useTheme().breakpoints.up('lg'));

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/portfolio"
          element={
            <Portfolio matchDownSm={matchDownSm} matchUpLg={matchUpLg} />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/resume"
          element={
            <Resume matchDownXs={matchDownXs} matchDownMd={matchDownMd} />
          }
        />
      </Routes>
    </Layout>
  );
}
