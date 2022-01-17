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

import { MentorType } from '../types/MentorType';

const MentorCard = ({ mentorData }: { mentorData: MentorType }) => {
  return (
    <Card elevation={5} className='max-w-sm px-4 py-3'>
      <Typography variant='h6' className='font-semibold'>
        {mentorData.name}
      </Typography>
      <Typography className='my-1'>{mentorData.email}</Typography>
      <Typography variant='subtitle2'>
        Ph: {mentorData.phone}, Wp: {mentorData.whatsapp}
      </Typography>
      <Typography className='mt-3'>{mentorData.college}</Typography>
      <Typography className='my-1'>Year: {mentorData.year}</Typography>
      <Stack spacing={5} direction='row' className='mt-4 mb-3'>
        <a
          href={mentorData.github}
          target='_blank'
          rel='noopener'
          className='flex items-start gap-x-1'
        >
          <GitHubIcon fontSize='small' className='mt-[1px]' /> GitHub
        </a>

        <a
          href={mentorData.linkedIn}
          target='_blank'
          rel='noopener'
          className='flex items-start gap-x-1'
        >
          <LinkedInIcon fontSize='small' className='mt-[1px]' /> LinkedIn
        </a>
      </Stack>

      <Stack direction='row' className='items-center mb-4 gap-2'>
        <Typography className='font-semibold'>Selected:</Typography>
        <Switch checked={mentorData.isSelected} />
      </Stack>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='project-content'>
          <Typography>Project Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction='row' spacing={2} alignItems='center' className='mb-2'>
            <Typography className='font-semibold'>{mentorData.projectName}</Typography>
            <a
              href={mentorData.projectLink}
              target='_blank'
              rel='noopener'
              className='flex items-start gap-x-1'
            >
              <GitHubIcon fontSize='medium' className='mt-[1px]' />
            </a>
          </Stack>
          <Stack direction='row' className='flex-wrap gap-1'>
            {mentorData.projectTags.map((tag, index) => (
              <Typography key={index} variant='subtitle2' className='font-semibold'>
                {index !== 0 && '|'} {tag}
              </Typography>
            ))}
          </Stack>
          <Typography variant='body2' className='mt-2'>
            {mentorData.projectDescription}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='my-4'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='answers'>
          <Typography>Questions {'&'} Answers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='font-semibold mb-1'>{mentorData.question1}</Typography>
          <Typography variant='body2'>{mentorData.answer1}</Typography>

          <Typography className='font-semibold mt-3 mb-1'>{mentorData.question2}</Typography>
          <Typography variant='body2'>{mentorData.answer2}</Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export { MentorCard };
