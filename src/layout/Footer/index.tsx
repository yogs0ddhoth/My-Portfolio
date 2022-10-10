import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ({ direction }: { direction?: boolean }) {
  const links = [
    { href: 'mailto:blin7.webdev@gmail.com', Icon: EmailIcon },
    { href: 'https://github.com/yogs0ddhoth', Icon: GitHubIcon },
    // { href: "https://stackoverflow.com/users/17608484/blin", icon: faStackOverflow },
    {
      href: 'https://www.linkedin.com/in/ben-lin-b70a79227/',
      Icon: LinkedInIcon,
    },
  ];

  return direction === true ? (
    // <div className='
    //     theme-2
    //     w-full pt-3
    //     fixed bottom-0 left-0
    //     flex flex-row justify-center items-center
    //   '
    // >
    <Stack
      // className='pb-6'
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {links.map((link) => (
        <IconButton LinkComponent="a" href={link.href}>
          <link.Icon className=" drop-shadow-icon" />
        </IconButton>
      ))}
    </Stack>
  ) : (
    // <Typography variant='caption'
    //   className='
    //    text-stone-50 drop-shadow-icon
    //     col-span-12
    //     absolute bottom-0
    //   '
    // >
    //   image courtesy of <a
    //     className='underline hover:cursor-pointer' href='https://unsplash.com/@marekpiwnicki'
    //   >Marek Piwnicki</a>
    // </Typography>

    // </div>
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      // spacing={0}
    >
      {links.map((link) => (
        <IconButton href={link.href} LinkComponent="a">
          <link.Icon className="drop-shadow-icon" />
        </IconButton>
      ))}
    </Stack>
  );
}
