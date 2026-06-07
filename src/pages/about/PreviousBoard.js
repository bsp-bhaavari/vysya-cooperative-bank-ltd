import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const previousBoardMembers = [
  { name: "Sri K.N.Govindaraju", designation: "President" },
  { name: "CA Ramamurthy.K.S. B.Com., FCA, DISA (ICAI)", designation: "Vice President" },
  { name: "Sri K.P.Suresh", designation: "Director" },
  { name: "Sri M.Nagasundar B.Com.", designation: "Director" },
  { name: "Sri B.S.Lokanath", designation: "Director" },
  { name: "Sri Prasoon Makam T.S.", designation: "Director" },
  { name: "Sri N.V.Balaji", designation: "Director" },
  { name: "Sri Arun Kumar N.A", designation: "Director" },
  { name: "Sri Venkataraju.K", designation: "Director" },
  { name: "Sri Lakshmikantha Setty B", designation: "Director" },
  { name: "Sri Narasimha Murthy T", designation: "Director" },
  { name: "Sri Rajashekar K.R.", designation: "Director" },
  { name: "Sri Sanjay.C.S.", designation: "Director" },
  { name: "Sri Lakshmipathi D.L.", designation: "Director" },
  { name: "Sri Parthasarathi T.A.", designation: "Director" },
  { name: "Sri Raghavendra L.A.", designation: "Director" },
  { name: "Sri Kanakalakshmi C.B.", designation: "Director" },
  { name: "Smt. Geetha Balaraju", designation: "Director" },
  { name: "Smt. Suma S.", designation: "C.E.O" }
];

const getRowClass = (designation, index) => {
  const base = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
  if (designation === 'President') return `${base} bg-blue-50 border-l-4 border-l-blue-600`;
  if (designation === 'Vice President') return `${base} bg-blue-50 border-l-4 border-l-blue-600`;
  if (designation === 'C.E.O') return `${base} bg-amber-50 border-l-4 border-l-amber-500`;
  return `${base}`;
};

const PreviousBoard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Previous Board Members</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We honor and remember our former board members who have contributed immensely to the growth and 
          success of Vysya Co-operative Bank. Their vision, leadership, and dedication have laid the strong 
          foundation on which we continue to build and serve our community.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardHeader>
          <CardTitle>Tribute to Our Leaders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            The success of Vysya Co-operative Bank today stands on the shoulders of exceptional leaders 
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
              <p className="text-gray-600">Years of Service</p>
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

      <div>
        <h2 className="text-2xl font-bold text-trust-900 mb-6">Board Members List</h2>
        <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-900 border-b-4 border-amber-500">
                <th className="text-left py-4 px-6 text-white font-bold text-base w-3/5">Name</th>
                <th className="text-left py-4 px-6 text-white font-bold text-base w-2/5">Designation</th>
              </tr>
            </thead>
            <tbody>
              {previousBoardMembers.map((member, index) => (
                <tr key={index} className={`${getRowClass(member.designation, index)} border-b border-gray-100`}>
                  <td className="py-4 px-6 font-semibold text-gray-900 text-base">{member.name}</td>
                  <td className="py-4 px-6 text-gray-600 text-sm">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden space-y-3">
          {previousBoardMembers.map((member, index) => (
            <div key={index} className={`${getRowClass(member.designation, index)} rounded-lg border border-gray-200 p-4 shadow-sm`}>
              <p className="font-semibold text-gray-900 text-base">{member.name}</p>
              <p className="text-gray-600 text-sm mt-1">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousBoard;
