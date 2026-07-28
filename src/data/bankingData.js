export const accountsData = {
  savings: {
    name: 'Savings Bank Account',
    path: '/banking/accounts/savings',
    icon: 'PiggyBank',
    description: 'A savings account is an interest-bearing deposit account. Though these accounts typically pay a modest interest rate, their safety and reliability make them a great option for parking cash you want available for short-term needs.',
    features: [
      'Savings Bank Account with Cheque Book facility',
      'Demand Draft (Local and outstation)',
      'RTGS/NEFT/IMPS/Funds transfer',
      'Money transfer services',
      'Remittance facility',
      'Nomination facility',
      'Savings bank rate of interest @2.5% credited half yearly',
      'KYC (Know Your Customer) for opening account is applicable',
      'Interest calculated on end of day balance',
      'Minimum Balance of Rs.1000/- to be maintained'
    ],
    eligibility: [
      'An individual in his own name',
      'More than one person in their joint names',
      'A guardian on behalf of the minor',
      'Individuals aged 18 years and above',
      'Valid KYC documents'
    ],
    documents: [
      'Proof of residence',
      'Proof of identification',
      'Recent photograph of the depositor',
      'PAN Card (mandatory for remittance >= Rs.50,000)',
      'KYC form duly filled'
    ],
    interestRate: '2.50% p.a. (credited half yearly)'
  },
  current: {
    name: 'Current Account',
    path: '/banking/accounts/current',
    icon: 'CreditCard',
    description: 'Current Account is particularly meant for Business class. This account can be opened by Business people like Traders, Businessmen, Corporate Bodies, Wholesalers, Retailers, Distributors, Super market chains etc. who operate the account frequently.',
    features: [
      'Current Account with Cheque Book facility',
      'Minimum Balance of Rs.2,000/-',
      'Demand Draft (Local and outstation)',
      'RTGS/NEFT/IMPS/Funds transfer',
      'Money transfer services',
      'Remittance facility',
      'Nomination facility',
      'No interest paid on current accounts',
      'No limits on number of transactions or amount per day',
      'KYC norms applicable for opening account'
    ],
    eligibility: [
      'Proprietorship firms',
      'Partnership firms',
      'Private and public limited companies',
      'Trusts, societies, and associations',
      'Traders, Businessmen, Corporate Bodies'
    ],
    documents: [
      'PAN Card of the entity',
      'Firm/Company Registration Certificate',
      'Partnership Deed (if Partners)',
      'GST Registration Certificate',
      'Local Body Permission (Corporation/Municipal)',
      'Identity proof of authorized signatories'
    ],
    interestRate: 'No interest on current accounts'
  },
  termDeposit: {
    name: 'Term Deposit',
    path: '/banking/accounts/term-deposit',
    icon: 'TrendingUp',
    description: 'Secure investment option with attractive interest rates and flexible tenure options.',
    features: [
      'Flexible tenure options from 7 days to 10 years',
      'Competitive interest rates',
      'Loan facility against deposit up to 85%',
      'Auto-renewal option',
      'Joint holding facility',
      'Nomination facility',
      'Quarterly interest payment option',
      'Tax saving benefits under 80C'
    ],
    eligibility: [
      'Individuals (resident and NRI)',
      'Minors through guardians',
      'Hindu Undivided Families (HUF)',
      'Companies and firms',
      'Associations and societies'
    ],
    documents: [
      'PAN Card',
      'Identity proof',
      'Address proof',
      'Photographs',
      'KYC form'
    ],
    interestRate: 'As per bank rates'
  },
  cumulativeDeposit: {
    name: 'Lakshmi Deposit (LD)',
    path: '/banking/accounts/lakshmi-deposit',
    icon: 'Calendar',
    description: 'Payment of fixed amount for a fixed period. Interest is accumulated quarterly and customer gets compounded interest together with principle on the due date. This helps depositor to earn interest on interest.',
    features: [
      'Minimum amount is Rs. 500/-',
      'Minimum period of 1 year and maximum of 10 years',
      'Interest compounded quarterly',
      'Interest automatically ploughed back into the deposit on quarterly basis',
      'Loan can be granted up to 85% of the deposit amount against pledge',
      'Nomination facility available',
      'Auto renewal system on maturity',
      'Minimum amount of Deposit: Rs. 100/-',
      'Range of Term of deposit: 3 months - 10 years'
    ],
    eligibility: [
      'Any individuals, firms, corporate bodies, associations etc.'
    ],
    documents: [
      'Proof of residence',
      'Proof of identification',
      'Recent photograph of the depositor',
      'PAN card (must for remittance >= Rs.50,000)'
    ],
    interestRate: 'As per bank rates'
  },
  fixedDeposit: {
    name: 'Fixed Deposit Account (FD)',
    path: '/banking/accounts/fixed-deposit',
    icon: 'Lock',
    description: 'Ideal to earn higher rate of interest, if the investor can spare money for a specified period of time. This deposit plan offers convenient solutions to both working class as well as senior citizens.',
    features: [
      'Account can be opened with a minimum of Rs.500/-',
      'Minimum period of 15 days and up to 120 months',
      'Interest paid Monthly/Quarterly or along with principal on maturity',
      'Loan granted up to 90% of the deposit amount against pledge',
      'Convenient for parking short term surplus funds from 30 days to 1 year',
      'Through ECS/NEFT/IMPS, interest can be credited to any account',
      'Nomination facility available'
    ],
    eligibility: [
      'Any Individuals, Firms, Corporate Bodies, Associations etc.'
    ],
    documents: [
      'Proof of residence',
      'Proof of identification',
      'Recent photograph of the depositor/s',
      'PAN card (must for any remittance >= Rs.50,000)',
      'KYC form duly filled'
    ],
    interestRate: 'As per bank rates'
  },
  recurringDeposit: {
    name: 'Kannika Cumulative Deposit (KCD)',
    path: '/banking/accounts/kannika-deposit',
    icon: 'Repeat',
    description: 'A recurring deposit is a special kind of term deposit which helps people with regular incomes to deposit a fixed amount every month into their account and earn interest at the rate applicable to fixed deposits.',
    features: [
      'It is a Cumulative Deposit',
      'Small savings Flexi Recurring Deposit scheme',
      'Open to Individuals and Minors',
      'Minimum tenure of 12 months to maximum of 120 months',
      'Minimum core deposit amount of Rs. 100/-',
      'Mandatory to deposit core deposit amount every month',
      'Compound interest on quarterly basis',
      'Installments can be paid by Standing instructions from SB/CA account',
      'Loan/Overdraft up to 90% available against balance',
      'Nomination facility is available'
    ],
    eligibility: [
      'Individuals only are eligible to open accounts',
      'Individual - Single Accounts',
      'Two or more individuals - Joint Accounts',
      'Minors'
    ],
    documents: [
      'Proof of residence',
      'Proof of identification',
      'Recent photograph of the depositor/s',
      'KYC norms applicable'
    ],
    interestRate: 'As per bank rates'
  },
  dailyDeposit: {
    name: 'Vasavi Nitya Nidhi Deposit (VND)',
    path: '/banking/accounts/pigmy-deposit',
    icon: 'Calendar',
    description: 'VND / Vasavi Nitya Nidhi Deposit Scheme is intended to mop up small savings and is specially designed for daily savers of small means and based on daily door collection. The Bank\'s Authorized agent will collect your savings at your doorsteps at daily or less frequent intervals.',
    features: [
      'Savings in daily installment at your doorstep',
      'Attractive Interest Rates',
      'Deposit accepted in daily installments',
      'Fixed period of 63 months',
      'Withdrawal at your will',
      'Productive scheme for business class',
      'Loan can be availed up to 85% of the amount lying in account',
      'Minimum contribution per month: Rs.50.00',
      'Daily collection per day per account shall not exceed Rs.1000/-',
      'Maximum Rs.30000.00 in a month'
    ],
    eligibility: [
      'Individual, Proprietorship, Partnership Firms, Clubs & Association'
    ],
    documents: [
      'Proof of residence',
      'Proof of identification',
      'Recent photograph of the depositor/s',
      'KYC norms applicable'
    ],
    interestRate: '2.50% w.e.f 01.10.2020'
  }
};

export const loansData = {
  currentAccountOverdraft: {
    name: 'Current Account (Over Draft)',
    path: '/banking/loans/current-account-od',
    icon: 'CreditCard',
    description: 'Overdraft facility enables you to withdraw money from your current account even if the account balance goes below zero. Interest is charged only on the utilized amount.',
    features: [
      'Withdraw money up till the assigned limit',
      'Interest charged only on utilized amount',
      'Deposit as collateral or security required',
      'Cheque book issued in the name of the company',
      'Yearly renewal facility'
    ],
    eligibility: [
      'Individuals (singly/Jointly) except stock/share broker/s',
      'Minimum 21 years of age'
    ],
    documents: [
      'Documentation including lien/pledge on the securities',
      'Statement of operative Bank account for the last 6 months',
      'Compliance of KYC norms',
      'Stock statement if required',
      '3 year Income Tax Return',
      'Firm registration',
      'GST copy'
    ],
    interestRate: 'As applicable from time to time',
    maxAmount: 'Depends on capital and property value',
    maxTenure: 'Maximum 12 months (yearly renewal)'
  },
  cashCredit: {
    name: 'Cash Credit',
    path: '/banking/loans/cash-credit',
    icon: 'DollarSign',
    description: 'A Cash Credit (CC) is a short-term source of financing for a company. It provides immediate cash flow when funding is needed to support ongoing operational expenses.',
    features: [
      'Short-term loan for working capital requirements',
      'Interest charged only on utilized amount',
      'Collateral or security required',
      'Facility renewal at end of 12 months',
      'Cheque book issued in the name of the company',
      'Flexible repayment structure'
    ],
    eligibility: [
      'Individuals (singly/Jointly) except stock/share broker/s',
      'Minimum 21 years of age',
      'Business purpose other than speculation'
    ],
    documents: [
      '3 years IT returns with audited balance sheet',
      'Project report',
      'Firm registration',
      'GST copy',
      'Property documents security',
      'Stock statement',
      'Documentation including lien/pledge on securities',
      'Power of Attorney in Bank\'s favour'
    ],
    interestRate: 'As applicable from time to time',
    maxAmount: 'Depends on property value and business needs',
    maxTenure: 'Maximum 12 months (yearly renewal)'
  },
  vasaviCashCredit: {
    name: 'Vasavi Cash Credit (VCC)',
    path: '/banking/loans/vasavi-cash-credit',
    icon: 'Star',
    description: 'Vasavi Cash Credit is a facility to withdraw money from an account without having credit balance but limited to the extent of borrowing limit fixed by the bank.',
    features: [
      'Meet working capital requirements of a business',
      'Collateral or security required',
      'Interest levied only on the loan amount availed',
      'Short-term loan decided by the lender',
      'Option to withdraw required amount as sanctioned',
      'Cheque book issued in the name of the company',
      'Daily or weekly repayment option'
    ],
    eligibility: [
      'Individuals (singly/Jointly) except stock/share broker/s',
      'Minimum 21 years of age'
    ],
    documents: [
      '3 years IT returns with audited balance sheet',
      'Project report',
      'Firm registration',
      'GST copy',
      'Property documents security',
      'Stock statement',
      'Every year renewal'
    ],
    interestRate: 'As applicable from time to time',
    maxAmount: 'Depends on property value and business needs',
    maxTenure: 'Maximum 12 months (yearly renewal)'
  },
  sriLakshmiCashCredit: {
    name: 'Sri Lakshmi Cash Credit (SLCC)',
    path: '/banking/loans/sri-lakshmi-cash-credit',
    icon: 'DollarSign',
    description: 'Sri Lakshmi Cash Credit is a facility to withdraw money from an account without having credit balance but limited to the extent of borrowing limit fixed by the bank.',
    features: [
      'Meet working capital requirements of a business',
      'Collateral or security required',
      'Interest levied only on the loan amount availed',
      'Short-term loan decided by the lender',
      'Option to withdraw required amount as sanctioned',
      'Cheque book issued in the name of the company',
      'Daily or weekly repayment option'
    ],
    eligibility: [
      'Individuals (singly/Jointly) except stock/share broker/s',
      'Minimum 21 years of age'
    ],
    documents: [
      '3 years IT returns with audited balance sheet',
      'Project report',
      'Firm registration',
      'GST copy',
      'Property documents security',
      'Stock statement',
      'Every year renewal'
    ],
    interestRate: 'As applicable from time to time',
    maxAmount: 'Depends on property value and business needs',
    maxTenure: 'Maximum 12 months (yearly renewal)'
  },
  vasavambhaCashCredit: {
    name: 'Vasavambha Cash Credit',
    path: '/banking/loans/vasavambha-cash-credit',
    icon: 'Crown',
    description: 'Vasavambha Cash Credit is a facility to withdraw money from an account without having credit balance but limited to the extent of borrowing limit fixed by the bank.',
    features: [
      'Meet working capital requirements of a business',
      'Collateral or security required',
      'Interest levied only on the loan amount availed',
      'Short-term loan decided by the lender',
      'Option to withdraw required amount as sanctioned',
      'Cheque book issued in the name of the company'
    ],
    eligibility: [
      'Individuals (singly/Jointly) except stock/share broker/s',
      'Minimum 21 years of age'
    ],
    documents: [
      '3 years IT returns with audited balance sheet',
      'Project report',
      'Firm registration',
      'GST copy',
      'Property documents security',
      'Stock statement'
    ],
    interestRate: 'As applicable from time to time',
    maxAmount: 'Depends on property value and business needs',
    maxTenure: 'Maximum 12 months (yearly renewal)'
  },
  depositLoan: {
    name: 'Deposit Loan (DL)',
    path: '/banking/loans/deposit-loan',
    icon: 'Shield',
    description: 'Avail Loan up to 90% of the value of your Time Deposit. Low interest rates with zero processing charges. Instead of breaking the FD prematurely, depositors can easily apply for a loan against their FD.',
    features: [
      'Loan up to 90% of the value of your Time Deposit',
      'Low interest rates (1% above applicable FD rate)',
      'Zero processing charges',
      'No need to break FD and suffer loss of interest',
      'Can be repaid as lump sum or in installment',
      'No collateral security required'
    ],
    eligibility: [
      'The proponent should be the depositor of the Bank'
    ],
    documents: [
      'Duly discharged deposit certificate',
      'KYC documents of depositor if not submitted earlier'
    ],
    interestRate: '1% over the interest payable on term deposit',
    maxAmount: 'Avail Loan up to 90%',
    maxTenure: 'Remaining period of maturity of deposit'
  },
  goldLoan: {
    name: 'Gold Loan (GDL)',
    path: '/banking/loans/gold-loan',
    icon: 'Coin',
    description: 'The gold loan is a secured loan that a borrower takes from a lender in lieu of gold ornaments such as gold jewelry. The loan amount sanctioned is generally a certain percentage of the gold\'s value.',
    features: [
      'Quick processing against gold ornaments',
      'Maximum loan limit Rs.25,00,000',
      'Maximum 60 months in monthly installments',
      'Competitive interest rates',
      'For business purpose or personal needs',
      'Appraisal by bank approved appraiser'
    ],
    eligibility: [
      'Individuals or firms who can offer Gold Ornaments',
      'Normal KYC guidelines'
    ],
    documents: [
      'Application form specially designed for Gold (Term) Loan',
      'Income proof',
      'Purpose proof or declaration',
      'Declaration agreeing to pay EMIs',
      'Photo of the unit (if for business purpose)'
    ],
    interestRate: 'As per bank rates',
    maxAmount: 'Rs.25,00,000',
    maxTenure: '60 months'
  },
  godownLoan: {
    name: 'Godown Loan (GDNL)',
    path: '/banking/loans/godown-loan',
    icon: 'Warehouse',
    description: 'Godown Loan refers to a financial service where loans are provided against commodities stored in godown. It allows traders to leverage their stored goods as collateral to secure funds.',
    features: [
      'Loan against goods stored in godown under bank custody',
      'Typically 70-80% of the goods\' value',
      'Flexible repayment - partial repayments allowed',
      'Can repay in installments or lump-sum',
      'Tenure of 3 months'
    ],
    eligibility: [
      'Traders with goods/stocks related to their trade/business'
    ],
    documents: [
      'Goods receipts/Bills/Invoices as collateral',
      'Stock statement',
      'KYC documents'
    ],
    interestRate: 'As per bank rates',
    maxAmount: '75% of goods value',
    maxTenure: '90 Days'
  },
  warehouseLoan: {
    name: 'Warehouse Receipt Loan',
    path: '/banking/loans/warehouse-loan',
    icon: 'Warehouse',
    description: 'Warehouse Receipt Loan refers to a financial service where loans are provided against commodities stored in warehouses approved by banks. It allows traders to leverage stored goods as collateral.',
    features: [
      'Loan against goods stored in approved warehouses',
      'Typically 70-80% of the goods\' value',
      'Partial repayments allowed',
      'Flexible repayment options',
      'Helps avoid distress sales at harvest time',
      'Finances a plethora of agro commodities'
    ],
    eligibility: [
      'Food and Agro based processing units',
      'Proprietorship concerns/partnership firms/corporate/individuals trading in agricultural commodity',
      'Arthiyas in rural and semi urban areas'
    ],
    documents: [
      'Pledge of warehouse Receipts of approved warehouses',
      'KYC documents'
    ],
    interestRate: 'As per bank rates',
    maxAmount: '70-80% of goods value',
    maxTenure: 'As per bank policy'
  },
  jointLoan: {
    name: 'Joint Loan (Surety Loan)',
    path: '/banking/loans/joint-loan',
    icon: 'Users',
    description: 'Joint Loan will be given to only members of the Bank, with a surety of another member. A member can get this loan only up to 5 times of his Share Certificate amount.',
    features: [
      'For members of the Bank only',
      'Up to 5 times of Share Certificate amount',
      'Maximum limit of Rs.1,00,000',
      'Two guarantors or collateral security for above Rs.1 lakh',
      'Tenure of 6 months'
    ],
    eligibility: [
      'Members of Vysya Co-operative Bank Ltd',
      'All applicants aged 21-60 years',
      'Minimum monthly income as per bank policy'
    ],
    documents: [
      'Latest three months pay slip or salary certificate',
      'Address Proof, ID proof',
      'Office id',
      'Bank membership ID Card',
      'Photo',
      '6 months Bank statement'
    ],
    interestRate: '10.00% p.a.',
    maxAmount: 'Rs.1,00,000',
    maxTenure: '60 months'
  },
  vehicleLoan: {
    name: 'Vehicle Loan (VL)',
    path: '/banking/loans/vehicle-loan',
    icon: 'Car',
    description: 'Hypothecation Loan will be sanctioned to purchase a new or an old vehicle, by hypothecating the same for personal or commercial use.',
    features: [
      'Margin: For commercial - 25% of invoice cost',
      'Two wheeler: 36 months, Auto, Commercial Car: 60 months',
      'Hypothecation of vehicle to be purchased',
      'Competitive rate on daily reducing balance',
      'No prepayment penalty'
    ],
    eligibility: [
      'Individuals, Firms, Companies',
      'Individuals employed/engaged in business/having professional income'
    ],
    documents: [
      'Invoice from the Authorized dealer',
      'Applicant and Sureties Salary certificate/salary slip for consecutive three months',
      'KYC requirement',
      'Income proof'
    ],
    interestRate: 'As per bank rates',
    maxAmount: 'As per bank policy',
    maxTenure: '60 months'
  },
  vasaviVehicleLoan: {
    name: 'Vasavi Vehicle Loan (VVL)',
    path: '/banking/loans/vasavi-vehicle-loan',
    icon: 'Star',
    description: 'Hypothecation Loan will be sanctioned to purchase a new or an old vehicle, by hypothecating the same for personal or commercial use with maximum tenure of 60 months.',
    features: [
      'For purchase of new or old vehicle',
      'Maximum tenure of 60 months',
      'Competitive interest rates',
      'No prepayment penalty',
      'Quick processing'
    ],
    eligibility: [
      'Individuals, Firms, Companies',
      'Individuals employed/engaged in business/professionals'
    ],
    documents: [
      'Invoice from the Authorized dealer',
      'KYC documents',
      'Income proof',
      'Salary certificate for salaried persons'
    ],
    interestRate: 'As per bank rates',
    maxAmount: 'As per bank policy',
    maxTenure: '60 months'
  },
  installmentLoan: {
    name: 'Installment Loan (IL)',
    path: '/banking/loans/installment-loan',
    icon: 'Calendar',
    description: 'This loan will be given for the purpose of business by mortgaging the immovable property of the borrower after considering security, repayment capacity, credit worthiness and fulfilling documentation procedures.',
    features: [
      'For business purpose',
      'Mortgage of immovable property required',
      'Maximum tenure of 120 months',
      'Suitable for established small business',
      'Specific repayment schedule with fixed or floating interest rate'
    ],
    eligibility: [
      'People engaged in trade, commerce & business professionals',
      'Proprietary firms, partnership firms, companies',
      'Individuals with high net worth',
      'Minimum 21 years of age'
    ],
    documents: [
      '3 years IT returns with audited balance sheet',
      'Project report',
      'Firm registration copy',
      'GST copy',
      'Property documents security',
      'Property to be mortgaged should be in borrower\'s name'
    ],
    interestRate: 'As per bank rates',
    maxAmount: 'Depends upon the purpose and property value',
    maxTenure: '120 months'
  },
  generalHousingLoan: {
    name: 'Vasavi General Housing Loan (VGHL)',
    path: '/banking/loans/housing-loan',
    icon: 'Home',
    description: 'The Bank sanctions loans to build a house for the purpose of residence. Maximum tenure of this Loan is 180 months.',
    features: [
      'For construction/purchase of residential house',
      'Maximum tenure of 180 months',
      'Property as security',
      'Competitive interest rates',
      'Loan for purchase of site also available'
    ],
    eligibility: [
      'Individuals (singly/Jointly)',
      'At least 21 years of age',
      'Fair repaying capacity'
    ],
    documents: [
      'Allotment Letter (for BDA/KHB property)',
      'Possession certificate',
      'Sale Deed',
      'Khata Certificate along with Extract',
      'Tax Paid Receipts',
      'Encumbrance Certificate',
      'Income Proof',
      'Family Tree',
      'NOC from Family Members',
      '6 Months Bank Statements',
      '3 years IT Returns',
      'Sanctioned Plan and Estimation for Construction Loan'
    ],
    interestRate: 'As per bank rates',
    maxAmount: 'Rs.70.00 lacs for individual house',
    maxTenure: '240 months'
  },
  vasavambhaTermLoan: {
    name: 'Vasavambha Housing Loan',
    path: '/banking/loans/vasavambha-term-loan',
    icon: 'Crown',
    description: 'The Bank sanctions loans to build a house for the purpose of residence. Maximum tenure of this Loan is 180 months.',
    features: [
      'For construction/purchase of residential house',
      'Maximum tenure of 180 months',
      'Property as security',
      'Competitive interest rates'
    ],
    eligibility: [
      'Individuals (singly/Jointly)',
      'At least 21 years of age'
    ],
    documents: [
      'Identity and address proof',
      'Income Tax Returns for the last three years',
      'Property documents',
      'Sanctioned plan for construction',
      '6 months bank statements'
    ],
    interestRate: 'As per bank rates',
    maxAmount: 'Rs.70.00 lacs',
    maxTenure: '240 months'
  },
  vasavambhaHousingLoan: {
    name: 'Vasavambha Housing Loan',
    path: '/banking/loans/vasavambha-housing-loan',
    icon: 'Crown',
    description: 'The Bank sanctions loans to build a house for the purpose of residence. Maximum tenure of this Loan is 180 months.',
    features: [
      'For construction/purchase of residential house',
      'Maximum tenure of 180 months',
      'Property as security',
      'Competitive interest rates'
    ],
    eligibility: [
      'Individuals (singly/Jointly)',
      'At least 21 years of age'
    ],
    documents: [
      'Identity and address proof',
      'Income Tax Returns for the last three years',
      'Property documents',
      'Sanctioned plan for construction',
      '6 months bank statements'
    ],
    interestRate: 'As per bank rates',
    maxAmount: 'Rs.70.00 lacs',
    maxTenure: '240 months'
  },
  machineryLoan: {
    name: 'Machinery Loan',
    path: '/banking/loans/machinery-loan',
    icon: 'Cpu',
    description: 'Loan for purchase of machinery for business purposes with flexible repayment options.',
    features: [
      'For purchase of new machinery',
      '75% of machinery purchase value',
      'Competitive interest rates',
      'Flexible repayment tenure',
      'Quick processing'
    ],
    eligibility: [
      'Individuals, Firms, Companies',
      'Small scale industries, Traders'
    ],
    documents: [
      '3 years IT returns with audited balance sheet',
      'Project report',
      'Firm registration',
      'GST copy',
      'Quotation for the machinery',
      'Property documents security'
    ],
    interestRate: 'As per bank rates',
    maxAmount: 'Depends on valuation',
    maxTenure: '60 months'
  },
  vasavambhaOverdraftLoan: {
    name: 'Vasavambha Overdraft Loan',
    path: '/banking/loans/vasavambha-overdraft-loan',
    icon: 'Crown',
    description: 'Overdraft facility for business needs with interest charged only on the utilized amount.',
    features: [
      'Interest charged only on utilized amount',
      'Collateral or security required',
      'Flexible withdrawal and repayment',
      'Yearly renewal'
    ],
    eligibility: [
      'Individuals (singly/Jointly)',
      'Minimum 21 years of age',
      'Business purpose'
    ],
    documents: [
      '3 years IT returns with audited balance sheet',
      'Project report',
      'Firm registration',
      'GST copy',
      'Property documents security'
    ],
    interestRate: 'As applicable from time to time',
    maxAmount: 'Depends on property value and business needs',
    maxTenure: '12 months (yearly renewal)'
  },
  nscLoan: {
    name: 'NSC Loan (NSCL)',
    path: '/banking/loans/nscl-loan',
    icon: 'Shield',
    description: 'Any person holding NSC Bonds can avail of this loan by pledging the Bonds, up to 80% on the face value of the Bond and tenure of this Loan is 12 Months.',
    features: [
      'Loan against National Savings Certificate',
      'Up to 80% on the face value of the Bond',
      'Low interest rates compared to personal loans',
      'Minimum documentation',
      'Tenure of 12 months'
    ],
    eligibility: [
      'Indian citizens holding valid NSC Bonds',
      'Must be 18+ years old'
    ],
    documents: [
      'Original NSC certificate(s)',
      'KYC documents (PAN Card, Aadhaar, Voter ID)',
      'Discharge certificate from authorities',
      'Loan application form'
    ],
    interestRate: 'As applicable from time to time',
    maxAmount: 'Rs.10.00 Lacs',
    maxTenure: 'Maturity period'
  },
  licPolicyLoan: {
    name: 'LIC Policy Loan (LICL)',
    path: '/banking/loans/lic-policy-loan',
    icon: 'FileText',
    description: 'Any person holding LIC Certificates can avail of this loan by pledging the policy, up to 90% of the surrender value of the LIC policy.',
    features: [
      'Loan against LIC policy',
      'Up to 90% of surrender value',
      'Lower interest rates than personal loans',
      'Policy as collateral',
      'Quick processing'
    ],
    eligibility: [
      'Resident of India, at least 18 years old',
      'Must have a valid LIC (or other life insurance) policy',
      'At least 3 years of LIC premium paid in full',
      'Policy must have guaranteed surrender value'
    ],
    documents: [
      'Original LIC policy document',
      'Premium receipts',
      'KYC documents (PAN, Aadhaar)',
      'Income proof',
      'Discharge certificate from LIC'
    ],
    interestRate: 'As applicable from time to time',
    maxAmount: 'Up to 90% of surrender value',
    maxTenure: 'On maturity date'
  }
};

export const servicesData = {
  rtgsNeft: {
    name: 'RTGS/NEFT',
    path: '/services/rtgs-neft',
    icon: 'ArrowRightLeft',
    description: 'Secure electronic fund transfer services with competitive charges.',
    features: [
      '24/7 NEFT availability',
      'RTGS for high-value transfers',
      'Instant credit to beneficiary',
      'Secure and reliable',
      'Online and offline modes',
      'SMS confirmation',
      'Online tracking'
    ],
    charges: {
      rtgs: {
        'Up to Rs.1 Lakh': 'Rs.15 + GST = 17.70',
        'Rs.1 Lakh to Rs.5 Lakh': 'Rs.30 + GST = 35.40',
        'Rs.5 Lakh to Rs.10 Lakh': 'Rs.40 + GST = 47.20',
        'Above Rs.10 Lakhs': 'Rs.110 + GST = 129.80'
      },
      neft: {
        'GST Payment': 'Rs.50 + GST = 59.00',
        'ITD Payment': 'Rs.100 + GST = 118.00'
      }
    }
  },
  lockers: {
    name: 'Locker Facility',
    path: '/services/lockers',
    icon: 'Lock',
    description: 'Secure locker facility for your valuables',
    features: [
      'Various sizes available',
      'High-security vaults',
      'Biometric access',
      'Annual rental charges',
      'Joint holder facility',
      'Nomination facility',
      'Insurance coverage',
      '24/7 security'
    ],
    charges: {
      'Small (12.5" x 5" x 5")': '₹1,500 + GST per annum',
      'Medium (15" x 6" x 6")': '₹2,500 + GST per annum',
      'Large (18" x 6" x 6")': '₹4,000 + GST per annum',
      'Extra Large (24" x 6" x 6")': '₹6,000 + GST per annum'
    }
  },
  smsAlerts: {
    name: 'SMS Alerts',
    path: '/services/sms-alerts',
    icon: 'MessageSquare',
    description: 'SMS Charges Rs.0.50 + GST per message sent / per quarter = 0.59 charges. Stay updated with instant SMS notifications for all your account transactions.',
    features: [
      'Real-time transaction alerts',
      'Balance notifications',
      'Cheque clearance alerts',
      'Loan repayment reminders',
      'Account activity monitoring',
      'Security alerts',
      'SMS Charges Rs.0.50 + GST per message/per quarter = 0.59'
    ],
    charges: {
      'SMS Charges': 'Rs.0.50 + GST per message/per quarter = 0.59'
    }
  },
  emailStatement: {
    name: 'Statement by Email',
    path: '/services/email-statement',
    icon: 'Mail',
    description: 'Receive account statements via email at your preferred frequency. Choose from daily, weekly, monthly, or quarterly statements.',
    features: [
      'Daily statements via email',
      'Weekly statements via email',
      'Monthly statements via email',
      'Quarterly statements via email',
      'Instant delivery',
      'Secure PDF format',
      'Password protected',
      'Download anytime'
    ],
    charges: {
      'Individual Accounts': 'Free',
      'Daily Statement': 'Free',
      'Weekly Statement': 'Free',
      'Monthly Statement': 'Free',
      'Quarterly Statement': 'Free',
      'Corporate Accounts': 'Free'
    }
  },
  mobileBanking: {
    name: 'Mobile Banking',
    path: '/services/mobile-banking',
    icon: 'Smartphone',
    description: 'Complete banking on your mobile',
    features: [
      'Fund transfers',
      'Bill payments',
      'Mobile recharge',
      'Balance inquiry',
      'Mini statements',
      'Cheque requests',
      'Investment services',
      '24/7 availability'
    ],
    charges: {
      'Registration': 'Free',
      'Fund Transfers': 'As per applicable charges',
      'Bill Payments': 'Free',
      'Balance Inquiry': 'Free'
    }
  },
  atmCard: {
    name: 'ATM RuPay Debit Card',
    path: '/services/atm-card',
    icon: 'CreditCard',
    description: 'VERY Shortly',
    features: [],
    charges: {}
  },
  imps: {
    name: 'IMPS',
    path: '/services/imps',
    icon: 'Zap',
    description: 'VERY Shortly',
    features: [],
    charges: {}
  },
  ctsClearing: {
    name: 'CTS Clearing',
    path: '/services/cts-clearing',
    icon: 'CheckCircle',
    description: 'Cheque Truncation System for faster clearing',
    features: [
      'Faster cheque clearing',
      'Electronic image processing',
      'Reduced clearing time',
      'Enhanced security',
      'Online tracking',
      'SMS alerts',
      'Reduced fraud risk',
      'Nationwide coverage'
    ],
    charges: {
      'Local Cheques': 'Free',
      'Outstation Cheques': '₹50 + GST',
      'Speed Clearing': '₹25 + GST'
    }
  },
  nach: {
    name: 'NACH Debit/Credit',
    path: '/services/nach',
    icon: 'RefreshCw',
    description: 'National Automated Clearing House services',
    features: [
      'Automated payments',
      'Recurring transactions',
      'Bulk payments',
      'EMI deductions',
      'Investment deductions',
      'Insurance premiums',
      'Utility bill payments',
      'Online management'
    ],
    charges: {
      'Debit Mandate Registration': '₹25 + GST',
      'Credit Mandate Registration': '₹50 + GST',
      'Transaction Processing': '₹0.50 + GST per transaction'
    }
  },
  demandDraft: {
    name: 'Demand Draft',
    path: '/services/demand-draft',
    icon: 'FileText',
    description: 'Secure demand draft facility with competitive commission rates.',
    features: [
      'Secure payment instrument',
      'Nationwide acceptance',
      'Various denominations',
      'Immediate issuance',
      'Duplicate facility',
      'Tracking facility',
      'Cancellation facility',
      'Online request'
    ],
    charges: {
      'Up to Rs.1 Lakh': '0.15% + GST',
      'Above Rs.1 Lakh': '0.1% + GST'
    }
  },
  payOrder: {
    name: 'Pay Order',
    path: '/services/pay-order',
    icon: 'FileCheck',
    description: 'Local payment instrument',
    features: [
      'Local payments',
      'Immediate clearance',
      'Secure instrument',
      'Various denominations',
      'Quick issuance',
      'Duplicate facility',
      'Cancellation facility',
      'Online request'
    ],
    charges: {
      'Up to Rs.1 Lakh': '0.15% + GST',
      'Above Rs.1 Lakh': '0.1% + GST'
    }
  },
  upi: {
    name: 'UPI',
    path: '/services/upi',
    icon: 'Smartphone',
    description: 'VERY Shortly',
    features: [],
    charges: {}
  },
  qrCode: {
    name: 'QR Code Technology',
    path: '/services/qr-code',
    icon: 'QrCode',
    description: 'Futuretek Commerce Pvt Ltd, Road No 5, Murlipura, Jaipur - 302023',
    features: [
      'Static QR codes',
      'Dynamic QR codes',
      'Instant payments',
      'Mobile payments',
      'Merchant solutions',
      'Bill payments',
      'UPI integration',
      'Secure transactions'
    ],
    charges: {
      'Static QR Code': 'Free',
      'Dynamic QR Code': 'Free',
      'Transaction Processing': 'Rs.40 + GST'
    }
  },
  seniorCitizen: {
    name: 'Senior Citizen Advantages',
    path: '/services/senior-citizen',
    icon: 'User',
    description: 'Special benefits for senior citizens',
    features: [
      'Higher interest rates on deposits',
      'Priority service at branches',
      'Dedicated counters',
      'Home banking facility',
      'Special loan schemes',
      'Reduced processing fees',
      'Free insurance coverage',
      'Special customer care'
    ],
    benefits: {
      'Additional Interest': '0.50% extra on term deposits',
      'Processing Fee Waiver': '50% waiver on loan processing',
      'Free Services': 'Free demand drafts up to ₹25,000 per month',
      'Priority Queue': 'Dedicated service at branches'
    }
  }
};

export const interestRatesData = {
  loans: [
    {
      loanName: 'Gold Loan - Domestic/Bullet Payment (upto Rs.10 Lacs, 12 Months)',
      afterRebate: '8.00%',
      actualROI: '8.00%'
    },
    {
      loanName: 'Gold Term Loan (60 Months)',
      afterRebate: '10.50%',
      actualROI: '10.50%'
    },
    {
      loanName: 'Gold Overdraft Loan (12 Months)',
      afterRebate: '11.50%',
      actualROI: '11.50%'
    },
    {
      loanName: 'Vasavi Vehicle Loan - Personal Car Loan',
      afterRebate: '8.25%',
      actualROI: '8.25%'
    },
    {
      loanName: 'Vasavamba Housing Loan - Upto Rs.35 Lacs',
      afterRebate: '8.00%',
      actualROI: '8.00%'
    },
    {
      loanName: 'Vasavamba Housing Loan - Above Rs.35 Lakhs',
      afterRebate: '8.50%',
      actualROI: '8.50%'
    },
    {
      loanName: 'Godown / Warehouse Loan',
      afterRebate: '8.50%*',
      actualROI: '11.00%'
    },
    {
      loanName: 'Kannika Installment Loan (90 Days)',
      afterRebate: '9.50%*',
      actualROI: '15.00%'
    },
    {
      loanName: 'Joint Loan',
      afterRebate: '10.00%',
      actualROI: '10.00%'
    },
    {
      loanName: 'Vasavamba Term Loan',
      afterRebate: '11.50%',
      actualROI: '11.50%'
    },
    {
      loanName: 'Vasavamba Cash Credit / Overdraft Facility',
      afterRebate: '12.00%',
      actualROI: '12.00%'
    },
    {
      loanName: 'Vasavi Cash Credit Loan',
      afterRebate: '11.00%*',
      actualROI: '15.00%'
    },
    {
      loanName: 'Vasavi Installment Loan',
      afterRebate: '12.00%*',
      actualROI: '15.00%'
    },
    {
      loanName: 'Sri Lakshmi Installment & Cash Credit Loan',
      afterRebate: '12.50%*',
      actualROI: '15.00%'
    },
    {
      loanName: 'Installment Loan',
      afterRebate: '13.00%*',
      actualROI: '15.00%'
    },
    {
      loanName: 'Vehicle Loan - New (Other than Personal Car)',
      afterRebate: '13.00%*',
      actualROI: '14.00%'
    },
    {
      loanName: 'Vehicle Loan - Old Vehicle',
      afterRebate: '14.00%*',
      actualROI: '15.00%'
    },
    {
      loanName: 'Machinery Loan',
      afterRebate: '13.50%*',
      actualROI: '14.50%'
    },
    {
      loanName: 'Cash Credit Loan',
      afterRebate: '15.00%',
      actualROI: '15.00%'
    },
    {
      loanName: 'NSC / LIC Loans',
      afterRebate: '14.00%',
      actualROI: '14.00%'
    }
  ],
  deposits: [
    {
      depositName: '0–14 Days',
      interestRate: '0.00%',
      tenure: '0–14 Days'
    },
    {
      depositName: '15–90 Days',
      interestRate: '3.00%',
      tenure: '15–90 Days'
    },
    {
      depositName: '91–180 Days',
      interestRate: '4.00%',
      tenure: '91–180 Days'
    },
    {
      depositName: '181 Days – 1 Year',
      interestRate: '5.00%',
      tenure: '181 Days – 1 Year'
    },
    {
      depositName: 'Above 1 Year – 5 Years',
      interestRate: '7.00%',
      tenure: 'Above 1 Year – 5 Years'
    },
    {
      depositName: 'Above 5 Years – 10 Years',
      interestRate: '5.00%',
      tenure: 'Above 5 Years – 10 Years'
    },
    {
      depositName: 'Senior Citizen (Above 1 Year)',
      interestRate: 'Extra 0.50%',
      tenure: 'Above 1 Year'
    },
    {
      depositName: 'Savings Bank Account',
      interestRate: '2.50%',
      tenure: 'Daily balance'
    },
    {
      depositName: '50 Lakhs & Above (1–5 Years)',
      interestRate: '7.50%',
      tenure: '1–5 Years',
      note: 'Bulk Deposit, Fixed Deposit only'
    }
  ]
};
