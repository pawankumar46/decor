import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListOfItems = () => {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("All Styles");
  const navigate = useNavigate()
  // Decoration data array
  const decorations = [
    {
      id: 1,
      title: "Honganasu Party Hall",
      description: "Versatile hall with themed décor and vibrant celebrations.",
      image: "https://lh3.googleusercontent.com/p/AF1QipNPSEc88Vo3g9leSKB_5Mg6YtimueCQcftnriih=s1360-w1360-h1020-rw",
      tags: ["Engagement", "Seemantha", "Birthday"],
      rating: 4.9,
      colors: ["Gold", "Red", "Cream"],
      priceStart: "₹3,500",
      priceRange: "₹3,500 - ₹10,000",
      gradient: "from-yellow-200 to-orange-300",
      productDetails: [

        "Height: 10 ft Backdrop",
      "Material: Teak wood & silk",
      "Includes fresh marigold flower decorations",
      "Customizable color theme to match event decor",
      "Intricate traditional carvings on pillars",
      "Optional lighting setup for evening ceremonies"

      ]
    },
    {
      id: 2,
      title: "Hotel Nandini",
      description: "Elegant halls with floral arches and creative décor for every event.",
      image: "https://nandhini.com/wp-content/uploads/2022/10/nandhini-logo-removebg-preview-e1666141300990.png",
      tags: ["Restaurant", "Party", "Modern Style"],
      rating: 4.8,
      colors: ["White", "Pink", "Green"],
      priceStart: "₹1000",
      priceRange: "₹1000 - ₹8,500",
      gradient: "from-pink-200 to-green-300",
      productDetails: [

      ]
    },
    {
      id: 3,
      title: "KSBA",
      description: "An association known for elegant coastal-themed decorations",
      image: "https://www.myksba.com/img/carousel-1.jpg",
      tags: ["Wedding"],
      rating: 4.7,
      colors: ["White", "Blue", "Beige"],
      priceStart: "₹1,200",
      priceRange: "₹1,200 - ₹2,000",
      gradient: "from-blue-200 to-cyan-300",
      productDetails: [

      ]
    },
    {
      id: 4,
      title: "Chairman's Club",
      description: "A premier club known for stylish birthday decorations and themes.",
      image: "https://lh3.googleusercontent.com/p/AF1QipNJFro43Gl6XmD4hnZ3f01s6ApDaqNfQpsx5DOj=s1360-w1360-h1020-rw",
      tags: ["Popular", "Birthday"],
      rating: 4.6,
      colors: ["Pink", "Gold", "Purple"],
      priceStart: "₹300",
      priceRange: "₹300 - ₹800",
      gradient: "from-pink-200 to-purple-300",
      productDetails: [


      ]
    },
    {
      id: 5,
      title: "Superhero Party Decor",
      description: "Action-packed superhero themed decoration",
      image: "https://images.unsplash.com/photo-1637724562261-5777b67c59b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Birthday"],
      rating: 4.5,
      colors: ["Blue", "Red", "Yellow"],
      priceStart: "₹250",
      priceRange: "₹250 - ₹600",
      gradient: "from-blue-200 to-red-300",
      productDetails: [

       
      ]
    },
    {
      id: 6,
      title: "Elegant Birthday",
      description: "Sophisticated black and gold theme for adults",
      image: "https://images.unsplash.com/photo-1626149136691-78e3977b3d69?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Popular", "Birthday"],
      rating: 4.8,
      colors: ["Black", "Gold", "White"],
      priceStart: "₹400",
      priceRange: "₹400 - ₹1,000",
      gradient: "from-gray-200 to-yellow-200",
      productDetails: [

       

      ]
    },
    {
      id: 7,
      title: "Anniversary Setup",
      description: "Luxurious golden anniversary celebration",
      image: "https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Popular", "Anniversary"],
      rating: 4.9,
      colors: ["Gold", "Orange", "White"],
      priceStart: "₹1,500",
      priceRange: "₹1,500 - ₹3,000",
      gradient: "from-yellow-200 to-orange-300",
      productDetails: [


      ]
    },
    {
      id: 8,
      title: "Silver Jubilee Decor",
      description: "Classic silver themed decoration for 25th anniversary",
      image: "https://i.pinimg.com/736x/c8/d6/6f/c8d66f7cef63a3fc5d1fa231d2979c7f.jpg",
      tags: ["Anniversary"],
      rating: 4.7,
      colors: ["Silver", "Blue", "White"],
      priceStart: "₹800",
      priceRange: "₹800 - ₹1,800",
      gradient: "from-gray-200 to-blue-200",
      productDetails: [


      ]
    }
  ];

  // Filter decorations based on search term and selected style
  const filteredDecorations = decorations.filter(decoration => {
    const matchesSearch = decoration.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      decoration.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      decoration.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      decoration.colors.some(color => color.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStyle = selectedStyle === "All Styles" ||
      decoration.tags.includes(selectedStyle) ||
      (selectedStyle === "Modern" && decoration.tags.includes("Modern Style")) ||
      (selectedStyle === "Traditional" && decoration.tags.includes("Wedding")) ||
      (selectedStyle === "Vintage" && decoration.tags.includes("Anniversary")) ||
      (selectedStyle === "Minimalist" && decoration.tags.includes("Modern Style")) ||
      (selectedStyle === "Bohemian" && decoration.tags.includes("Birthday")) ||
      (selectedStyle === "Rustic" && decoration.tags.includes("Wedding"));

    return matchesSearch && matchesStyle;
  });

  // Clear filters function
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedStyle("All Styles");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white px-6 py-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #2b6777 0%, #52ab98 50%, #c8d8e4 100%)' }}>
        {/* Background decorations */}
        <div className="absolute top-5 left-10 w-12 h-12 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-16 right-20 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="relative max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
            <span className="text-2xl animate-bounce">🎉</span>

          </div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white animate-slide-up">
              Beautiful Decorations
            </h1>
            <p className="text-lg md:text-xl font-light mb-4 text-white/95 animate-slide-up delay-200">
              For Every Celebration
            </p>
            <p className="text-base text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-300">
              Transform your special moments into unforgettable memories.
            </p>
          </div>
        </div>
      </div>
      {/* Browse by Events Section */}
      <div className="py-12 px-6" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="text-4xl">🎨</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2b6777' }}>
              Browse by Event Type
            </h2>
            <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#2b6777' }}>
              Choose from our curated collection of decorations for different occasions.
              Each design is crafted with love and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <a href="/gallery" rel="noopener noreferrer">
               <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden" style={{ borderColor: '#52ab98' }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, #c8d8e4, #f2f2f2)' }}></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #2b6777, #52ab98)' }}>
                  <span className="text-3xl text-white">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: '#2b6777' }}>All Events</h3>
                <p className="text-base font-medium" style={{ color: '#2b6777' }}>100+ designs</p>
                <div className="mt-4 w-full rounded-full h-2" style={{ backgroundColor: '#c8d8e4' }}>
                  <div className="h-2 rounded-full w-full" style={{ background: 'linear-gradient(90deg, #2b6777, #52ab98)' }}></div>
                </div>
              </div>
            </div>
            </a>
           
          <a href="/gallery/wedding" rel="noopener noreferrer">
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">💕</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">Marriage</h3>
                <p className="text-gray-600 text-base font-medium">20+ designs</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-400 to-red-400 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>

          </a>
            
            <a href="/gallery/birthday" rel="noopener noreferrer">
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🎂</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">Birthday</h3>
                <p className="text-gray-600 text-base font-medium">20+ designs</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
            </a>
            
            <a href="/gallery/sangeet" rel="noopener noreferrer">
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              {/* Hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">💃</span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">Sangeet</h3>
                <p className="text-gray-600 text-base font-medium">10+ design</p>

                {/* Progress bar */}
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-pink-400 h-2 rounded-full w-1/12"></div>
                </div>
              </div>
            </div>
            </a>
            

            <a href="/gallery/cradle" rel="noopener noreferrer">
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">👶</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Naming Ceremony</h3>
                <p className="text-gray-600 text-base font-medium">20+ designs</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-1/6"></div>
                </div>
              </div>
            </div></a>
            

            <a href="/gallery/engagement" rel="noopener noreferrer">
             <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">💍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">Engagement</h3>
                <p className="text-gray-600 text-base font-medium">20+ design</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-400 to-rose-400 h-2 rounded-full w-1/12"></div>
                </div>
              </div>
            </div></a>
           
            <a href="/gallery/seemantham" rel="noopener noreferrer">
             <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              {/* Hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">👶</span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Baby Shower</h3>
                <p className="text-gray-600 text-base font-medium">20+ design</p>

                {/* Progress bar */}
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-pink-400 h-2 rounded-full w-1/12"></div>
                </div>
              </div>
            </div></a>
           

            <a href="/gallery/gruhapravesha" rel="noopener noreferrer">
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">Gruhapravesha</h3>
                <p className="text-gray-600 text-base font-medium">20+ design</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full w-1/12"></div>
                </div>
              </div>
            </div></a>
            
          </div>
        </div>
      </div>

      {/* Find Your Perfect Decoration Section */}


      {/* Decoration Showcase Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Decoration Showcase
            </h2>
            <p className="text-xl mb-6" style={{ color: '#2b6777' }}>
              {filteredDecorations.length} designs found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDecorations.map((decoration) => (
              <div key={decoration.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative">
                 <div className={`w-full h-48 bg-gradient-to-br ${decoration.gradient} flex items-center justify-center overflow-hidden`}>
  <img
    src={decoration.image}
    alt={decoration.title}
    className="w-full h-48 object-cover rounded-t-2xl"
  />
</div>



                  <div className="absolute top-3 left-3 flex gap-2">
                    {decoration.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-white text-xs font-semibold rounded-full ${tag === 'Popular' ? 'bg-red-500' :
                          tag === 'Wedding' ? 'bg-purple-500' :
                            tag === 'Birthday' ? 'bg-orange-500' :
                              tag === 'Anniversary' ? 'bg-purple-500' :
                                tag === 'Modern Style' ? 'bg-blue-500' :
                                  'bg-gray-500'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/90 px-2 py-1 rounded-full">
                    <span className="text-sm font-semibold text-yellow-600">⭐ {decoration.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{decoration.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{decoration.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {decoration.colors.map((color, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded-full ${color === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                          color === 'Red' ? 'bg-red-100 text-red-800' :
                            color === 'Cream' ? 'bg-gray-100 text-gray-800' :
                              color === 'White' ? 'bg-white border border-gray-300 text-gray-800' :
                                color === 'Pink' ? 'bg-pink-100 text-pink-800' :
                                  color === 'Green' ? 'bg-green-100 text-green-800' :
                                    color === 'Blue' ? 'bg-blue-100 text-blue-800' :
                                      color === 'Beige' ? 'bg-yellow-100 text-yellow-800' :
                                        color === 'Purple' ? 'bg-purple-100 text-purple-800' :
                                          color === 'Black' ? 'bg-gray-800 text-white' :
                                            color === 'Orange' ? 'bg-orange-100 text-orange-800' :
                                              color === 'Silver' ? 'bg-gray-100 text-gray-800' :
                                                'bg-gray-100 text-gray-800'
                          }`}
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-gray-800">{decoration.priceStart}</p>
                    <p className="text-sm text-gray-500">Full range: {decoration.priceRange}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={()=> navigate('/decordetails', { state: { decoration: decoration } })}
                      className="flex-1 text-white py-0.5 px-2 rounded-md transition-all duration-300 text-xs"
                      style={{ background: 'linear-gradient(90deg, #2b6777, #52ab98)' }}
                    >
                      View Details →
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #2b6777 0%, #52ab98 50%, #c8d8e4 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 mb-8" style={{ backgroundColor: 'rgba(43, 103, 119, 0.8)' }}>
            <span className="text-white text-sm">✓</span>
            <span className="text-white text-sm font-medium">Ready to Decorate?</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bring Your Vision to Life
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with professional decorators who can create these stunning setups for your special event
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
              style={{ color: '#2b6777' }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfItems;
