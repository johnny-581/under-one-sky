import Image from "next/image";
import ContactForm from "@/components/ContactForm"

// import Link from "next/link";
import doveLogo from "@/data/dove-logo.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full mx-auto">

      {/* Title Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center py-12">
        <div className="mb-6 md:mb-0">
          <Image
            src={doveLogo}
            alt="dove-logo"
            width={1000}
            className="w-[clamp(200px,45vw,500px)] h-auto"
          />
        </div>
        <div className="p-[2vw]"></div>
        <h1 className="font-bold font-title text-foreground flex flex-col justify-center leading-none">
          <span className="text-[clamp(60px,12vw,130px)] -mt-[1.3vw]">UNDER</span>
          <span className="text-[clamp(75px,15vw,160px)] -mt-[1vw]">ONE</span>
          <span className="text-[clamp(80px,16vw,170px)] -mt-[1vw]">SKY</span>
        </h1>
      </div>

      {/* Vision Statement */}
      <div className="bg-slate-600 flex flex-col items-center py-12">
        <p className="text-lg text-foreground w-2/3 text-center">
          Through long-form interviews, we uncover cross-cultural challenges for international students.
        </p>
      </div>

      {/* Contact Form */}
      <ContactForm />

    </div>
  );
}
