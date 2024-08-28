import React from "react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "@/app/assets/carouselItems/finance.jpeg";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Start Your Own Business",
      excerpt:
        "Starting your own business is a challenging but rewarding experience. Here's a guide to get you started...",
      image: "/images/business.jpg",
      slug: "start-your-own-business",
    },
    {
      id: 2,
      title: "10 Tips for Better Work-Life Balance",
      excerpt:
        "Struggling to balance work and life? These 10 tips will help you manage your time and stress effectively...",
      image: "/images/work-life-balance.jpg",
      slug: "better-work-life-balance",
    },
    {
      id: 3,
      title: "The Future of Tech: Trends to Watch",
      excerpt:
        "Technology is evolving faster than ever. Discover the latest trends that are shaping the future of tech...",
      image: "/images/tech-future.jpg",
      slug: "future-of-tech",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[85vh]">
        <Image
          src={Image1} // Replace with your hero image path
          alt="Blog Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20 flex-col">
          <h1 className="text-yellow-200 text-5xl font-bold">Our Blog</h1>
          <div className="text-center my-8 px-4 w-[70vw] absolute bottom-3">
            <p className="text-2xl text-white">
              Welcome to our blog! Here you'll find insights, stories, and
              updates from our team on the latest trends, tips, and more. Stay
              tuned for exciting content that will inspire and inform you.
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Message */}

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <h6 className="text-blue-600 hover:underline">Read More</h6>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
