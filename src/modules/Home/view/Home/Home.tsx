import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';
import { StylesProps, provideStyles } from './Home.style';

function Home(props: RouteComponentProps & StylesProps) {
  const { classes } = props;
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <div className={classes.root}>Home page</div>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default provideStyles(Home);
