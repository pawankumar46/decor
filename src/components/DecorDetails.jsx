import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import pic1Birth from '../assets/Birthday/pic1.jpeg'
import pic2Birth from '../assets/Birthday/pic2.jpeg'
import pic1Bs from '../assets/BabyShower/pic1.jpeg'
import pic2Bs from '../assets/BabyShower/pic2.jpeg'

const DecorDetails = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Get decoration data from navigation state or use default
  const decorationData = location.state?.decoration || {
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
  }

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  
  // Check if this is Honganasu Party Hall for detailed view
  const isHonganasuHall = decorationData.title === "Honganasu Party Hall"
  
  // Sample gallery images (in a real app, this would come from the decoration data)
  const galleryImages = isHonganasuHall ? [
    decorationData.image,
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq8Tmz1mTXD3FAdbhQCTGfOLz8GTl9yNYl3U_f620IMLP0QQPjo5dYx4UrgicGO_LqOUvw-9YYbazIuLWNAXmtTDWyjZyIv7lXPajFDvwXjQ2kuCB9uueaq-UdIiqEyj0bnR4c=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nptwBjwQkdIbu9OS_T1Ed02dFc_FWbcUvQ4q4O816oUQXPq4ls3uP2iHNp6XcD2dr6_pmqukYvj8Lm4MpRrhQUvAoUJJA1sIlpyTQeY-IRJpjMLb1pGavxA3h8jCp2Hh6QBQnB-=s1360-w1360-h1020-rw",
    pic1Birth,
    pic1Bs,
    pic2Birth,
    pic2Bs,
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqNgRR56RoR32Inf4wctJB2Np4yUZVvfqY3mXnKkgP0NNVzibTcHgrn6J4gb0BapQy2QP2nSITg6_S1Xmr21z01MDrFA1LK-DygwgH0GRtUECeTaC04zAnltE3lFq6GunhSjF1c=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqkntEOA5XerfhKj4n9Xz5nyljBZb9Plmh0YVhjZBcsOjaMzvjbm5mc-4t9Wtkjbbmp64B7yjKlUGhhPV1LLwE0xoe85ZCVct_xuQqwr3ggkV018XTr7MPNGtUTZOy4pD43W1BD=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noLsxW0J0XggkSR4z8HikfJ73fH725lzivCYJBrw-rnKlt4x4KgfDdqmRiaEBMA1awAdhfR5wx4VWdij4oIUK34Lyxj8cqWMbWvso_nPzrWOggyy0m7s8NtVpu1JdaBfePouiA4eQ=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npnzqq-dL3zUeckLHIVheN4xWFyvGAgqTTr-vAwEJqki1je8DkpN6jlWbU-O7aCw551vGLHStxjFzU4LOUvuEmZ1QO9dBDCj_CplqxEyP5_uEmbNxyAE34sUQZK2vD54f1UD5ELrQ=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrplT8uFiTYl_Iiqc2iRD1bZ5VCx25KYN20-plA1bkfJ_Q5jTmooOghyU9YqK5-U9mx_cQskF-rtGsT6q8rGePl7ofX4TA9P6ge9bVDNEiKHWpoU6r8XYRDQE3CeiF3B2nWww1fNA=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqK2o8ZQNplwwSczk6oVAHTZTz5H0E8vfcRtAdx7HwZq8FtMTag9bbbhGhtkqR6a9rNVDpfQ3IRoGDUuVcW98fJbNQgZ_wtngiv9cJRy2KJqg-WjiopiKqYbwX6Qd-6YWiUs0Vh=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqV5R5GQdNd4UnERvv8ZR2H-Jf_y8N-BAUZXxO1y1uVLpoRkWSYv3EyNdHjHJFQsz_PfqEkEBHxtdIcQxNLdTG9Anqls4EWudaK59iXOG9MlCEt-2duoLxmZjIN3R0Kjan_LWU87Tsza-I=s1360-w1360-h1020-rw",

  ] : [decorationData.image]

  const handleBackClick = () => {
    navigate(-1) // Go back to previous page
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-700 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h1 className="text-2xl font-bold text-gray-800">{decorationData.title}</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Photos and Carousel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Main Photo Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={galleryImages[selectedImageIndex]}
                  alt={decorationData.title}
                  className="w-full h-100 object-cover"
                />
              </div>
            </div>

            {/* Carousel Section - Only show for Honganasu Party Hall */}
            {isHonganasuHall && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Gallery</h3>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        selectedImageIndex === index 
                          ? 'border-blue-500 ring-2 ring-blue-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Description and Tags */}
          <div className="space-y-6">
            
            {/* Description Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {decorationData.description}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(decorationData.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {decorationData.rating} rating
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Decorations starting from</p>
                <p className="text-2xl font-bold text-gray-800">{decorationData.priceStart}</p>
                <p className="text-sm text-gray-500">Full range: {decorationData.priceRange}</p>
              </div>

              {/* Product Details - Only show for Honganasu Party Hall */}
              {isHonganasuHall ? (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {decorationData.productDetails.map((detail, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Note:</span> Detailed information and gallery are currently not available for this Venue. Contact us for more details about this decoration.
                  </p>
                </div>
              )}
            </div>

            {/* Tags Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags of Decoration</h3>
              
              {/* Event Tags */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Event Types:</h4>
                <div className="flex flex-wrap gap-2">
                  {decorationData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        tag === 'Popular' ? 'bg-red-100 text-red-800' :
                        tag === 'Wedding' ? 'bg-purple-100 text-purple-800' :
                        tag === 'Birthday' ? 'bg-orange-100 text-orange-800' :
                        tag === 'Anniversary' ? 'bg-purple-100 text-purple-800' :
                        tag === 'Modern Style' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Tags */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Color Palette:</h4>
                <div className="flex flex-wrap gap-2">
                  {decorationData.colors.map((color, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
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
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(90deg, #2b6777, #52ab98)' }}
                >
                  {isHonganasuHall ? 'Book This Decoration' : 'Contact for Details'}
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3 px-4 rounded-lg font-semibold border-2 transition-all duration-300"
                  style={{ 
                    borderColor: '#2b6777', 
                    color: '#2b6777',
                    backgroundColor: 'transparent'
                  }}
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DecorDetails