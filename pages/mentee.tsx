import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { Layout, MenteeCard } from '../components';
import { MenteeType } from '../types/MenteeType';

import axios from 'axios';

const Mentee = ({ data }: { data: MenteeType[] }) => {
  return (
    <Layout pageName='Mentee'>
      <Typography variant='h5'>All Mentees ({data?.length || 0})</Typography>
      <Box className='my-6 lg:w-6/12'>
        <TextField label='Search here' variant='outlined' fullWidth />
      </Box>
      <Box className='flex flex-wrap gap-6'>
        {data?.map((menteeData) => (
          <MenteeCard key={menteeData._id} menteeData={menteeData} />
        ))}
      </Box>
    </Layout>
  );
};

export default Mentee;

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.BASE_URL as string}/mentee`, {
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
