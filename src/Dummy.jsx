import React, { useState } from "react";

// Data for dropdown
const dropdownItems = [
  {
    label: "Electronics",
    value: "electronics",
    subItems: [
      {
        label: "Mobile Phones",
        value: "mobile_phones",
        subItems: [
          { label: "Apple", value: "apple" },
          { label: "Samsung", value: "samsung" },
        ],
      },
      {
        label: "Laptops",
        value: "laptops",
        subItems: [
          { label: "MacBook", value: "macbook" },
          { label: "Dell", value: "dell" },
        ],
      },
      {
        label: "Tablets",
        value: "tablets", // Simple item without nested dropdown
      },
    ],
  },
  {
    label: "Clothing",
    value: "clothing",
    subItems: [
      { label: "Men", value: "men" },
      { label: "Women", value: "women" },
    ],
  },
  {
    label: "Books",
    value: "books", // No nested dropdown for this item
  },
  {
    label: "Furniture",
    value: "furniture",
    subItems: [
      {
        label: "Living Room",
        value: "living_room",
        subItems: [
          { label: "Sofa", value: "sofa" },
          { label: "Coffee Table", value: "coffee_table" },
        ],
      },
    ],
  },
];

// Recursive DropdownItem Component
const DropdownItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="text-pink-400">
      {item.subItems ? (
        <>
          <button onClick={handleToggle}>
            {item.label} {isOpen ? "▲" : "▼"}
          </button>
          {isOpen && (
            <ul style={{ paddingLeft: "20px" }}>
              {item.subItems.map((subItem) => (
                <DropdownItem key={subItem.value} item={subItem} />
              ))}
            </ul>
          )}
        </>
      ) : (
        <span className="text-blue-500">{item.label} jbbhjvfg</span>
      )}
    </li>
  );
};

// Main Dropdown Component
const Dropdown = ({ items }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {items.map((item) => (
        <DropdownItem key={item.value} item={item} />
      ))}
    </ul>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <h1>Dropdown with Nested Items</h1>
      <Dropdown items={dropdownItems} />
    </div>
  );
};

export default App;
