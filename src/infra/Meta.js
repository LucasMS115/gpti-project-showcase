import Head from 'next/head';
// import img_src from '../../public/images/.png';

export default function Meta ({ title, keywords, description }){
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />

      {/* <meta property="og:url" content="https://" /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={img_src} /> */}


      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:domain" content=".com.br" /> */}
      {/* <meta property="twitter:url" content="https://" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={img_src}></meta> */}

      <meta charSet='utf-8' />
      {/* <link rel='icon' href='.png' /> */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <title>{title}</title>

    </Head>
  )
}

Meta.defaultProps = {
  title: 'title',
  keywords: 'keywords',
  description: 'description',
}