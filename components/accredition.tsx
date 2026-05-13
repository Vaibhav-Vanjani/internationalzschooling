import Image from "next/image";

export default function() {
  const news = [
    {
      title: "USA News",
      img: "/1 (2).webp",
      alt: "USA News | International Schooling",
      link: "https://usanews.com/newsroom/international-schooling-earns-prestigious-neasc-usa-accreditation",
    },
    {
      title: "Yahoo Finance",
      img: "/Yahoo.webp",
      alt: "Yahoo Finance | International Schooling",
      link: "https://finance.yahoo.com/news/international-schooling-announces-neasc-accreditation-155400242.html",
    },
    {
      title: "KTLA 5 News",
      img: "/ktla.webp",
      alt: "KTLA 5 News | International Schooling",
      link: "https://ktla.com/business/press-releases/globenewswire/9674503/international-schooling-announces-neasc-accreditation-highlighting-global-achievements/",
    },
  ];

  return (
    <section className="text-center bg-blue-600 text-white mt-12">
      <div className="r-w py-12 space-y-6 mx-4">
        <h2 className="text-xl md:text-4xl font-semibold">
          NEASC Accreditation in the News
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {news.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-gray-400"
            >
             <div className="relative w-full aspect-video">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="h-auto w-auto object-cover border-b border-b-gray-400"
                />
              </div>

              <div className="space-y-4 p-4 bg-blue-50 text-blue-800">
                <h2 className="text-2xl font-semibold">{item.title}</h2>

                <a
                  target="_blank"
                  rel="nofollow noreferrer"
                  href={item.link}
                  className="inline-block rounded-full bg-blue-800 hover:bg-blue-600 text-white px-4 py-2"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}