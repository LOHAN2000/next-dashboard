import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header/>
      <Hero/>
    </main>
  )
}

export default Home;