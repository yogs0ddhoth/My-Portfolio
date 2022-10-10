import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

export default function Footer() {
  const links = [
    { href: 'mailto:blin7.webdev@gmail.com', Icon: EmailIcon },
    { href: 'https://github.com/yogs0ddhoth', Icon: GitHubIcon },
    // { href: "https://stackoverflow.com/users/17608484/blin", icon: faStackOverflow },
    {
      href: 'https://www.linkedin.com/in/ben-lin-b70a79227/',
      Icon: LinkedInIcon,
    },
  ];

  return (
    <Stack
      sx={{ position: 'fixed', bottom: '.25rem', right: '1.75rem' }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        {links.map((link) => (
          <IconButton href={link.href} LinkComponent="a">
            <link.Icon className="drop-shadow-icon" fontSize="medium" />
          </IconButton>
        ))}
      </Stack>
      <Typography variant="caption" align="center">
        image courtesy of{' '}
        <Link
          className="text-[#fff] underline hover:cursor-pointer"
          href="https://unsplash.com/@marekpiwnicki"
        >
          Marek Piwnicki
        </Link>
      </Typography>
    </Stack>
  );
}
