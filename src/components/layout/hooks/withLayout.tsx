import {NextComponentType} from 'next';
import {FC} from 'react';
import Layout from '..';

// eslint-disable-next-line react/display-name
const withLayout = () => (Component: FC<unknown>): NextComponentType => props => {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default withLayout;
