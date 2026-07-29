import React from 'react';
import { Smartphone, Clock } from 'lucide-react';
import Card, { CardContent } from '../../components/Card';

export default function MobileBanking() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-trust-50/50 rounded-xl flex items-center justify-center">
            <Smartphone className="w-8 h-8 text-trust-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-trust-900">Mobile Banking</h1>
            <p className="text-gray-600">Bank anytime, anywhere with our mobile app</p>
          </div>
        </div>

        <Card>
          <CardContent>
            <div className="text-center py-12">
              <Clock className="w-16 h-16 text-trust-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-trust-900 mb-2">VERY Shortly</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Mobile banking services will be available very shortly. Please check back later for updates.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
