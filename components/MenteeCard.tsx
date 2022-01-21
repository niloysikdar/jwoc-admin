import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Switch from '@mui/material/Switch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { MenteeType } from '../types/MenteeType';

const MenteeCard = ({ menteeData }: { menteeData: MenteeType }) => {
  return (
    <Card elevation={5} className='max-w-sm px-4 py-3'>
      <Typography variant='h6' fontWeight={600}>
        {menteeData.name}
      </Typography>
      <Typography margin='4px 0'>{menteeData.email}</Typography>
      <Typography variant='subtitle2'>
        Ph: {menteeData.phone}, Wp: {menteeData.whatsapp}
      </Typography>
      <Typography marginTop='10px'>{menteeData.college}</Typography>
      <Typography margin='3px 0'>Current Year: {menteeData.year}</Typography>
      <Stack spacing={5} direction='row' className='mt-4 mb-3'>
        <a
          href={menteeData.github}
          target='_blank'
          rel='noreferrer'
          className='flex items-start gap-x-1'
        >
          <GitHubIcon fontSize='small' className='mt-[1px]' /> GitHub
        </a>

        <a
          href={menteeData.linkedIn}
          target='_blank'
          rel='noreferrer'
          className='flex items-start gap-x-1'
        >
          <LinkedInIcon fontSize='small' className='mt-[1px]' /> LinkedIn
        </a>
      </Stack>

      <Stack direction='row' className='items-center mb-4 gap-2'>
        <Typography fontWeight={600}>First Time:</Typography>
        <Switch checked={menteeData.isFirstTime} />
      </Stack>

      <Accordion className='my-4'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='answers'>
          <Typography>Questions {'&'} Answers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight={600} marginBottom='5px'>
            {menteeData.question1}
          </Typography>
          <Typography variant='body2'>{menteeData.answer1}</Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export { MenteeCard };
