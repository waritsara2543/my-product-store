import ProductList from "@/components/ProductList";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex bg-white p-5">
      <div className="w-1/5">
        <Sidebar />
      </div>

      <div className="w-4/5 h-screen overflow-scroll">
        <ProductList />
      </div>
    </main>
  );
}
