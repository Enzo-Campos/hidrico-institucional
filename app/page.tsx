import Hero from "./components/Hero";
import WhySection from "./components/WhySection";
import IntegratedSystemSection from "./components/IntegratedSystemSection";
import WoodFlooringSection from "./components/WoodFlooringSection";
import ProductCards from "./components/ProductCards";
import QuemSomosSection from "./components/QuemSomosSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <WoodFlooringSection />
      <IntegratedSystemSection />
      <ProductCards />
    </>
  );
}
