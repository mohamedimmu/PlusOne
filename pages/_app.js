import "../styles/globals.css";
import { Layout } from "../components";
import { useRouter } from "next/router";
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
