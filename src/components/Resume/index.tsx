import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
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

export default function Resume({ matchDownSm }: { matchDownSm: boolean }) {
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
        <Tab label="Languages" {...a11yProps(0)} />
        <Tab label="Frameworks" {...a11yProps(1)} />
        <Tab label="Tools" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <PanelList
          list={['HTML', 'CSS', 'TypeScript/JS', 'Python', 'SQL', 'GraphQL']}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PanelList
          list={[
            'Flask',
            'Express.js',
            'React',
            'Angular',
            'Tailwind CSS',
            'Next.js',
          ]}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PanelList
          list={['Node.js', 'MongoDB', 'MySQL', 'Webpack', 'Github', 'Heroku']}
        />
      </TabPanel>
    </Box>
  );
}
