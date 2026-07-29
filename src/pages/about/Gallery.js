import React, { useState } from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'awards', name: 'Awards' },
    { id: 'events', name: 'Events' },
    { id: 'branches', name: 'Branches' },
    { id: 'community', name: 'Community' }
  ];

  const galleryItems = [
    { id: 1, title: 'Photo 1', category: 'awards', description: 'Award recognition photograph', image: '/images/gallery/placeholder_1.svg' },
    { id: 2, title: 'Photo 2', category: 'awards', description: 'Award ceremony moment', image: '/images/gallery/placeholder_2.svg' },
    { id: 3, title: 'Photo 3', category: 'awards', description: 'Recognition event photograph', image: '/images/gallery/placeholder_3.svg' },
    { id: 4, title: 'Photo 4', category: 'awards', description: 'Celebrating achievement', image: '/images/gallery/placeholder_4.svg' },
    { id: 5, title: 'Photo 5', category: 'events', description: 'Banking event photograph', image: '/images/gallery/placeholder_5.svg' },
    { id: 6, title: 'Photo 6', category: 'events', description: 'Conference photograph', image: '/images/gallery/placeholder_6.svg' },
    { id: 7, title: 'Photo 7', category: 'branches', description: 'Branch office photograph', image: '/images/gallery/placeholder_7.svg' },
    { id: 8, title: 'Photo 8', category: 'branches', description: 'Branch interior view', image: '/images/gallery/placeholder_8.svg' },
    { id: 9, title: 'Photo 9', category: 'community', description: 'Community outreach event', image: '/images/gallery/placeholder_9.svg' },
    { id: 10, title: 'Photo 10', category: 'community', description: 'CSR initiative photograph', image: '/images/gallery/placeholder_10.svg' }
  ];

  const filteredGallery = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Awards & Gallery</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore our journey through these memorable moments that showcase our commitment to excellence, 
          community service, and innovation in banking.
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-semibold text-trust-900 mb-2">Our Recognitions</h2>
        <p className="text-gray-700 leading-relaxed">
          We take pride in the awards and recognitions we have received over the years. 
          Browse through the photographs below that capture these proud moments and celebrate our commitment to excellence in banking.
        </p>
      </div>

      <Card>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-trust-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredGallery.map((item) => (
          <Card key={item.id} className="overflow-hidden group cursor-pointer">
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={`${process.env.PUBLIC_URL}${item.image}`}
                alt={`Gallery ${item.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl text-gray-400">📷</div>';
                }}
              />
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-trust-50/50 to-gold-50/50">
        <CardHeader>
          <CardTitle>Featured Moments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/gallery/placeholder_1.svg`}
                alt="Featured"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <h4 className="font-semibold text-trust-900 mb-2">Award Excellence</h4>
              <p className="text-sm text-gray-600">
                Recognized for outstanding banking services and customer satisfaction
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-trust-50/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🌱</span>
              </div>
              <h4 className="font-semibold text-trust-900 mb-2">Community Impact</h4>
              <p className="text-sm text-gray-600">
                Making a difference through various social initiatives
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-trust-50/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="font-semibold text-trust-900 mb-2">Digital Innovation</h4>
              <p className="text-sm text-gray-600">
                Leading the way in digital banking transformation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;
