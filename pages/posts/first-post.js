import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
