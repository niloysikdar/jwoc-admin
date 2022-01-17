import Typography from '@mui/material/Typography';
import { Layout } from '../components';
import { Card } from '@mui/material';
import axios from 'axios';
import { MentorType } from '../types/MentorType';

const Home = ({ data }: { data: MentorType[] }) => {
  return (
    <Layout>
      <Typography variant='h6'>Here is a very good thing</Typography>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await axios.get('https://jwoc-backend.glitch.me/mentor', {
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
