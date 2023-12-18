import Script from "next/script";

const GTag = () => {
  return (
    <Script strategy="lazyOnload" id="gtag">
      {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS},  {
                page_path: window.location.pathname,
                });
    `}
    </Script>
  );
};

export default GTag;
