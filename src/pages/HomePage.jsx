// src/pages/HomePage.jsx
import { Routes } from "react-router-dom"
import Header from "../components/common/header"
import Footer from "../components/common/Footer"
import HeroSection from "../components/common/HeroSection"

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  )
}