import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-white font-roboto text-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
