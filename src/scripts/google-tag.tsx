// import Script from 'next/script';

// const GTag = () => {
//   return (
//     <>
//       <Script
//         src={`https://www.googletagmanager.com/gtag/js?id=G-VCRDL8EWYD`}
//       />
//       <Script strategy="lazyOnload" id="google-analytics">
//         {`
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', G-VCRDL8EWYD,  {
//                 page_path: window.location.pathname,
//                 });
//     `}
//       </Script>
//     </>
//   );
// };

// export default GTag;

import Script from 'next/script';

const GTag = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-VCRDL8EWYD`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VCRDL8EWYD');
        `}
      </Script>
    </>
  );
};

export default GTag;
