import Layout from '@components/layout';
import Popup from '@components/popup';
import '@styles/dist/global.css';
import type {AppProps} from 'next/app';
import {RecoilRoot} from 'recoil';

export default function App({Component, pageProps}: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Popup />
    </RecoilRoot>
  );
}
