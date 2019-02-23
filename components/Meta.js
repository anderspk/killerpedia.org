import Head from "next/head";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:300,400,700,900"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
      }
      #__next {
        min-height: 100vh;
        color: black;
        font-family: "Roboto", sans-serif;
        background: #f1f1f1;
      }

      header {
        background: #01172F;
        color: white;
        margin-bottom: 1rem;
        border-bottom: 2px solid #55b3d6;
      }

      .wrapper {
        max-width: 1000px;
        margin: 0 auto;
      }

      }
    `}</style>
  </div>
);
