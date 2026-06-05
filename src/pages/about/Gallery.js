import React, { useState } from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'branches', name: 'Branches' },
    { id: 'awards', name: 'Awards' },
    { id: 'community', name: 'Community' }
  ];

  const galleryItems = [
    { id: 1, title: 'Annual Banking Summit', category: 'events', description: 'Our leadership team at the Banking Summit', image: '/images/gallery/event_1.jpg' },
    { id: 2, title: 'Banking Conference', category: 'events', description: 'Participating in national banking conference', image: '/images/gallery/event_2.jpg' },
    { id: 3, title: 'Board Meeting', category: 'events', description: 'Strategic planning session with board of directors', image: '/images/gallery/event_3.jpg' },
    { id: 4, title: 'Administrative Office', category: 'branches', description: 'Our administrative office building', image: '/images/gallery/branch_1.jpg' },
    { id: 5, title: 'Branch Interior', category: 'branches', description: 'Modern banking facilities at our branch', image: '/images/gallery/branch_2.jpg' },
    { id: 6, title: 'Customer Service', category: 'branches', description: 'Dedicated customer service counters', image: '/images/gallery/branch_3.jpg' },
    { id: 7, title: 'Best Bank Award', category: 'awards', description: 'Receiving prestigious cooperative bank award', image: '/images/gallery/award_1.jpg' },
    { id: 8, title: 'Excellence Award', category: 'awards', description: 'Recognition for outstanding banking services', image: '/images/gallery/award_2.jpg' },
    { id: 9, title: 'Financial Literacy Camp', category: 'community', description: 'Educating rural communities about banking', image: '/images/gallery/community_1.jpg' },
    { id: 10, title: 'Tree Plantation Drive', category: 'community', description: 'Environmental initiative by bank employees', image: '/images/gallery/community_2.jpg' },
    { id: 11, title: 'Blood Donation Camp', category: 'community', description: 'Corporate social responsibility initiative', image: '/images/gallery/community_3.jpg' },
    { id: 12, title: 'Community Outreach', category: 'community', description: 'Engaging with local communities', image: '/images/gallery/community_3.jpg' }
  ];

  const filteredGallery = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Gallery</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore our journey through these memorable moments that showcase our commitment to excellence, 
          community service, and innovation in banking.
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
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl text-gray-400">📷</div>';
                }}
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-trust-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
              <div className="mt-2">
                  <span className="text-xs bg-trust-100 text-trust-800 px-2 py-1 rounded-full">
                  {categories.find(c => c.id === item.category)?.name}
                </span>
              </div>
            </CardContent>
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
                src={`${process.env.PUBLIC_URL}/images/gallery/featured.jpg`}
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
