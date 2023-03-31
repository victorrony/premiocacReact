import Article from "@/components/article/Article";
import Footer from "@/components/footer/Footer";
import Header from "../components/header/Header";
import SectionCard from "@/components/sectionCard/SectionCard";
import { useQuery } from "@apollo/client";
import { SLIDERS } from "../services/api/queries";
import { PROMOTIONS } from "../services/api/queries";
import Promotion from "@/components/promotion/Promotion";
import { VIDEOS } from "../services/api/queries";
import Videos from "@/components/videosYouTube/Videos";

function HomePage() {



  
  const { loading, error, data } = useQuery(SLIDERS);
  
  const { loading: loadingPromotion, error: errorPromotion, data: dataPromotion } =
    useQuery(PROMOTIONS);

   





   

  if (error) return "Error";
  if (loading) return "Loading";
  if (errorPromotion) return "Error";
 
  return (
    <>
      <Header data={data} />
      <div className="p-4">
        <SectionCard />
        <Promotion dataPromotion={dataPromotion} />
        <Article />
        <Videos />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
