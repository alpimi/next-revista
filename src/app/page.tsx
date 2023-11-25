import Image from "next/image";
import Navbar from "@/app/ui/Navbar";
import Footer from "./ui/Footer";
import { CustomizedFooter } from "./ui/CustomizedFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Footer /> */}
      <CustomizedFooter />
    </>
  );
}
