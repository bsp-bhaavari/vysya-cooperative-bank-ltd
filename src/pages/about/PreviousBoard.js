import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';
import Table from '../../components/Table';

const previousBoardMembers = [
  ['Sri K.N.Govindaraju', 'President'],
  ['CA Ramamurthy.K.S. B.Com., FCA, DISA (ICAI)', 'Vice President'],
  ['Sri K.P.Suresh', 'Director'],
  ['CA Nagasundar.M. B.Com., FCA, DISA (ICAI)', 'Director'],
  ['Sri B.S.Lokanath', 'Director'],
  ['Sri Prasoon Makam T.S.', 'Director'],
  ['Sri N.V.Balaji', 'Director'],
  ['Sri Arun Kumar N.A', 'Director'],
  ['Sri Venkataraju.K', 'Director'],
  ['Sri Lakshmikantha Setty B.A.', 'Director'],
  ['Sri Narasimha Murthy T', 'Director'],
  ['Sri Rajashekar K.R.', 'Director'],
  ['Sri Sanjay.C.S.', 'Director'],
  ['Sri Lakshmipathi D.L.', 'Director'],
  ['Sri Parthasarathy T.A.', 'Director'],
  ['Sri Raghavendra L.A.', 'Director'],
  ['Sri Kanakalakshmi C.B.', 'Director'],
  ['Smt. Geetha Balaraju', 'Director'],
  ['Smt. Suma S.', 'C.E.O']
];

const foundingBoardMembers = [
  ['Sampangi Ramu.T.A.', 'President'],
  ['Shashikumar.T.S.', 'Vice-President'],
  ['Nagendra Prasad.N.S.', "Hon'ble Secretary"],
  ['Gurappa Setty.M.K.', 'Director'],
  ['Janardhan.K.V.', 'Director'],
  ['Manjunath.T.A.', 'Director'],
  ['Mohan Kumar.C.R.', 'Director'],
  ['Narasimha.N.S.', 'Director'],
  ['Rajagopala Setty.N.S.', 'Director'],
  ['Subbaraju.N.A.', 'Director'],
  ['Ashok Kumar.T.V.', 'Director'],
  ['Neelakanta Setty M.V.', 'Director']
];

const PreviousBoard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Previous Board of Directors</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We honor and remember our former board members who have contributed immensely to the growth and 
          success of Vysya Co-operative Bank Ltd., Their vision, leadership, and dedication have laid the strong 
          foundation on which we continue to build and serve our community.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardHeader>
          <CardTitle>Tribute to Our Leaders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            The success of Vysya Co-operative Bank Ltd., today stands on the shoulders of exceptional leaders 
            who guided us through various phases of growth. Their commitment to cooperative banking principles 
            and community service continues to inspire our current leadership team.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Legacy of Excellence</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-trust-600 mb-2">48+</div>
              <p className="text-gray-600">Years of Banking Service</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 mb-2">1 AO + 8</div>
              <p className="text-gray-600">Branches Across Tumkur, Bangalore, Mysuru</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-trust-600 mb-2">25000+</div>
              <p className="text-gray-600">Customers Trusting with us</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Previous Board of Directors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table
              headers={['Name', 'Designation']}
              rows={previousBoardMembers}
            />
          </div>
        </CardContent>
      </Card>

      <div className="pt-4 border-t-2 border-gray-200">
        <Card>
          <CardHeader>
            <CardTitle>Board of Directors at the time of establishment (1978)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table
                headers={['Name', 'Designation']}
                rows={foundingBoardMembers}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PreviousBoard;
