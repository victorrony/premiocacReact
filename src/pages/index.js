import Article from "@/components/article/Article";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import SectionGridCard from "@/components/sectionCard/sectionGridCard/SectionGridCard";


function HomePage() {
  return (
    <>
      <Header />
      <SectionGridCard />
      <Article />
      <Footer />
    </>
  );
}

export default HomePage;
