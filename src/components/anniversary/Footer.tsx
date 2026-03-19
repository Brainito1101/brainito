import crcLogo from "@/assets/crc-anniversary-logo.png";
const Footer = () => {
  return <footer className="bg-crc-blue-dark py-12 relative overflow-hidden bg-primary-foreground">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crc-gold via-crc-blue-light to-crc-gold" />

    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        <img alt="Climate Resilience Consulting - 10 Year Anniversary" className="h-14 mb-6 opacity-90 object-scale-down" src="https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1af2e753f152b32dd8a81.png" />

        <p className="text-sm mb-2 text-primary">
          © 2016-2026 Climate Resilience Consulting
        </p>
        <p className="text-crc-gold font-medium text-sm">
          A Decade of Building Climate Resilience
        </p>
      </div>
    </div>
  </footer>;
};
export default Footer;