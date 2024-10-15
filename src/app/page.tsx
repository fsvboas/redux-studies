import Container from "./components/core/container";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-black/95 py-10">
      <Container>
        <Header />
        <main className="h-full w-full bg-black/20 my-8 p-4 rounded-lg">
          <div>
            <p className="font-bold text-white">Eu:</p>
            <p className="text-white">Olá!</p>
          </div>
        </main>
        <Footer />
      </Container>
    </div>
  );
}
