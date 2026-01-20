const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer 
      flex justify-center items-center
      bg-neutral-100 w-full
      min-h-(--footer-mobile) md:min-h-(--footer-desktop)"
    >
      <div
        className="footer-container
        flex flex-col md:flex-row justify-between items-center
        w-full md:max-w-4xl
        mx-2 md:mx-6"
      >
        <p className="font-heading font-medium text-md text-neutral-700">
          <span className="text-sky-500">SPORT</span> © {year} — All rights
          reserved
        </p>
        <p className="font-heading font-medium text-md text-neutral-700">
          Built with <span className="text-sky-500">React</span> &{" "}
          <span className="text-emerald-500">Tailwind</span> CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
