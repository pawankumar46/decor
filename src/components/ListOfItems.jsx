import React, { useState } from "react";

const ListOfItems = () => {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("All Styles");

  // Decoration data array
  const decorations = [
    {
      id: 1,
      title: "Royal Wedding Mandap",
      description: "Elegant traditional mandap with marigold flowers and silk draping",
      image: "💐",
      tags: ["Popular", "Wedding"],
      rating: 4.9,
      colors: ["Gold", "Red", "Cream"],
      priceStart: "₹2,500",
      priceRange: "₹2,500 - ₹5,000",
      gradient: "from-yellow-200 to-orange-300",
      productDetails: [
        
          "Height: 10 ft",
          "Material: Teak wood & silk",
          "Includes fresh marigold flower decorations",
          "Customizable color theme to match wedding decor",
          "Portable and easy to assemble",
          "Intricate traditional carvings on pillars",
          "Can accommodate up to 8 people comfortably",
          "Perfect for both indoor and outdoor weddings",
          "Durable and reusable for multiple events",
          "Optional lighting setup for evening ceremonies"
        
      ]
    },
    {
      id: 2,
      title: "Garden Wedding Arch",
      description: "Romantic floral arch with white roses and greenery",
      image: "🌹",
      tags: ["Popular", "Wedding", "Modern Style"],
      rating: 4.8,
      colors: ["White", "Pink", "Green"],
      priceStart: "₹800",
      priceRange: "₹800 - ₹1,500",
      gradient: "from-pink-200 to-green-300",
      productDetails: [
        
        "Height: 10 ft",
        "Material: Teak wood & silk",
        "Includes fresh marigold flower decorations",
        "Customizable color theme to match wedding decor",
        "Portable and easy to assemble",
        "Intricate traditional carvings on pillars",
        "Can accommodate up to 8 people comfortably",
        "Perfect for both indoor and outdoor weddings",
        "Durable and reusable for multiple events",
        "Optional lighting setup for evening ceremonies"
      
    ]
    },
    {
      id: 3,
      title: "Beach Wedding Setup",
      description: "Coastal themed decoration with driftwood and white linens",
      image: "🏖️",
      tags: ["Wedding"],
      rating: 4.7,
      colors: ["White", "Blue", "Beige"],
      priceStart: "₹1,200",
      priceRange: "₹1,200 - ₹2,000",
      gradient: "from-blue-200 to-cyan-300",
      productDetails: [
        
          "Height: 10 ft",
          "Material: Teak wood & silk",
          "Includes fresh marigold flower decorations",
          "Customizable color theme to match wedding decor",
          "Portable and easy to assemble",
          "Intricate traditional carvings on pillars",
          "Can accommodate up to 8 people comfortably",
          "Perfect for both indoor and outdoor weddings",
          "Durable and reusable for multiple events",
          "Optional lighting setup for evening ceremonies"
        
    ]
    },
    {
      id: 4,
      title: "Princess Birthday Theme",
      description: "Magical princess castle setup with pink and gold balloons",
      image: "🎈",
      tags: ["Popular", "Birthday"],
      rating: 4.6,
      colors: ["Pink", "Gold", "Purple"],
      priceStart: "₹300",
      priceRange: "₹300 - ₹800",
      gradient: "from-pink-200 to-purple-300",
      productDetails: [
        
          "Height: 10 ft",
          "Material: Teak wood & silk",
          "Includes fresh marigold flower decorations",
          "Customizable color theme to match wedding decor",
          "Portable and easy to assemble",
          "Intricate traditional carvings on pillars",
          "Can accommodate up to 8 people comfortably",
          "Perfect for both indoor and outdoor weddings",
          "Durable and reusable for multiple events",
          "Optional lighting setup for evening ceremonies"
        
    ]
    },
    {
      id: 5,
      title: "Superhero Party Decor",
      description: "Action-packed superhero themed decoration",
      image: "🦸",
      tags: ["Birthday"],
      rating: 4.5,
      colors: ["Blue", "Red", "Yellow"],
      priceStart: "₹250",
      priceRange: "₹250 - ₹600",
      gradient: "from-blue-200 to-red-300",
      productDetails: [
        
          "Height: 10 ft",
          "Material: Teak wood & silk",
          "Includes fresh marigold flower decorations",
          "Customizable color theme to match wedding decor",
          "Portable and easy to assemble",
          "Intricate traditional carvings on pillars",
          "Can accommodate up to 8 people comfortably",
          "Perfect for both indoor and outdoor weddings",
          "Durable and reusable for multiple events",
          "Optional lighting setup for evening ceremonies"
        
    ]
    },
    {
      id: 6,
      title: "Elegant Adult Birthday",
      description: "Sophisticated black and gold theme for adults",
      image: "🎂",
      tags: ["Popular", "Birthday"],
      rating: 4.8,
      colors: ["Black", "Gold", "White"],
      priceStart: "₹400",
      priceRange: "₹400 - ₹1,000",
        gradient: "from-gray-200 to-yellow-200",
      productDetails: [
        
          "Height: 10 ft",
          "Material: Teak wood & silk",
          "Includes fresh marigold flower decorations",
          "Customizable color theme to match wedding decor",
          "Portable and easy to assemble",
          "Intricate traditional carvings on pillars",
          "Can accommodate up to 8 people comfortably",
          "Perfect for both indoor and outdoor weddings",
          "Durable and reusable for multiple events",
          "Optional lighting setup for evening ceremonies"
        
    ]
    },
    {
      id: 7,
      title: "Golden Anniversary Setup",
      description: "Luxurious golden anniversary celebration",
      image: "👑",
      tags: ["Popular", "Anniversary"],
      rating: 4.9,
      colors: ["Gold", "Orange", "White"],
      priceStart: "₹1,500",
      priceRange: "₹1,500 - ₹3,000",
      gradient: "from-yellow-200 to-orange-300",
      productDetails: [
        
          "Height: 10 ft",
          "Material: Teak wood & silk",
          "Includes fresh marigold flower decorations",
          "Customizable color theme to match wedding decor",
          "Portable and easy to assemble",
          "Intricate traditional carvings on pillars",
          "Can accommodate up to 8 people comfortably",
          "Perfect for both indoor and outdoor weddings",
          "Durable and reusable for multiple events",
          "Optional lighting setup for evening ceremonies"
        
    ]
    },
    {
      id: 8,
      title: "Silver Jubilee Decor",
      description: "Classic silver themed decoration for 25th anniversary",
      image: "🏆",
      tags: ["Anniversary"],
      rating: 4.7,
      colors: ["Silver", "Blue", "White"],
      priceStart: "₹800",
      priceRange: "₹800 - ₹1,800",
      gradient: "from-gray-200 to-blue-200",
      productDetails: [
        
          "Height: 10 ft",
          "Material: Teak wood & silk",
          "Includes fresh marigold flower decorations",
          "Customizable color theme to match wedding decor",
          "Portable and easy to assemble",
          "Intricate traditional carvings on pillars",
          "Can accommodate up to 8 people comfortably",
          "Perfect for both indoor and outdoor weddings",
          "Durable and reusable for multiple events",
          "Optional lighting setup for evening ceremonies"
        
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
      <div className="relative text-white px-6 py-6 overflow-hidden" style={{background: 'linear-gradient(135deg, #2b6777 0%, #52ab98 50%, #c8d8e4 100%)'}}>
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
            <span className="text-3xl animate-bounce">🎉</span>
    
          </div>
          
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white animate-slide-up">
          Beautiful Decorations
        </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 text-white/95 animate-slide-up delay-200">
          For Every Celebration
        </p>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-300">
          Discover stunning decoration ideas for marriages, birthdays,
              anniversaries, naming ceremonies, and more. Transform your special moments into unforgettable memories.
        </p>
      </div>
        </div>
      </div>
      {/* Browse by Events Section */}
      <div className="py-12 px-6" style={{backgroundColor: '#f2f2f2'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="text-4xl">🎨</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#2b6777'}}>
              Browse by Event Type
            </h2>
            <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{color: '#2b6777'}}>
              Choose from our curated collection of decorations for different occasions. 
              Each design is crafted with love and attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden" style={{borderColor: '#52ab98'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg, #c8d8e4, #f2f2f2)'}}></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #2b6777, #52ab98)'}}>
                  <span className="text-3xl text-white">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{color: '#2b6777'}}>All Events</h3>
                <p className="text-base font-medium" style={{color: '#2b6777'}}>12 designs</p>
                <div className="mt-4 w-full rounded-full h-2" style={{backgroundColor: '#c8d8e4'}}>
                  <div className="h-2 rounded-full w-full" style={{background: 'linear-gradient(90deg, #2b6777, #52ab98)'}}></div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">💕</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">Marriage</h3>
                <p className="text-gray-600 text-base font-medium">3 designs</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-400 to-red-400 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🎂</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">Birthday</h3>
                <p className="text-gray-600 text-base font-medium">3 designs</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">👑</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">Anniversary</h3>
                <p className="text-gray-600 text-base font-medium">2 designs</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-indigo-400 h-2 rounded-full w-1/6"></div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">👶</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Naming Ceremony</h3>
                <p className="text-gray-600 text-base font-medium">2 designs</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-1/6"></div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">💍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">Engagement</h3>
                <p className="text-gray-600 text-base font-medium">1 design</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-400 to-rose-400 h-2 rounded-full w-1/12"></div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">Graduation</h3>
                <p className="text-gray-600 text-base font-medium">1 design</p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full w-1/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Find Your Perfect Decoration Section */}
      <div className="py-12 px-6" style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto shadow-lg" style={{background: 'linear-gradient(135deg, #2b6777, #52ab98)'}}>
                <span className="text-2xl text-white">🔍</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{color: '#2b6777'}}>
              Find Your Perfect Decoration
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{color: '#2b6777'}}>
              Search through our extensive collection and discover the perfect decoration for your special event
            </p>
          </div>
          
          <div className="rounded-2xl p-4 shadow-xl" style={{backgroundColor: '#f2f2f2', border: '1px solid #c8d8e4'}}>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 relative group">
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 transition-colors duration-300" style={{color: '#2b6777'}}>
                  <span className="text-2xl">🔍</span>
                </div>
                <input 
                  type="text" 
                  placeholder="Search decorations, themes, or styles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 rounded-xl text-base focus:outline-none focus:ring-4 transition-all duration-300 bg-white"
                  style={{borderColor: '#c8d8e4', focusRingColor: '#52ab98', focusBorderColor: '#2b6777'}}
                />
              </div>
              
              <div className="relative group">
                <select 
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="px-6 py-3 border-2 text-black border-gray-200 rounded-xl text-base focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-400 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer min-w-[180px]"
                >
                  <option>All Styles</option>
                  <option>Modern</option>
                  <option>Traditional</option>
                  <option>Vintage</option>
                  <option>Minimalist</option>
                  <option>Bohemian</option>
                  <option>Rustic</option>
                </select>
                <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300">
                  <span className="text-xl">▼</span>
                </div>
              </div>
              
              <button 
                onClick={clearFilters}
                className="group flex items-center gap-2 px-6 py-3 text-white rounded-md transition-all duration-300 text-xs" 
                style={{background: 'linear-gradient(90deg, #2b6777, #52ab98)'}}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">🔧</span>
                <span>Clear Filters</span>
              </button>
            </div>
            
            {/* Quick Search Tags */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600 mb-3 font-medium">Popular searches:</p>
              <div className="flex flex-wrap gap-3">
                {['Wedding Flowers', 'Birthday Balloons', 'Anniversary Candles', 'Baby Shower', 'Graduation Party', 'Engagement Ring'].map((tag, index) => (
                  <span 
                    key={index} 
                    onClick={() => setSearchTerm(tag)}
                    className="px-4 py-2 bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decoration Showcase Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Decoration Showcase
            </h2>
            <p className="text-xl mb-6" style={{color: '#2b6777'}}>
              {filteredDecorations.length} designs found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDecorations.map((decoration) => (
              <div key={decoration.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative">
                  <div className={`w-full h-64 bg-gradient-to-br ${decoration.gradient} flex items-center justify-center`}>
                    <span className="text-6xl">{decoration.image}</span>
                  </div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    {decoration.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`px-2 py-1 text-white text-xs font-semibold rounded-full ${
                          tag === 'Popular' ? 'bg-red-500' :
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
                        className={`px-2 py-1 text-xs rounded-full ${
                          color === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
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
                className="flex-1 text-white py-0.5 px-2 rounded-md transition-all duration-300 text-xs" 
                style={{background: 'linear-gradient(90deg, #2b6777, #52ab98)'}}
              >
                View Details →
              </button>
              <button className="px-2 py-0.5 text-white rounded-md transition-all duration-300 text-xs" style={{background: 'linear-gradient(90deg, #2b6777, #52ab98)'}}>
                Call Us
              </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 px-6" style={{background: 'linear-gradient(135deg, #2b6777 0%, #52ab98 50%, #c8d8e4 100%)'}}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 mb-8" style={{backgroundColor: 'rgba(43, 103, 119, 0.8)'}}>
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
            <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-lg" style={{color: '#2b6777'}}>
              Get Custom Quote
              <span className="text-lg">→</span>
            </button>
            <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg" style={{color: '#2b6777'}}>
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfItems;
