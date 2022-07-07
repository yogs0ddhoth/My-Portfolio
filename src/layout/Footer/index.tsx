import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import '../../assets/css/style.css';


export default function Footer({matchDownMd}: {matchDownMd: boolean}) {
  const linksData = [
    { href: "mailto:blin7.webdev@gmail.com", icon: solid('envelope')},
    { href: "https://github.com/yogs0ddhoth", icon: faGithub },
    { href: "https://stackoverflow.com/users/17608484/blin", icon: faStackOverflow },
    { href: "https://www.linkedin.com/in/ben-lin-b70a79227/", icon: faLinkedin }
  ];
  return (matchDownMd === true) ? (
    <div className='
        theme-2 
        w-full pt-3
        fixed bottom-0 left-0 
        flex flex-row justify-center items-center
      '
    >
      <Stack
        className='pb-6'
        direction="row" 
        justifyContent="center" alignItems="center"
        spacing={3}
      >
        {
          linksData.map(link => (
            <IconButton
              LinkComponent={'a'}
              href={link.href}
            >
              <FontAwesomeIcon className="fa-lg drop-shadow-icon" icon={link.icon} />
            </IconButton>
          ))
        }
      </Stack>
      <Typography variant='caption'
        className='
         text-stone-50 drop-shadow-icon
          col-span-12 
          absolute bottom-0
        '
      >
        image courtesy of <a 
          className='underline hover:cursor-pointer' href='https://unsplash.com/@marekpiwnicki'
        >Marek Piwnicki</a>
      </Typography>
    </div>
    ) : (
    <Stack
      direction="column"
      justifyContent="center" alignItems="center"
      spacing={2}
    >
      {
        linksData.map(link => (
          <IconButton
            LinkComponent={'a'}
            href={link.href}
          >
            <FontAwesomeIcon className="fa-lg drop-shadow-icon" icon={link.icon} />
          </IconButton>
        ))
      }
    </Stack>
  )
};