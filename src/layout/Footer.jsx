const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer 
      flex justify-center items-center
      w-full border-t border-sky-200
      min-h-(--footer-mobile) 
      md:min-h-(--footer-desktop)
      bg-linear-to-r from-neutral-100 to-sky-100"
    >
      <div
        className="footer-container
        flex flex-col md:flex-row justify-between items-center
        w-full md:max-w-5xl
        mx-2 md:mx-6"
      >
        <p className="font-heading font-medium text-md text-neutral-700">
          <span className="text-sky-500">FITNESS</span> © {year} — All rights
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
