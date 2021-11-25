import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class AppDocument extends Document {
  static getInitialProps = async (context: DocumentContext) => {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  };
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            rel="preload"
            href="/fonts/Outfit-VariableFont_wght.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link href="/static/favicon.ico" rel="shortcut icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
