import FAQ from "./components/faq";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Shorten from "./components/shorten";

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <Header />
      <Shorten />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Home;
