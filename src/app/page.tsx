import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}
