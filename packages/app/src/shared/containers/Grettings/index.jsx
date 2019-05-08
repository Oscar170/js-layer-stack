import React from 'react';
import Helmet from 'react-helmet';
import { Grettings as GrettingsPage } from '@my-awesome-project/pages';

const Grettings = () => {
  return (
    <>
      <Helmet>
        <title>My awesome project App - Hello</title>
      </Helmet>
      <GrettingsPage />
    </>
  );
};

export default Grettings;
