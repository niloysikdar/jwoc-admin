import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { Layout, MenteeCard } from '../components';
import { MenteeType } from '../types/MenteeType';

import axios from 'axios';

const Mentee = () => {
  const [menteeData, setMenteeData] = useState<MenteeType[]>();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL as string}/mentee`, {
        headers: {
          username: process.env.NEXT_PUBLIC_ADMIN_USERNAME as string,
          password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD as string,
        },
      })
      .then((res) => {
        setIsloading(false);
        setMenteeData(res.data.data);
      })
      .catch((err) => {
        setIsloading(false);
        console.log(err);
      });
  }, []);

  return (
    <Layout pageName='Mentee'>
      <Typography variant='h5'>All Mentees ({menteeData?.length || 0})</Typography>
      <Box className='my-6 lg:w-6/12'>
        <TextField label='Search here' variant='outlined' fullWidth />
      </Box>
      {isLoading ? (
        <Box className='flex justify-center mt-10'>
          <CircularProgress size={50} />
        </Box>
      ) : (
        <Box className='flex flex-wrap gap-6'>
          {menteeData?.map((data) => (
            <MenteeCard key={data._id} menteeData={data} />
          ))}
        </Box>
      )}
    </Layout>
  );
};

export default Mentee;
