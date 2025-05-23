// src/pages/HomePage.jsx
import { Routes } from "react-router-dom"
import Header from "../components/common/header"
import Footer from "../components/common/Footer"
import HeroSection from "../components/common/HeroSection"
import ProductList from "../components/products/ProductList"
import Story from "../components/common/Story"
import ProductShowcase from "../components/common/ProductShowcase.jsx"


export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductList />
      <Story />
      <ProductShowcase />
      <Footer />
      
    </>
  )
}