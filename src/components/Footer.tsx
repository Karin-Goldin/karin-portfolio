const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gradient-to-r from-white/50 to-orange-200/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
        <p className="font-medium">
          © {new Date().getFullYear()} Karin Goldin. Designed and developed by
          me.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
