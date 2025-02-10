const Footer = () => {
  return (
    <footer className="bg-gray-200 w-full">
      <div className="container m-auto py-4 flex flex-col items-center gap-4">
        <h4 className="text-2xl">Síguenos en nuestras redes!</h4>
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/ig.jpg" alt="Instagram" width={24} height={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/ld.png" alt="LinkedIn" width={24} height={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/tw.png" alt="Twitter" width={24} height={24} />
          </a>
        </div>
        <div className="flex gap-4 mt-4">
          <a href="/privacy" className="text-blue-600">
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
