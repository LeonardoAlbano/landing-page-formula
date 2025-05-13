import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import LandingPage from "@/templates/landing-page/landing-page";

export default function Home() {
  return (
    <div className="relatie flex min-h-screen flex-col dark bg-gray-700">
      <Header />
      <main className="flex-1 flex flex-col mt-10 mb-12">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
