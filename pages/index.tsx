import type { NextPage } from 'next';

import Typography from '@mui/material/Typography';
import { Layout } from '../components';
import { Card } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h6'>Here is a very good thing</Typography>
    </Layout>
  );
};

export default Home;
