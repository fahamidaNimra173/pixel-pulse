import React from "react";
import Image from "next/image";

interface Story {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface SuccessStoriesProps {
  stories?: Story[];
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ stories }) => {
  const defaultStories: Story[] = [
    {
      title: "How FitTech Doubled Their Revenue",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
      image: "/successStories/image (6).png",
      link: "#",
    },
    {
      title:
        "From Startup To Industry Leader- TechWave's Digital Transformation",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
      image: "/successStories/image (7).png",
      link: "#",
    },
    {
      title:
        "Revitalizing a Legacy Brand- Classic Cuisines Digital Makeover",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
      image: "/successStories/image (8).png",
      link: "#",
    },
  ];

  const storyList = stories || defaultStories;

  return (
    <div className="w-full pb-[150px] px-[165px]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 leading-tight">
          Success Stories: Businesses Thriving Through
          <br />
          Our <span className="text-[#FF6B47]">Digital Marketing</span> Expertise
        </h2>

        {/* Stories Grid */}
        <div className="grid grid-cols-3 gap-[21px] mb-12">
          {storyList.map((story, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col"
            >
             
              {index === 1 ? (
                <>
                  {/* Text Section first */}
                  <div className="p-6 flex-1 transition-all duration-300 bg-[#fafafa] group-hover:bg-[#FA7C45]">
                    <h3 className="text-[22px] text-black font-bold mb-4 leading-tight transition-colors duration-300 group-hover:text-white">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 text-[16px] mb-[55px] leading-relaxed transition-colors duration-300 group-hover:text-white">
                      {story.description}
                    </p>
                    <a
                      href={story.link}
                      className="font-semibold underline transition-colors duration-300 text-black group-hover:text-white"
                    >
                      Read More
                    </a>
                  </div>
                  {/* Image at bottom */}
                  <div className="relative h-64">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Image first */}
                    {/* Image at bottom */}
                  <div className="relative h-64">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                   <div className="p-6 flex-1 transition-all duration-300 bg-[#fafafa] group-hover:bg-[#FA7C45]">
                    <h3 className="text-[22px] text-black font-bold mb-4 leading-tight transition-colors duration-300 group-hover:text-white">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 text-[16px] mb-[55px] leading-relaxed transition-colors duration-300 group-hover:text-white">
                      {story.description}
                    </p>
                    <a
                      href={story.link}
                      className="font-semibold text-black underline transition-colors duration-300 group-hover:text-white"
                    >
                      Read More
                    </a>
                  </div>
                
                </>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 border-2 rounded-tl-3xl rounded-br-3xl border-gray-900 text-gray-900 font-semibold  hover:bg-[#FF6B47] hover:text-white hover:border-[#FF6B47] transition-colors duration-300">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
