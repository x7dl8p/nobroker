import React from 'react';
import './Styles/RelatedLinks.css';

function RelatedLinks() {
  const links = [
    { id: 1, text: 'Link 1', href: '#' },
    { id: 2, text: 'Link 2', href: '#' },
    { id: 3, text: 'Link 3', href: '#' },
    { id: 4, text: 'Link 4', href: '#' },
  ];

  return (
    <div className="related-links-container">
      <div className="card">
        <div className="p-6">
          <h2 className="text-2xl font-semibold gradient-title mb-6">
            Related Links
          </h2>
          <ul className="links-list">
            {links.map((link) => (
              <li key={link.id} className="link-item">
                <a
                  href={link.href}
                  className="link"
                >
                  <span className="icon">
                    {link.id}
                  </span>
                  <span className="link-text">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RelatedLinks;