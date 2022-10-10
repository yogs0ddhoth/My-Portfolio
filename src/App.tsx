import { Routes, Route } from 'react-router-dom';

import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Layout from './layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function () {
  const matchDownXs = useMediaQuery(useTheme().breakpoints.down(420));
  const matchDownSm = useMediaQuery(useTheme().breakpoints.down(640));
  const matchDownMd = useMediaQuery(useTheme().breakpoints.down(768));
  const matchUpLg = useMediaQuery(useTheme().breakpoints.up(1024));

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/portfolio"
          element={
            <Portfolio matchDownMd={matchDownMd} matchUpLg={matchUpLg} />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/resume"
          element={
            <Resume matchDownXs={matchDownXs} matchDownSm={matchDownSm} />
          }
        />
      </Routes>
    </Layout>
  );
}
