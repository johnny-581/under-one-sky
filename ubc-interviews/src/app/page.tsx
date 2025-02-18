// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="f2lex flex-col items-center">
      <div className="text-xl">
        Home Page
      </div>
      <div className="pt-2">
        <Link href="/blogs">All The Blogs</Link>
      </div>
    </div>
  );
}
