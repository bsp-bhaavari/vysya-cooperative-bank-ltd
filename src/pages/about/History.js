import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const History = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Our History</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Vysya Co-operative Bank Limited is a leading Urban Co-operative Bank in the State, 
            functioning with its Administrative Office at TUMKUR. The Bank is promoted by the Vysya 
            Community of Tumkur city and was established in the Year 1978.
          </p>
          <p>
            Vysya Co-operative Bank Ltd was incorporated in 1978 by registering at Mysore, State Co-operative 
            Registrar Office with Register No. 270 with 275 members and authorized capital of ₹5.00 
            lakhs. In the beginning years, Vysya Co-operative Bank Ltd carried out its banking operation under the guidance 
            of Bangalore Grain Merchant Co-operative Bank Limited.
          </p>
          <p>
            Shri. Sampangiram.T.A. is the founder chairman of Vysya Co-operative Bank Ltd.
          </p>
          <p>
            Bank has made considerable progress between 1986 and till now, when there were only 256 
            members having Share capital of ₹1,35,000. Since then, there is considerable increase of 
            members joining the bank. Now it has Over 11885 Members. Bank celebrated its 44th Anniversary 
            in 2020.
          </p>
          <p>
            Vysya Co-operative Bank Ltd is a fully computerized Bank in Tumkur and Bank is offering good services to its 
            customers and Bank is increasing its profit over the years.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Branch Expansion</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-700">
            <li>• In 1992, opened 1st Branch at APMC Yard Branch, Tumkur</li>
            <li>• 2nd branch at SIT (Vijay Nagar) Extension, Tumkur</li>
            <li>• 3rd branch at Pavagada</li>
            <li>• 4th Branch at Madhugiri</li>
            <li>• 5th branch at APMC Yard, Yesvanthpur, Bangalore</li>
            <li>• 6th branch at BVK Iyengar Road (Chickpet) Branch, Bangalore</li>
            <li>• 7th New Mysore Branch at #424, Old Santhepet, Mysore-570024</li>
            <li>• In 2005, Administrative Office opened in its own building on BH Road, Tumkur</li>
            <li>• Vijayanagara (SIT Extension) Branch shifted to its New own Building at SIT Main Road, Tumkur</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Areas of Operation</CardTitle>
        </CardHeader>
        <CardContent>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Tumkur</li>
              <li>Bangalore Urban and Rural</li>
              <li>Mysore</li>
              <li>Chamarajanagara</li>
              <li>Ramanagara</li>
              <li>Chikkaballapura</li>
              <li>Kolar</li>
              <li>Hassan</li>
              <li>Mandya</li>
              <li>Chitradurga</li>
            </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financial position at end of first year (31-03-1978)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-gray-700">
            <li>• No. of Members: 503</li>
            <li>• Share Capital: ₹1.73 Crores</li>
            <li>• Deposits: ₹1.86 Crores</li>
            <li>• Loans & Advances: ₹1.62 Crores</li>
            <li>• Net Profit: ₹0.20 Crores</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regulatory Information</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-gray-700">
            <li>• RBI Licence No: UBD: KA 634 P</li>
            <li>• GSTIN: 29AAAJV0024D1ZG</li>
            <li>• PAN: AAAJV0024D</li>
            <li>• TAN Numbers:</li>
          </ul>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full text-sm text-gray-700 border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-3 py-1 text-left">Code</th>
                  <th className="border px-3 py-1 text-left">Branch</th>
                  <th className="border px-3 py-1 text-left">TAN</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-3 py-1">1001</td><td className="border px-3 py-1">Administrative Office Br</td><td className="border px-3 py-1">BLRV08288A</td></tr>
                <tr><td className="border px-3 py-1">1002</td><td className="border px-3 py-1">Head Office Br</td><td className="border px-3 py-1">BLRV02446D</td></tr>
                <tr><td className="border px-3 py-1">1003</td><td className="border px-3 py-1">APMC Yard Br,Tkr</td><td className="border px-3 py-1">BLRV05133C</td></tr>
                <tr><td className="border px-3 py-1">1004</td><td className="border px-3 py-1">Vijayanagar(SIT) Extn. Br,Tkr</td><td className="border px-3 py-1">BLRV05131A</td></tr>
                <tr><td className="border px-3 py-1">1005</td><td className="border px-3 py-1">Pavagada Br</td><td className="border px-3 py-1">BLRV05134D</td></tr>
                <tr><td className="border px-3 py-1">1006</td><td className="border px-3 py-1">Madhugiri Br</td><td className="border px-3 py-1">BLRV05132B</td></tr>
                <tr><td className="border px-3 py-1">1007</td><td className="border px-3 py-1">APMC Yard Br,Bng</td><td className="border px-3 py-1">BLRV05102G</td></tr>
                <tr><td className="border px-3 py-1">1008</td><td className="border px-3 py-1">BVK Iyengar Rd Br,Bng</td><td className="border px-3 py-1">BLRV05101F</td></tr>
                <tr><td className="border px-3 py-1">1009</td><td className="border px-3 py-1">Mysuru Branch</td><td className="border px-3 py-1">BLRV12979B</td></tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default History;
