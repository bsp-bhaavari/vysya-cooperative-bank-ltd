import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';
import Table from '../../components/Table';

const BoardOfDirectors = () => {
  const presentBoard = [
    ['Sri K.N.Govindaraju B.E.', 'President'],
    ['CA Ramamurthy.K.S.\nB.Com., FCA, DISA (ICAI)', 'Vice President'],
    ['Sri Sathyanarayana.T.T.', 'Director'],
    ['Sri Lokanath.B.S.', 'Director'],
    ['Sri Prasoon Makam T.S.', 'Director'],
    ['Sri Balaji.N.V.', 'Director'],
    ['Sri Arun Kumar.N.A.', 'Director'],
    ['Sri Venkataraju.K', 'Director'],
    ['Sri Sanjay.C.S.', 'Director'],
    ['Sri Parthasarathy.T.A.', 'Director'],
    ['Sri Raghavendra.L.A.', 'Director'],
    ['Sri Nagesh.K.S.', 'Director'],
    ['Dr. Ramesh Babu.R.L.', 'Director'],
    ['Sri Arunachalam.G.S.', 'Director'],
    ['Sri Ramu.M.S.', 'Director'],
    ['Sri Badreesh.T.S.', 'Director'],
    ['Sri Srikanth.K.J.', 'Director'],
    ['Smt. Asha Srinath', 'Director'],
    ['Smt. Malathi.C.P.', 'Director'],
    ['Smt. Suma.S.', 'C.E.O']
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Board of Directors</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>President</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/president_Govindaraju_KN_photo.jpg`}
                alt="Sri K.N.Govindaraju"
                className="w-48 h-56 object-contain rounded-lg shadow-md mx-auto bg-gray-100"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-trust-900">Sahakara Rathna Awardee Sri K.N.Govindaraju B.E.</h3>
                <p className="text-trust-600 font-semibold">President</p>
              </div>
              <div className="space-y-2 text-gray-700 mt-4">
                <p>
                  Sri Govindaraju.K.N is a visionary par excellence. His passion ensured that the Bank reached
                  a Scheduled Bank Status through his continuous guidance and exemplary leadership. His reformist
                  zeal has helped the society at large through his active role in various institutions and
                  activities like Educational Institutes, Hostel for Boys. He is a pioneer in the Lorry
                  Transports and Briquette industry. He has travelled widely as part of study tours of
                  Co-operative Banking System across Country as well as across other parts of the world.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vice President</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/vice_president_Ramamurthy_KS_photo.jpg`}
                alt="CA Ramamurthy K.S."
                className="w-48 h-56 object-contain rounded-lg shadow-md mx-auto bg-gray-100"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-trust-900">CA Ramamurthy.K.S.</h3>
                <p className="text-trust-600 font-semibold">B.Com., FCA, DISA (ICAI)</p>
                <p className="text-trust-600 font-semibold">Vice President</p>
              </div>
              <div className="space-y-2 text-gray-700 mt-4">
                <p>
                  CA Ramamurthy.K.S. is a practicing Chartered Accountant and heads K.S.R Murthy & Co.,
                  which started its operations since early 1998. He is a B.Com, FCA, DISA (ICAI) qualified
                  professional with membership No. 207853.
                </p>
                <p>
                  K.S.R Murthy & Co. helps clients make correct decisions and ensures growth strategies
                  remain on track. With a team of audit professionals, the firm provides expert services
                  in accounts, tax advisory, and consultancy across multiple industries including banking,
                  agro processing, construction, IT, manufacturing, and government institutions.
                </p>
                <p>
                  Their services help improve operational efficiency, obtain management information from
                  financial systems, create effective controls, minimize tax outflows, and restructure
                  organizations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Present Board of Directors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table
              headers={['Name', 'Designation']}
              rows={presentBoard}
            />
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default BoardOfDirectors;
