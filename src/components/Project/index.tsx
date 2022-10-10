import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import GitHub from '@mui/icons-material/GitHub'; // alternate repo link icon
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { Project } from '../../assets/project-data';
import { ReactElement } from 'react';

interface LinkTooltipProps {
  href: string;
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
  children: ReactElement;
}

export default function ({
  name,
  description,
  technologies,
  repoLink,
  deployedApp,
  img,
}: Project) {
  const LinkTooltip = ({
    href,
    placement,
    title,
    children,
  }: LinkTooltipProps) => (
    <Tooltip
      placement={placement ? placement : 'bottom'}
      title={
        <Link href={href} color="inherit">
          {title}
        </Link>
      }
    >
      {children}
    </Tooltip>
  );
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
            title="Link to Deployed App"
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
}
