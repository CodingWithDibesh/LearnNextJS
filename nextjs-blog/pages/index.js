import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm Dibesh Raj Subedi and being a software engineer was my childhood dream and I’m among those living their dream. I seek all possible ways to learn, share, grow, and help others succeed. I enjoy coding, listening to music, and watching movies as we all do beside that I captivate myself in writing(tech/non-tech) articles. </p>
        <p>
          (This is a sample website - I’ve built a site like this on{' '}
          <a href="https://github.com/itSubeDibesh/LearnNextJS">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}