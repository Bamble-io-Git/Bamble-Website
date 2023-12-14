import localFont from "next/font/local";
// Font files can be colocated inside of `app`
export const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [
    {
      path: "./../../../public/fonts/Montserrat/static/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/Montserrat/static/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/Montserrat/static/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },

    {
      path: "./../../../public/fonts/Montserrat/static/Montserrat-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/Montserrat/static/Montserrat-BlackItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const notoSans = localFont({
  variable: "--font-noto-sans",
  display: "swap",
  src: [
    {
      path: "./../../../public/fonts/NotoSans/NotoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/NotoSans/NotoSans-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
});
