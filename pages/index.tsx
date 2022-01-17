import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { Layout, MentorCard } from '../components';
import { MentorType } from '../types/MentorType';

import axios from 'axios';

const Home = ({ data }: { data: MentorType[] }) => {
  return (
    <Layout pageName='Mentor'>
      <Typography variant='h5'>All Mentors ({data?.length || 0})</Typography>
      <Box className='my-6 lg:w-6/12'>
        <TextField label='Search here' variant='outlined' fullWidth />
      </Box>
      <Box className='flex flex-wrap gap-6'>
        {data?.map((mentorData) => (
          <MentorCard key={mentorData._id} mentorData={mentorData} />
        ))}
      </Box>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.BASE_URL as string}/mentor`, {
    headers: {
      username: process.env.ADMIN_USERNAME as string,
      password: process.env.ADMIN_PASSWORD as string,
    },
  });

  return {
    props: {
      data: res.data.data,
    },
  };
};
