const CategoriesSection = () => {
    const categories = [
      {
        name: "Design",
        isActive: true,
        subcategories: ["Album Cover Design", "Book Design", "Brochure Design", "Cartoons & Comics", "Flyer Design"],
      },
      {
        name: "Video & Audio",
        isActive: false,
        subcategories: [],
      },
      {
        name: "Development & IT",
        isActive: false,
        subcategories: [],
      },
      {
        name: "Marketing",
        isActive: false,
        subcategories: [],
      },
      {
        name: "Writing & Translation",
        isActive: false,
        subcategories: [],
      },
      {
        name: "More",
        isActive: false,
        subcategories: [],
      },
    ]
  
    const subcategories = [
      ["Album Cover Design", "Book Design", "Brochure Design", "Cartoons & Comics", "Flyer Design"],
      ["AR Filters & Lenses", "Brand Style Guides", "Building Information Modeling", "Catalog Design", "Game Design"],
      [
        "Architecture & Interior Design",
        "Brand Voice & Tone",
        "Business Cards & Stationery Design",
        "Character Modeling",
        "Graphics for Streamers",
      ],
      ["Banner Ads", "Branding Services", "Car Wraps", "Fashion Design"],
    ]
  
    return (
      <div className="max-w-7xl font-inter mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
        <h1 className="text-4xl font-normal text-[#181818] mb-12">Browse all categories</h1>
  
        {/* Category Tabs */}
        <div className="border-b border-gray-200 mb-10">
          <nav className="-mb-px flex space-x-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`
                  whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-lg
                  ${
                    category.isActive
                      ? "border-[#676767] text-[#181818]"
                      : "border-transparent text-[#676767]   hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>
  
        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          {subcategories.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((subcategory, index) => (
                <a key={index} href="#" className="block text-sm text-[#181818] hover:text-blue-600 transition-colors">
                  {subcategory}
                </a>
              ))}
              {columnIndex === subcategories.length - 1 && (
                <a href="#" className="block text-sm text-[#5865F2] hover:text-blue-700 transition-colors">
                  View More 28
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default CategoriesSection
  
  