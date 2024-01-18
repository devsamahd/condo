import Head from 'next/head';

type Props = {
  description?: string;
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const PageContainer = ({ title, description, children }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Add any other meta tags or links as needed */}
    </Head>
    {children}
  </div>
);

export default PageContainer;