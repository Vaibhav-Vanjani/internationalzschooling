import Image from "next/image";
import Routebtn from "./ui/routebtn";
import Link from "next/link";

export default function() {
  return (
    <footer className="footer-remove">
      <div className="w-full min-h-[10svh] pt-8 bg-cover bg-center bg-gradient-to-r from-[#002B57] via-[#003B77] to-[#002C59]">
        <div className="r-w">

            <Image
              alt="logo"
              width={400}
              height={100}
              className="mx-auto my-5 max-w-72 md:max-w-80 bg-white/95 px-2 py-3 rounded-xl"
              src="/logo (1).webp"
            />

          <div className="flex justify-center gap-3 pb-5">
            <svg viewBox="0 0 24 24" className="w-6 h-6 hover:scale-110 duration-150 fill-current">
                <path d="M13.5 21v-8h2.7l.4-3H13.5V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.6v8h3.4z" />
              </svg>
          </div>

          {/* Countries */}
          <div className="flex flex-col text-sm text-white justify-center pb-5">
            <p className="font-semibold mx-auto my-2 uppercase">Countries:</p>
            <ul className="flex flex-wrap gap-1 justify-center">
              {[
                "UAE","USA","Mexico","Brazil","Colombia","Saudi","China",
                "Panama","Spain","Morocco","Gulf Students","South Africa",
                "Japan","France","Germany"
              ].map((c) => (
                <li key={c}>
                  <Routebtn btnName={c} routeTo={`/${c.toLowerCase()}`}/>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col text-sm text-white justify-center pb-5">
            <p className="font-semibold mx-auto my-4">QUICK LINKS:</p>
            <ul className="flex flex-wrap gap-2 justify-center">
              <li><Link className="hover:underline mr-2" href="/">Mobile App</Link> |</li>
              <li><Link className="hover:underline mr-2" href="/">Partnerships</Link> |</li>
              <li><Link className="hover:underline mr-2" href="/blog">Blog</Link> |</li>
              <li><Link className="hover:underline mr-2" href="/career">Careers</Link> |</li>
              <li><Link className="hover:underline mr-2" href="/press-release">Press Release</Link></li>
            </ul>
          </div>

          <hr className="w-full mx-auto h-[0.5px] bg-white hidden md:block" />

          <div className="flex flex-col gap-1 items-center justify-center r-w py-2">
            <div className="text-white font-semibold text-sm">
              <ul className="flex flex-wrap gap-2 justify-center">
                <li><Link className="hover:border-b-2 mr-2 duration-150" href="/contact-us">Contact Us</Link> |</li>
                <li><Link className="hover:border-b-2 mr-2 duration-150" href="/privacy-policy">Privacy Policy</Link> |</li>
                <li><Link className="hover:border-b-2 mr-2 duration-150" href="/terms-of-use">Terms of Use</Link></li>
              </ul>
            </div>

            <p className="text-white text-center text-sm">
              Copyright © 2026 - International Schooling - All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}