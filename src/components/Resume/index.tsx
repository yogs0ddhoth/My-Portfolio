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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
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
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}
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

export default function ({ matchDownSm }: { matchDownSm: boolean }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      // className='
      //   h-full col-span-12
      //   grid grid-cols-5 grid-rows-5
      // '
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        // height: 224
      }}
    >
      {/* <div className='pl-5 col-span-12 row-span-6'> */}
      <Tabs
        // className='col-span-5 md:col-span-1'
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
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
        <PanelList list={['HTML5', 'CSS3', 'TypeScript/JS', 'Python', 'SQL']} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PanelList
          list={[
            'Flask',
            'Express.js',
            'React',
            'Angular',
            'Tailwind CSS',
            'GraphQL',
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
