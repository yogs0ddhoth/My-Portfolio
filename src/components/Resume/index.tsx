import * as React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ResumeData } from '../../assets/resume';

import { SxProps, Theme, TypographyProps } from '@mui/material';

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
  sx?: SxProps<Theme>;
}
const TabPanel = ({ children, value, index, sx, ...other }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
          ...sx,
        }}
      >
        {children}
      </Box>
    )}
  </div>
);

interface PanelListProps {
  list: string[];
  listSx?: SxProps<Theme>;
  listItemSx?: SxProps<Theme>;
  ListItemTextSx?: SxProps<Theme>;
  typographyProps?: TypographyProps<
    'span',
    {
      component?: 'span' | undefined;
    }
  >;
}
const PanelList = ({
  list,
  listSx,
  listItemSx,
  ListItemTextSx,
  typographyProps,
}: PanelListProps) => (
  <List sx={listSx}>
    {list.map((element, index) => {
      return (
        <ListItem sx={listItemSx}>
          <ListItemText
            primaryTypographyProps={typographyProps}
            sx={{
              textDecoration: index === 0 ? 'underline' : undefined,
              ...ListItemTextSx,
            }}
          >
            {element}
          </ListItemText>
        </ListItem>
      );
    })}
  </List>
);

interface SkillListProps {
  value: number;
  index: number;
  category: { [index: string]: string[] };
  matchDownXs?: boolean;
  matchDownSm?: boolean;
  sx?: SxProps<Theme>;
}
const SkillPanel = ({
  value,
  index,
  category,
  matchDownXs,
  matchDownSm,
  sx,
}: SkillListProps) => (
  <TabPanel value={value} index={index} sx={{ pl: 1, pr: 0, ...sx }}>
    {Object.keys(category).map((key) => {
      const skills = // index 0 will be "Languages"
        (index !== 0 && matchDownSm) || matchDownXs
          ? [`[ "${category[key].join('", "')}" ]`]
          : category[key];
      return (
        <PanelList
          list={[key, ...skills]}
          listItemSx={{ py: 0, flexWrap: matchDownXs ? 'nowrap' : undefined }}
          typographyProps={{ variant: 'body2' }}
        />
      );
    })}
  </TabPanel>
);

interface ResumeProps {
  matchDownXs: boolean;
  matchDownSm: boolean;
  matchDownMd: boolean;
  resume: ResumeData;
}
export default function Resume({
  matchDownMd,
  matchDownSm,
  matchDownXs,
  resume,
}: ResumeProps) {
  const [value, setValue] = React.useState(0);
  const matchDownLSm = useMediaQuery(useTheme().breakpoints.down(770));
  const categories = Object.keys(resume);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: matchDownLSm ? 'column' : 'row',
        // justifyContent: 'center',
      }}
    >
      <Tabs
        orientation={matchDownLSm ? 'horizontal' : 'vertical'}
        variant="scrollable"
        value={value}
        onChange={(_, newValue: number) => setValue(newValue)}
        scrollButtons="auto"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
        }}
        centered
      >
        {categories.map((category, index) => (
          <Tab sx={{ p: 2 }} label={category} {...a11yProps(index)} />
        ))}
      </Tabs>
      {categories.map((category, index) => (
        <SkillPanel
          value={value}
          index={index}
          category={resume[category]}
          matchDownXs={matchDownXs}
          matchDownSm={matchDownSm}
          sx={
            category === 'Languages' && !matchDownXs
              ? { justifyContent: 'start' }
              : 
              matchDownSm
                ? {
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                  }
                : undefined
          }
        />
      ))}
    </Box>
  );
}
