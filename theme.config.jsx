import Image from "next/image";

const config = {
  logo: (
    <Image
      src="/assets/img/say-switchlogo.png"
      alt="Logo"
      width="110"
      height="50"
    />
  ),
  project: {
    link: "https://www.sayswitchgroup.com/",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Sayswitch Documentation",
    };
  },
  head: (
    <>
      <title>Sayswitch - Developer Documentation</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Sayswitch - Developer Documentation" />
      <meta name="og:title" content="Sayswitch - Developer Documentation" />
      <meta
        name="og:description"
        content="Integrate payments and financial services into your applications with Sayswitch."
      />
    </>
  ),
  color: {
    hue: { dark: 154, light: 157 },
    saturation: { dark: 50, light: 56 },
    lightness: { dark: 54, light: 45 },
  },
  // ... other theme options
};

export default config;
