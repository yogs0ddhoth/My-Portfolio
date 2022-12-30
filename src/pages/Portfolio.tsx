import * as react from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { Projects, ProjectData } from '../assets/project-data';
import Page from '../components/Page';

interface LinkTooltipProps {
  href?: string;
  placement?:
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  title: string;
  children: react.ReactElement;
}

const LinkTooltip = ({
  href,
  placement,
  title,
  children,
}: LinkTooltipProps) => (
  <Tooltip
    placement={placement ? placement : 'bottom'}
    title={
      href ? (
        <Link href={href} color="inherit">
          {title}
        </Link>
      ) : (
        <Typography variant="inherit">{title}</Typography>
      )
    }
  >
    {children}
  </Tooltip>
);
const Project = ({
  name,
  description,
  technologies,
  repoLink,
  deployedApp,
  img,
}: ProjectData) => {
  return (
    <ImageListItem key={name}>
      <img
        alt={name}
        src={`${img}?w=248&fit=crop&auto=format`}
        srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
      />

      <ImageListItemBar
        title={
          <LinkTooltip
            href={deployedApp}
            title={deployedApp ? 'Deployed App' : 'Coming Soon!'}
            placement="bottom-start"
          >
            <Link variant="h5" color="inherit" href={deployedApp}>
              {name}
            </Link>
          </LinkTooltip>
        }
        subtitle={
          <>
            <Typography variant="subtitle1">{description}</Typography>
            <Typography variant="subtitle2" className="whitespace-normal">
              {technologies}
            </Typography>
          </>
        }
        actionIcon={
          <LinkTooltip
            href={repoLink}
            title="Link to Repository"
            placement="bottom"
          >
            <IconButton href={repoLink}>
              <OpenInNewIcon />
            </IconButton>
          </LinkTooltip>
        }
        actionPosition="right"
      />
    </ImageListItem>
  );
};

export default function Portfolio({
  matchDownSm,
  matchUpLg,
}: {
  matchDownSm: boolean;
  matchUpLg: boolean;
}) {
  return (
    <ImageList
      className="pb-4"
      variant="masonry"
      cols={matchDownSm ? 1 : matchUpLg ? 3 : 2}
      gap={8}
    >
      <ImageListItem key="Subheader" className="w-full">
        <Page
          className="
            opacity-95 drop-shadow-icon
            flex flex-row justify-center
            "
        >
          <Typography variant="h2">My Work</Typography>
        </Page>
      </ImageListItem>

      {Projects.map((project) => (
        <Project {...project} />
      ))}
    </ImageList>
  );
}
