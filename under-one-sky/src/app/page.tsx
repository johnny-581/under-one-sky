import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import LayeredBox from "@/components/LayeredBox";

// import Link from "next/link";
import pigeonLogo from "@/data/pigeon-logo-background-removed.png";

export default function Home() {
  return (
    <>
      <div className="w-8/12 mx-auto min-w-[700px] max-w-[850px] pb-5">

        {/* Upper Title Section */}
        <div className="min-w-7xl flex justify-between">
          <Image
            src={pigeonLogo}
            alt="pigeon-logo-background-removed"
            width={1000}
            className="w-auto h-[46vh] min-h-60 pt-[3vh]"
          />
          <div className="flex flex-col items-end">
            <div className="grow flex items-center">
              <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg">
                <circle cx="45" cy="45" r="45" style={{ fill: 'var(--yellow)' }} stroke="none" />
              </svg>
            </div>
            <div className="flex flex-col items-end font-merriweather text-foreground text-[27px] leading-9 text-right">
              <span>Accompanying Your</span>
              <span>Cross-Cultural Journey</span>
            </div>
          </div>

        </div>

        {/* Lower Title Section */}
        <div className="relative">
          <a href="https://www.youtube.com/" className="absolute top-[23vh] left-0 z-10 bg-beige py-2 px-10 rounded-full font-merriweather text-foreground text-[27px] hover:bg-yellow transition duration-200">
            Checkout Our <span className="">Channel</span>
          </a>

          <h1 className="grow-0 flex flex-col items-end justify-end font-playfair text-foreground text-[max(18vh,100px)] text-center leading-[0.8]">
            <span>UNDER</span>
            <span>ONE</span>
            <span>SKY</span>
          </h1>
        </div>

      </div >

      {/* Vision Statement */}
      < LayeredBox >
        <p className="text-4xl font-merriweather font-light text-foreground w-full text-center leading-[50px]">
          Through long-form interviews, we uncover cross-cultural challenges for international students.
        </p>
      </LayeredBox >

      {/* Contact Form */}
      < ContactForm />

    </>
  );
}
