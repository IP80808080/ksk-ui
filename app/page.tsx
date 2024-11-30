import Header from "./components/Header";
import CreatorInfo from "./components/CreatorInfo";
import SignatureShowcase from "./components/SignatureShowcase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <CreatorInfo />
        <SignatureShowcase />
      </main>
      <Footer />
    </div>
  );
}
