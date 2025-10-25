const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center px-6">
        <p className="text-sm sm:text-lg">
          &copy; {new Date().getFullYear()} Milind Krishna. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;