import { useState, useEffect, ChangeEvent } from 'react';
import Fuse from 'fuse.js';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { Layout, MenteeCard } from '../components';
import { MenteeType } from '../types/MenteeType';

const Mentee = () => {
  const [menteeData, setMenteeData] = useState<MenteeType[]>();
  const [isLoading, setIsloading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [searchedData, setSearchedData] = useState<MenteeType[]>();

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

  const handleSearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchText(e.target.value);
    const fuse = new Fuse(menteeData as MenteeType[], {
      keys: ['name', 'email', 'college'],
      threshold: 0.1,
    });
    const result = fuse.search(e.target.value).map((item) => item.item);
    setSearchedData(result);
  };

  return (
    <Layout pageName='Mentee'>
      <Typography variant='h5'>
        All Mentees ({(searchText ? searchedData?.length : menteeData?.length) || 0})
      </Typography>
      <Box className='my-6 lg:w-6/12'>
        <TextField
          label='Search here'
          placeholder='name, email, college'
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
          allData={searchText ? (searchedData as MenteeType[]) : (menteeData as MenteeType[])}
        />
      )}
    </Layout>
  );
};

const CardArea = ({ allData }: { allData: MenteeType[] }) => {
  return (
    <Box className='flex flex-wrap gap-6'>
      {allData?.map((data) => (
        <MenteeCard key={data._id} menteeData={data} />
      ))}
    </Box>
  );
};

export default Mentee;
