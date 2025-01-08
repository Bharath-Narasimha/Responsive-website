import React, { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navItems = [
    { label: "Home", submenu: ["Overview", "New Arrivals", "Trending", "Offers", "Best Sellers"] },
    { 
      label: "Living", 
      submenu: ["TV Units", "Box Shelves", "Shoe Rack", "Dressing Table", "Wardrobes"] 
    },
    { 
      label: "Storage", 
      submenu: ["Bookshelves", "Chest of Drawers", "Cabinets", "Sideboards", "Wardrobes"] 
    },
    { 
      label: "Dining", 
      submenu: ["Dining Tables", "Dining Chairs", "Bar Cabinets", "Sideboards", "Dining Sets"] 
    },
    { 
      label: "Bedroom", 
      submenu: ["Beds", "Wardrobes", "Nightstands", "Dressers", "Headboards"] 
    },
    { 
      label: "Mattress", 
      submenu: ["Foam Mattress", "Spring Mattress", "Orthopedic Mattress", "King Size", "Queen Size"] 
    },
    { 
      label: "Study", 
      submenu: ["Study Tables", "Chairs", "Bookshelves", "Desk Organizers", "Table Lamps"] 
    },
    { 
      label: "Office", 
      submenu: ["Office Chairs", "Workstations", "Filing Cabinets", "Conference Tables", "Desk Accessories"] 
    },
    { 
      label: "Outdoor", 
      submenu: ["Patio Sets", "Outdoor Chairs", "Garden Tables", "Hammocks", "Outdoor Umbrellas"] 
    },
  ];
  

  return (
    <nav className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4 rounded-none h-[115px] w-[1452px]">
        <button>
          <img
            src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736318152/Vector_r9bh6e.png"
            alt="Logo"
            className="h-[151px] w-[150px]"
          />
        </button>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 list-none">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="hover:text-yellow-500 flex flex-row items-center font-bold">
                {item.label} <img src='https://res.cloudinary.com/dhhhojjlp/image/upload/v1736318151/Frame_f7ldka.png' alt='arrow'/>
              </button>
               
              {/* Dropdown */}
              {item.submenu.length > 0 && openMenu === item.label && (
                <ul className="absolute top-full mt-2 bg-white text-black rounded shadow-lg list-none">
                  {item.submenu.map((subItem) => (
                    <li key={subItem}>
                      <button className="block px-4 py-2 hover:bg-gray-200">
                        {subItem}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
          {/* Search Icon */}
          <button>
            <img
              src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736318152/search_twdwam.png"
              alt="Search"
              className="h-6 w-6"
            />
          </button>
          {/* Profile Icon */}
          <button>
            <img
              src="https://res.cloudinary.com/dhhhojjlp/image/upload/v1736318151/profile_illudk.png"
              alt="Profile"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
