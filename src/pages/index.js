import Article from "@/components/article/Article";
import Footer from "@/components/footer/Footer";
import Header from "../components/header/Header";
import SectionCard from "@/components/sectionCard/SectionCard";
import { useQuery } from "@apollo/client";
import { SLIDERS } from "../services/api/queries";

function HomePage() {
  const { loading, error, data } = useQuery(SLIDERS);
  
  if (error) return "Error";
  if (loading) return "Loading";
  return (
    <>
      <Header data={data} />
      <div className="p-4">
        <SectionCard />
        <Article />
        <Footer />
      </div>
      </>
      
  );
}

export default HomePage;
