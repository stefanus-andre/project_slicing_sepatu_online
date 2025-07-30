import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Features from "@/components/Features";
import WeeklyPicks from "@/components/WeeklyPicks";
import Categories from "@/components/Categories";
import DiscountBanner from "@/components/DiscountBanner";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
    <>
        <Navbar />
        <HeroSlider />
        <Features />
        <WeeklyPicks />
        <Categories />
        <DiscountBanner />
        <BlogSection />
        <Footer />
    </>
    );
}
