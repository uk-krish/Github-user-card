import SearchBar from "@/app/SearchBar";
import "./globals.css";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto  mt-5">
      <h1 className="text-2xl text-center font-extrabold ">
        Github profile View
      </h1>
      <SearchBar/>
    </div>
  );
}
