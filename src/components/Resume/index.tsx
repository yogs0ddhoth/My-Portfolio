import * as React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ResumeData } from '../../assets/resume';

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'row' }}>
        {children}
      </Box>
    )}
  </div>
);
const PanelList = ({ list }: { list: string[] }) => (
  <List>
    {list.map((element) => {
      return (
        <ListItem>
          <ListItemText>{element}</ListItemText>
        </ListItem>
      );
    })}
  </List>
);

export default function Resume({
  matchDownSm,
  resume: {
    languages, backend, frontend
  },
}: {
  matchDownSm: boolean;
  resume: ResumeData;
}) {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: matchDownSm ? 'column' : 'row',
      }}
    >
      <Tabs
        orientation={matchDownSm ? 'horizontal' : 'vertical'}
        variant="scrollable"
        value={value}
        onChange={(_, newValue: number) => setValue(newValue)}
        scrollButtons="auto"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
        }}
      >
        <Tab sx={{ p:2 }} label="Languages" {...a11yProps(0)} />
        <Tab sx={{ p:2 }} label="Backend" {...a11yProps(1)} />
        <Tab sx={{ p:2 }} label="Frontend" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        {
          Object.keys(languages).map(key => (
            <PanelList
              list={[key, ...languages[key]]}
            />
          ))
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {
          Object.keys(backend).map(key => (
            <PanelList
              list={[key, ...backend[key]]}
            />
          ))
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        {
          Object.keys(frontend).map(key => (
            <PanelList
              list={[key, ...frontend[key]]}
            />
          ))
        }
      </TabPanel>
    </Box>
  );
}
