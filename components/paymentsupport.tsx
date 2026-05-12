export default function() {
  const payments = [
    { name: "USA", img: "/USA-payment.png", alt: "USA payment" },
    { name: "ITALY", img: "/italy-payment.png", alt: "Italy payment" },
    { name: "JAPAN", img: "/japan-payment.png", alt: "Japan payment" },
    { name: "USA", img: "/stripe-usa-payment.png", alt: "Stripe USA payment" },
    { name: "UNITED KINGDOM", img: "/united-kingdom-payment.webp", alt: "UK payment" },
    { name: "CHINA", img: "/china-payment.png", alt: "China payment" },
    { name: "USA", img: "/visa-usa-payment.png", alt: "Visa USA payment" },
    { name: "CHINA", img: "/weChat-china-payment.png", alt: "WeChat China payment" },
    { name: "CHINA", img: "/alipay-china-payment.png", alt: "Alipay China payment" },
    { name: "USA", img: "/america_express-payment-usa.png", alt: "Amex USA payment" },
    { name: "USA", img: "/applepay_usa-payment.png", alt: "Apple Pay USA payment" },
    { name: "BELGIUM", img: "/belgium-payment.png", alt: "Belgium payment" },
    { name: "USA", img: "/gpay-usa-payment.png", alt: "Google Pay USA payment" },
    { name: "NETHERLANDS", img: "/netherlands-payment.png", alt: "Netherlands payment" },
    { name: "JAPAN", img: "/jcb_japan-payment.png", alt: "JCB Japan payment" },
    { name: "KOREA", img: "/korea-payment.png", alt: "Korea payment" },
    { name: "JAPAN", img: "/konbini_japan-payment.png", alt: "Konbini Japan payment" },
  ];

  return (
    <div className="space-y-6">
      <h3 className="font-black md:text-3xl text-xl text-center mt-10 text-[#027FFF]">
        Trusted Worldwide for Secure Payments
      </h3>

      <p className="md:w-xl md:mx-auto text-center">
        We support multiple international payment methods to make enrollment easy for families across 190+ countries.
      </p>

      <div className="py-3 bg-[#ECF6FF] overflow-hidden">
        <div className="flex gap-10 animate-scroll whitespace-nowrap">
          {[...payments, ...payments].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <img
                src={item.img}
                alt={item.alt}
                className="md:w-28 w-20 h-auto"
              />
              <p className="font-bold text-[#5D5D5D] text-sm text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}