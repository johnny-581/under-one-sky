import Link from 'next/link';
import Image from 'next/image';
import logo from '@/data/sample-logo.png';

const Header = () => {
    return (
        <header className="flex justify-between text-foreground p-5">
            <Link href="/">
                <Image
                    src={logo}
                    alt="logo"
                    width={200}
                    priority
                />
            </Link>
            <div>
                <a href="/about">about us</a>
            </div>
        </header>
    );
}

export default Header;