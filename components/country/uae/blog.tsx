import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    slug: "/blog/top-rated-online-school-in-uae",
    title: "Top Rated Online School in UAE",
    image: "/1748264481272_debfb48e-e810-43c5-8f36-de3237ecfa66.webp", // replace with full URL if needed
    description: "Are you looking for a trusted online school in the UAE that offers flexibility, high-quality education, and a globally recognized learning experience like that offered by International Schooling?",
  },
  {
    slug: "/blog/diverse-culture-of-the-uae",
    title: "Diverse Culture of the UAE",
    image: "/1748265890001_47543666-b8c7-4b1e-be0e-c736101ce443.webp",
    description: "The United Arab Emirates (UAE) stands as a power of multiculturalism and has a booming population where the expatriate population is about 88.5%.",
  },
  {
    slug: "/blog/education-in-the-uae",
    title: "Education in the UAE",
    image: "/1748264481272_debfb48e-e810-43c5-8f36-de3237ecfa66.webp", // use your optimized image
    description: "The United Arab Emirates (UAE) has rapidly emerged as a hub of educational excellence and innovation in the Gulf region.",
  },
];

export default function BlogGrid() {
  return (
    <div className="bg-emerald-600 py-6 mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="uppercase font-bold text-3xl md:text-5xl text-white text-center mb-4">
          Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <Link 
              key={index} 
              href={blog.slug} 
              target="_blank"
              className="flex rounded-xl overflow-hidden group"
            >
              <div className="card shadow-md hover:shadow-xl duration-150 bg-white w-full">
                <div className="card-body pt-0 px-0 relative">
                  <Image
                    src={blog.image}
                    alt={blog.slug}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                  <h2 className="card-title text-[#5D5D5D] text-center mx-3 mb-2 text-lg mt-3">
                    {blog.title}
                  </h2>
                  <p className="text-[#5D5D5D] text-center mx-3 text-xs px-4 mb-4 line-clamp-4">
                    {blog.description}
                  </p>
                  <div className="card-actions mx-auto pb-4 flex justify-center">
                    <div className="hover-fill-button w-max rounded-full text-[#5d5d5d] border hover:text-blue-800 border-[#5d5d5d] px-4 py-2 text-sm font-medium">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}