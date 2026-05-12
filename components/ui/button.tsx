const buttonList = [
  { title: "BOOK DEMO", animated: true },
  { title: "CALLBACK", animated: true },
  { title: "LOG IN" },
  { title: "ENROLL NOW" },
];

export default function Buttons() {
  return (
    <>
      <div className="flex gap-3">
        {buttonList.map((item, index) => {
          return (
            <button
              key={index}
              className="
                group
                relative
                overflow-hidden
                py-1 px-2
                rounded-full
                border border-[#5d5d5d]
                text-[#5d5d5d]
              "
            >
              {/* animated background */}
              <span
                className={`
                  absolute
                  left-0
                  bottom-0
                  w-full
                  bg-[#0084FF]
                  z-0
                  ${
                    item.animated
                      ? "animate-fill-loop"
                      : "h-0 group-hover:h-full transition-all duration-300"
                  }
                `}
              />

              {/* text */}
              <span
                className={`
                  relative z-10
                  transition-colors duration-300
                  ${
                    item.animated
                      ? "text-white"
                      : "group-hover:text-white"
                  }
                `}
              >
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}