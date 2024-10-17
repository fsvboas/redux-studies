"use client";

import ChatHistory from "./components/chat-history";
import Container from "./components/core/container";
import Form from "./components/form";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-black/95 py-10">
      <Container>
        <Header />
        <main className="h-full w-full bg-black/20 my-8 p-4 rounded-lg">
          <ChatHistory />
        </main>
        <footer className="h-14 w-full">
          <Form />
        </footer>
      </Container>
    </div>
  );
}
