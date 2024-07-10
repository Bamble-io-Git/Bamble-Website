import Script from 'next/script';

const GTag = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-TJESG59G90`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', G-TJESG59G90,  {
                page_path: window.location.pathname,
                });
    `}
      </Script>
    </>
  );
};

export default GTag;
