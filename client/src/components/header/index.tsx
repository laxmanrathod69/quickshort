import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-between items-center p-5 bg-white/80 backdrop-blur-lg shadow-md">
      <h1 className="text-xl font-bold">QuickShort</h1>
      <nav className="flex gap-4 items-center">
        <a href="#features" className="text-gray-800">
          Features
        </a>
        <a href="#" className="text-gray-800">
          Testimonials
        </a>
        <a href="#faqs" className="text-gray-800">
          FAQs
        </a>
        <Button variant="outline">Feedback</Button>
      </nav>
    </header>
  );
};

export default Header;
