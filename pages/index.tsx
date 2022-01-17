import { useState, useEffect, ChangeEvent } from 'react';
import Fuse from 'fuse.js';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { Layout, MentorCard } from '../components';
import { MentorType } from '../types/MentorType';

const Home = () => {
  const [mentorData, setMentorData] = useState<MentorType[]>();
  const [isLoading, setIsloading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [searchedData, setSearchedData] = useState<MentorType[]>();

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

  const handleSearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchText(e.target.value);
    const fuse = new Fuse(mentorData as MentorType[], {
      keys: ['name', 'email', 'college', 'projectTags'],
      threshold: 0.2,
    });
    const result = fuse.search(e.target.value).map((item) => item.item);
    setSearchedData(result);
  };

  return (
    <Layout pageName='Mentor'>
      <Typography variant='h5'>All Mentors ({mentorData?.length || 0})</Typography>
      <Box className='my-6 lg:w-6/12'>
        <TextField
          label='Search here'
          placeholder='name, email, college, tags'
          variant='outlined'
          fullWidth
          value={searchText}
          onChange={handleSearch}
        />
      </Box>
      {isLoading ? (
        <Box className='flex justify-center mt-10'>
          <CircularProgress size={50} />
        </Box>
      ) : (
        <CardArea
          allData={searchText ? (searchedData as MentorType[]) : (mentorData as MentorType[])}
        />
      )}
    </Layout>
  );
};

const CardArea = ({ allData }: { allData: MentorType[] }) => {
  return (
    <Box className='flex flex-wrap gap-6'>
      {allData?.map((data) => (
        <MentorCard key={data._id} mentorData={data} />
      ))}
    </Box>
  );
};

export default Home;
