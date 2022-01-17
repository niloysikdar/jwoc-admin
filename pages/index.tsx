import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { Layout, MentorCard } from '../components';
import { MentorType } from '../types/MentorType';

import axios from 'axios';

const Home = () => {
  const [mentorData, setMentorData] = useState<MentorType[]>();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL as string}/mentor`, {
        headers: {
          username: process.env.NEXT_PUBLIC_ADMIN_USERNAME as string,
          password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD as string,
        },
      })
      .then((res) => {
        setIsloading(false);
        setMentorData(res.data.data);
      })
      .catch((err) => {
        setIsloading(false);
        console.log(err);
      });
  }, []);

  return (
    <Layout pageName='Mentor'>
      <Typography variant='h5'>All Mentors ({mentorData?.length || 0})</Typography>
      <Box className='my-6 lg:w-6/12'>
        <TextField label='Search here' variant='outlined' fullWidth />
      </Box>
      {isLoading ? (
        <Box className='flex justify-center mt-10'>
          <CircularProgress size={50} />
        </Box>
      ) : (
        <Box className='flex flex-wrap gap-6'>
          {mentorData?.map((data) => (
            <MentorCard key={data._id} mentorData={data} />
          ))}
        </Box>
      )}
    </Layout>
  );
};

export default Home;
