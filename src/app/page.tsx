import NavBar from "@/components/NavBar/page";
import Products from "@/components/Products/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
      <NavBar />
      <Products />
    </main>
  );
}
