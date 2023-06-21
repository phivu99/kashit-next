// import TwSizeIndicator from "@/components/TwSizeIndicator";
// import config from "@/config/config.json";
// import theme from "../config/theme.json";
// import Header from "@/partials/Header";
import config from "./config/config.json";

//import theme from "./config/theme.json";
import Header from "./components/header";
//import Loader from "./components/Loader";
import SliderOne from "./components/banner";
//import { motion } from 'framer-motion';
import ServiceOne from "./components/service-one";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // import google font css



  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* favicon */}
        <link rel="shortcut icon" href={config.site.favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="nextplate" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* google font css */}

      </head>

      <body suppressHydrationWarning={true}>

      
          <Header />
          <main>{children}</main>
  
          <SliderOne  />
          <ServiceOne  />
 
      </body>
    </html>
  );
}