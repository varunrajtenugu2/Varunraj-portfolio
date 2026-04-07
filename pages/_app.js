import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Varun Raj Tenugu — Software Engineer</title>
        <meta name="description" content="Software Engineer specializing in backend systems, fintech, and ML. Building reliable, high-performance production systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
