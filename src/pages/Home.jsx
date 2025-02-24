import Hero from '../components/Shared/Hero/Hero';
import Features from '../components/Shared/OurFeatures/OurFeatures';
import PopularCategories from '../components/Shared/PopularCategories/PopularCategories';
import PopularProducts from '../components/Shared/PopularProducts/PopularProducts';
import PromoBanner from '../components/Shared/PromoBanner/PromoBanner';
import FeaturedProducts from '../components/Shared/FeaturedProducts/FeaturedProducts';
import LatestNews from '../components/Shared/LatestNews/LatestNews';
import ClientTestimonials from '../components/Shared/ClientTestimonials/ClientTestimonials';
import BrandLogos from '../components/Shared/BrandLogos/BrandLogos';
import InstagramFeed from '../components/Shared/InstagramFeed/InstagramFeed';
import Newsletter from '../components/Shared/Newsletter/Newsletter';

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full">
          <Hero />
          <Features />
          <PopularCategories />
          <PopularProducts />
          <PromoBanner />
          <FeaturedProducts />
          <LatestNews />
          <ClientTestimonials />
          <BrandLogos />
          <InstagramFeed />
          <Newsletter />
    </div>
  );
};

export default Home;