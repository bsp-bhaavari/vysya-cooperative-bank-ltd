import React from 'react';
import Card from '../../components/Card';

const galleryItems = [
  { id: 1, image: '/images/gallery/photo_1.jpeg' },
  { id: 2, image: '/images/gallery/photo_2.jpeg' },
  { id: 3, image: '/images/gallery/photo_3.jpeg' },
  { id: 4, image: '/images/gallery/photo_4.jpeg' },
  { id: 5, image: '/images/gallery/photo_5.jpeg' },
  { id: 6, image: '/images/gallery/photo_6.jpeg' },
  { id: 7, image: '/images/gallery/photo_7.jpeg' },
  { id: 8, image: '/images/gallery/photo_8.jpeg' },
  { id: 9, image: '/images/gallery/photo_9.jpeg' },
  { id: 10, image: '/images/gallery/photo_10.jpeg' }
];

const Gallery = () => {
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

      <h2 className="text-2xl font-bold text-trust-900">All Photos</h2>

      <div className="grid grid-cols-1 gap-8">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
              <img
                src={`${process.env.PUBLIC_URL}${item.image}`}
                alt={`Gallery ${item.id}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl text-gray-400">📷</div>';
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
