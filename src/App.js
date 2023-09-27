import React, { useState, useEffect } from 'react';
import ContactForm from './Component/ContactForm';
import ProductList from './Component/ProductList';

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const bannerText = "Fresh 2022 look";

  useEffect(() => {
    // Fetch menu data
    // You can fetch this data from a server or use your given array directly.
    const navbar = [
      { name: 'Home', id: 'home' },
      { name: 'About', id: 'about' },
      {
        name: 'Our Products',
        id: 'product',
        child: [
          { name: 'Product 1', id: 'p1' },
          { name: 'Product 2', id: 'p2' },
          { name: 'Product 3', id: 'p3' },
          { name: 'Product 4', id: 'p4' },
        ],
      },
      { name: 'Contact Us', id: 'contact' },
    ];

    setMenuItems(navbar);
  }, []);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#0222b0" }}>
      <div className="container-fluid">
        <a className="navbar-brand rounded-3" href="#" style={{ color: 'white',background:"#080187",border:"1px solid white",fontSize:"16px",padding:"5px" }}>
          {bannerText}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuItems.map((menuItem) => (
              <li className="nav-item dropdown" key={menuItem.id}>
                <a
                  className={`nav-link ${menuItem.child ? 'dropdown-toggle' : ''}`}
                  href={`#${menuItem.id}`}
                  id={`nav-${menuItem.id}`}
                  role="button"
                  data-bs-toggle={menuItem.child ? 'dropdown' : ''}
                  aria-expanded="false"
                  style={{ color: 'white' }}
                >
                  {menuItem.name}
                </a>
                {menuItem.child && (
                  <ul className="dropdown-menu" aria-labelledby={`nav-${menuItem.id}`}>
                    {menuItem.child.map((childItem) => (
                      <li key={childItem.id}>
                        <a className="dropdown-item" href={`#${childItem.id}`}>
                          {childItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
    
        </div>
      </div>
    </nav>
    <ContactForm />
    <ProductList />
    </>
  );
};

export default App;
