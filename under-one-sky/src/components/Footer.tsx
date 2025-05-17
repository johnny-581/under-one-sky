import siteMetadata from '@/data/siteMetadata';

const Footer = () => {
    return (
        <footer className='bg-beige flex justify-center rounded-t-3xl space-x-4 font-merriweather text-gray text-lg pt-[60px] pb-[10px]'>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <div>{siteMetadata.title}</div>
        </footer>
    );
}

export default Footer;