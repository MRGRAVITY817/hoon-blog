import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html lang="ko" className="scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link href="/static/favicon.ico" rel="shortcut icon" />
        </Head>
        <body className="bg-bright dark:bg-main text-main dark:text-bright">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
