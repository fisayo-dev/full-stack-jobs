import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="my-20 app-container">
        <Hero />
      </div>
    </div>
  );
}
