import Image from "next/image";
// import Link from "next/link";
import doveLogo from "@/data/dove-logo.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image src={doveLogo} alt="dove-logo" width={500} height={500} className="" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-primary">
          UNDER<br />
          ONE<br />
          SKY
        </h1>
      </div>

      <div className="bg-purple-100">something</div>
    </div>
  );
}
