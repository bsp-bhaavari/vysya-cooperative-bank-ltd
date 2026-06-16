import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const Branches = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Our Branch Network</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Administrative Office</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-gray-700">
            <p>Dr. Sri Shivakumara Swamiji Circle, BH Road, Tumkur-572102</p>
            <p>Phone: 0816-2279934 | Email: ao@vcbltkr.bank.in</p>
            <p>GSTIN: 29AAAJV0024D1ZG | PAN: AAAJV0024D</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Head Office</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-gray-700">
            <p>Brindavan Complex, Vivekananda Road, Tumkur-572101</p>
            <p>Phone: 0816-2278760, 2279846 | Fax: 2254161 | Email: ho@vcbltkr.bank.in</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>APMC Yard Branch (Tumkur)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-gray-700">
            <p>Dr. Sri Shivakumara Swamiji Circle, B.H. Road, Tumkur-572102</p>
            <p>Phone: 0816-2252630 | Email: apmc@vcbltkr.bank.in</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vijaynagar (SIT) Extension Branch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-gray-700">
            <p>Next to 9th Cross, SIT Main Road, Tumkur-572102</p>
            <p>Phone: 0816-2274360 | Email: sit@vcbltkr.bank.in</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pavagada Branch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-gray-700">
            <p>Kuvempu Road, Pavagada-561202</p>
            <p>Phone: 08136-244816 | Email: pavagada@vcbltkr.bank.in</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Madhugiri Branch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-gray-700">
            <p>T.V.V. Circle, Madhugiri-572132</p>
            <p>Phone: 08137-283221 | Email: madhugiri@vcbltkr.bank.in</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>APMC Yard Branch (Bangalore/Yesvanthpur)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-gray-700">
            <p>106, 4th Main, APMC, Yeswanthpur, Bengaluru-560022</p>
            <p>Phone: 080-41471670 | Email: apmcb@vcbltkr.bank.in</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>BVK Iyengar Road Branch (Chickpet)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-gray-700">
            <p>#349, Komarla Towers, 2nd Floor, Balepete Circle, OTC Road, Bengaluru-560053</p>
            <p>Phone: 080-22389263 | Email: bvk@vcbltkr.bank.in</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mysore Branch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-gray-700">
            <p>#424, Old Santhepet, Mysore-570024</p>
            <p>Phone: 0821-2429595, 7349610238 | Email: mysuru@vcbltkr.bank.in</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Branches;
