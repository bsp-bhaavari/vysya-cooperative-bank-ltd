import React from 'react';
import { Phone, Mail, MapPin, Building } from 'lucide-react';
import Card, { CardContent } from '../components/Card';

const Contact = () => {
  const branches = [
    {
      name: 'Administrative Office',
      address: 'Dr. Sri Shivakumara Swamiji Circle, BH Road, Tumkur-572102',
      phone: '0816-2279934',
      email: 'ao@vcbltkr.bank.in'
    },
    {
      name: 'Head Office',
      address: 'Brindavan Complex, Vivekananda Road, Tumkur-572101',
      phone: '0816-2278760, 2279846',
      email: 'ho@vcbltkr.bank.in'
    },
    {
      name: 'APMC Yard Branch (Tumkur)',
      address: 'Dr. Sri Shivakumara Swamiji Circle, B.H. Road, Tumkur-572102',
      phone: '0816-2252630',
      email: 'apmc@vcbltkr.bank.in'
    },
    {
      name: 'Vijaynagar (SIT) Extension Branch',
      address: 'Next to 9th Cross, SIT Main Road, Tumkur-572102',
      phone: '0816-2274360',
      email: 'sit@vcbltkr.bank.in'
    },
    {
      name: 'Pavagada Branch',
      address: 'Kuvempu Road, Pavagada-561202',
      phone: '08136-244816',
      email: 'pavagada@vcbltkr.bank.in'
    },
    {
      name: 'Madhugiri Branch',
      address: 'T.V.V. Circle, Madhugiri-572132',
      phone: '08137-283221',
      email: 'madhugiri@vcbltkr.bank.in'
    },
    {
      name: 'APMC Yard Branch (Bangalore/Yeshwanthpur)',
      address: '106, 4th Main, APMC, Yeswanthpur, Bengaluru-560022',
      phone: '080-23479575',
      email: 'apmcb@vcbltkr.bank.in'
    },
    {
      name: 'BVK Iyengar Road Branch (Chickpet)',
      address: '#349, Komarla Towers, 2nd Floor, Balepete Circle, OTC Road, Bengaluru-560053',
      phone: '080-22389263',
      email: 'bvk@vcbltkr.bank.in'
    },
    {
      name: 'Mysore Branch',
      address: '#424, Old Santhepet, Mysore-570024',
      phone: '0821-2429595, 7349610238',
      email: 'mysuru@vcbltkr.bank.in'
    }
  ];

  return (
    <div className="pt-16">
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-trust-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with Vysya Co-operative Bank Ltd. for all your banking needs.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <Card>
              <CardContent>
                <div className="text-center space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-trust-900 mb-2">
                      VYSYA CO-OPERATIVE BANK LTD.
                    </h2>
                    <p className="text-lg text-gray-600">
                      Administrative Office, 2nd Floor
                    </p>
                  </div>

                  <div className="flex items-start justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-trust-600 mt-0.5" />
                    <p className="text-gray-700">
                      Dr. Sri Sri Shivakumara Swamiji Circle<br />
                      BH Road, Tumkur - 572102
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-trust-600" />
                    <p className="text-gray-700 font-medium">
                      0816-2279934
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-trust-600" />
                    <a href="mailto:info@vcbltkr.bank.in" className="text-trust-600 hover:text-trust-700 font-medium">
                      info@vcbltkr.bank.in
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-trust-900 mb-6">Our Branches</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-2xl shadow-card overflow-hidden">
                <thead>
                  <tr className="bg-trust-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Branch Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Address</th>
                    <th className="px-6 py-4 text-left font-semibold">Phone</th>
                    <th className="px-6 py-4 text-left font-semibold">Email ID</th>
                  </tr>
                </thead>
                <tbody>
                  {branches.map((branch, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      } hover:bg-trust-50/60 transition-colors border-b border-gray-200`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-trust-600 flex-shrink-0" />
                          <span className="font-medium text-gray-900">{branch.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm">{branch.address}</td>
                      <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <Phone className="w-3.5 h-3.5 text-trust-500" />
                          <span>{branch.phone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a href={`mailto:${branch.email}`} className="text-trust-600 hover:text-trust-700 text-sm flex items-center space-x-1">
                          <Mail className="w-3.5 h-3.5" />
                          <span>{branch.email}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
