const districts = [
  'Thiruvananthapuram',
  'Kollam',
  'Pathanamthitta',
  'Alappuzha',
  'Kottayam',
  'Idukki',
  'Ernakulam',
  'Thrissur',
  'Palakkad',
  'Malappuram',
  'Kozhikode',
  'Wayanad',
  'Kannur',
  'Kasaragod'
];

const constituencies = [
  {
    id: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    district: 'Thiruvananthapuram',
    state: 'Kerala',
    lacNo: 134,
    type: 'General',
    lokSabha: 'Thiruvananthapuram',
    pollingStations: 230,
    electors: 158826,
    voters: 120648,
    pollingPercentage: 75.96,
    population: '253,963',
    populationNote: 'Verified from the supplied research dossier.',
    currentMLA: 'C. P. John',
    party: 'Communist Marxist Party Kerala State Committee',
    currentTerm: 'From 4 May 2026',
    representativeHistory: [
      { year: 2016, name: 'V. S. Sivakumar', party: 'INC' },
      { year: 2021, name: 'Antony Raju', party: 'Janadhipathiya Kerala Congress' },
      { year: 2026, name: 'C. P. John', party: 'CMP(KSC)' }
    ],
    dataQuality: {
      officialElectionData: true,
      projectFinancialData: true,
      actualExpenditure: 'Partial',
      geographicMapping: 'Partial',
      problemRecords: 'Mixed'
    },
    keyFacts: [
      'Research dossier identifies the constituency as LAC 134 and provides 2026 election figures.',
      'The urban constituency profile includes verified election turnout and electors count.',
      'Representative chronology is available across 2016, 2021 and 2026 terms.'
    ],
    unknowns: [
      'Exact field verification for some project operational outcomes is still pending.',
      'Some expenditure records require reconciliation across multiple sources.'
    ]
  },
  {
    id: 'ernakulam',
    name: 'Ernakulam',
    district: 'Ernakulam',
    state: 'Kerala',
    lacNo: 82,
    type: 'General',
    lokSabha: 'Ernakulam',
    pollingStations: 206,
    electors: 136321,
    voters: 107901,
    pollingPercentage: 79.15,
    population: '220,787',
    populationNote: 'Secondary Census-based estimate — primary verification pending',
    currentMLA: 'T. J. Vinod',
    party: 'Indian National Congress',
    currentTerm: 'From 4 May 2026',
    representativeHistory: [
      { year: 2016, name: 'Hibi Eden', party: 'INC' },
      { year: 2019, name: 'T. J. Vinod', party: 'INC', note: 'By-election' },
      { year: 2021, name: 'T. J. Vinod', party: 'INC' },
      { year: 2026, name: 'T. J. Vinod', party: 'INC' }
    ],
    dataQuality: {
      officialElectionData: true,
      projectFinancialData: true,
      actualExpenditure: 'Limited',
      geographicMapping: 'Partial',
      problemRecords: 'Mixed'
    },
    keyFacts: [
      'The supplied dossier identifies Ernakulam as LAC 82 and gives election statistics for 2026.',
      'The constituency is a strong project and budget tracking case study with multiple verified project records.',
      'Population is a secondary estimate and should not be treated as a final verified figure.'
    ],
    unknowns: [
      'Some project funds are not fully reconciled with the final expenditure stage.',
      'Operational status for select urban asset upgrades requires field verification.'
    ]
  },
  {
    id: 'kozhikode-north',
    name: 'Kozhikode North',
    district: 'Kozhikode',
    state: 'Kerala',
    lacNo: 27,
    type: 'General',
    lokSabha: 'Kozhikode',
    pollingStations: 186,
    electors: 173473,
    voters: 141659,
    pollingPercentage: 81.66,
    population: 'NOT VERIFIED',
    populationNote: 'Population not yet verified at constituency level.',
    currentMLA: 'Adv. K. Jayanth',
    party: 'Indian National Congress',
    currentTerm: 'From 4 May 2026',
    representativeHistory: [
      { year: 2011, name: 'A. Pradeep Kumar', party: 'CPI(M)' },
      { year: 2016, name: 'A. Pradeep Kumar', party: 'CPI(M)' },
      { year: 2021, name: 'Thottathil Ravindran', party: 'CPI(M)' },
      { year: 2026, name: 'Adv. K. Jayanth', party: 'INC' }
    ],
    dataQuality: {
      officialElectionData: true,
      projectFinancialData: true,
      actualExpenditure: 'Limited',
      geographicMapping: 'Partial',
      problemRecords: 'Mixed'
    },
    keyFacts: [
      'The dossier explicitly notes that constituency population is not verified.',
      'Kozhikode North has several road, housing and project records, alongside strong PRISM investment context.',
      'Representative relationship must distinguish LAC-ADS and MLA-linked record from direct personal implementation.'
    ],
    unknowns: [
      'Tender, bills and actual expenditure are not fully verified for several road works.',
      'Some project records require geographic and administrative verification before being treated as constituency-level facts.'
    ]
  }
];

const representatives = [
  {
    id: 'cp-john',
    name: 'C. P. John',
    position: 'MLA',
    constituency: 'Thiruvananthapuram',
    district: 'Thiruvananthapuram',
    party: 'CMP(KSC)',
    term: 'From 4 May 2026',
    projects: 12,
    funds: 'Documented',
    questions: 'Not verified',
    avatar: 'C'
  },
  {
    id: 'tj-vinod',
    name: 'T. J. Vinod',
    position: 'MLA',
    constituency: 'Ernakulam',
    district: 'Ernakulam',
    party: 'INC',
    term: 'From 4 May 2026',
    projects: 18,
    funds: 'Documented',
    questions: 'Not verified',
    avatar: 'T'
  },
  {
    id: 'k-jayanth',
    name: 'Adv. K. Jayanth',
    position: 'MLA',
    constituency: 'Kozhikode North',
    district: 'Kozhikode',
    party: 'INC',
    term: 'From 4 May 2026',
    projects: 14,
    funds: 'Documented',
    questions: 'Not verified',
    avatar: 'K'
  }
];

const projects = [
  {
    id: 1,
    name: 'MLA-SDF Cheranalloor — Meenakshiparambu Water-Supply Pipeline',
    state: 'Kerala',
    district: 'Ernakulam',
    constituency: 'Ernakulam',
    lacNumber: 82,
    location: 'Meenakshiparambu / South Janatha Road, Cheranalloor',
    department: 'KWA',
    fundingSource: 'MLA-SDF',
    administrativeSanction: 'Not verified',
    technicalSanction: 'Not verified',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'COMPLETED',
    physicalProgress: '100%',
    operationalStatus: 'CURRENT FIELD VERIFICATION REQUIRED',
    outcome: 'Population benefited: 50',
    representative: 'T. J. Vinod',
    representativeTerm: 'From 4 May 2026',
    representativeRelationship: 'Individual representative responsibility requires verification.',
    evidenceLevel: 'Strong / Official',
    source: 'src-kwa-1',
    sourceDate: '2024',
    geographicVerification: 'Verified at local project location',
    startDate: '2024-02-12',
    expectedCompletion: '2024-12-31',
    actualCompletion: '2024-12-31',
    cost: '₹3.62 lakh',
    funding: 'MLA-SDF'
  },
  {
    id: 2,
    name: 'Varma Road / Chittoor Water-Supply Improvement',
    state: 'Kerala',
    district: 'Ernakulam',
    constituency: 'Ernakulam',
    lacNumber: 82,
    location: 'Varma Road, Chittoor, Cheranalloor',
    department: 'KWA',
    fundingSource: 'Deposit Work / Urban Agglomeration',
    administrativeSanction: '₹10 lakh',
    technicalSanction: '₹10 lakh',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'COMPLETED',
    physicalProgress: '100%',
    operationalStatus: 'Current functionality requires verification',
    outcome: 'Approximately 1,000 beneficiaries',
    representative: 'Not established',
    representativeTerm: 'Not established',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Government record',
    source: 'src-kwa-2',
    sourceDate: '2023',
    geographicVerification: 'Project location verified',
    startDate: '2023-04-03',
    expectedCompletion: '2023-07-31',
    actualCompletion: '2023-07-31',
    cost: '₹10 lakh',
    funding: 'Deposit Work / Urban Agglomeration'
  },
  {
    id: 3,
    name: 'AMRUT — 15 LL OHSR + 2 LL CWR at Vadathode',
    state: 'Kerala',
    district: 'Ernakulam',
    constituency: 'Ernakulam',
    lacNumber: 82,
    location: 'Vadathode, Cheranalloor',
    department: 'AMRUT',
    fundingSource: 'AMRUT',
    administrativeSanction: 'Not verified',
    technicalSanction: '₹5 crore',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'ONGOING',
    physicalProgress: 'Not verified',
    operationalStatus: 'Not yet applicable',
    outcome: 'Not yet applicable',
    representative: 'Not established',
    representativeTerm: 'Not established',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Government record',
    source: 'src-amrut-1',
    sourceDate: '2024',
    geographicVerification: 'Location identified but status pending field verification',
    startDate: 'Not verified',
    expectedCompletion: 'Not verified',
    actualCompletion: 'Not verified',
    cost: '₹5 crore',
    funding: 'AMRUT'
  },
  {
    id: 4,
    name: 'MLA-SDF Cheranalloor — Container Extension Pipeline',
    state: 'Kerala',
    district: 'Ernakulam',
    constituency: 'Ernakulam',
    lacNumber: 82,
    location: 'Container Terminal Service Road → Pandit Karuppan Road',
    department: 'MLA-SDF',
    fundingSource: 'MLA-SDF',
    administrativeSanction: '₹3.72 lakh',
    technicalSanction: 'Not verified',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'DELAYED',
    physicalProgress: '0%',
    operationalStatus: 'Site handover pending',
    outcome: 'Latest status recorded in February 2026',
    representative: 'T. J. Vinod',
    representativeTerm: 'From 4 May 2026',
    representativeRelationship: 'FUNDED / RESPONSIBILITY NOT ESTABLISHED',
    evidenceLevel: 'Official / field update',
    source: 'src-er-3',
    sourceDate: '2026-02',
    geographicVerification: 'Location verified',
    startDate: '2024-02-22',
    expectedCompletion: '2024-10-31',
    actualCompletion: 'Not verified',
    cost: '₹3.72 lakh',
    funding: 'MLA-SDF'
  },
  {
    id: 5,
    name: 'Karaparamb–Malaparamb Road Restoration',
    state: 'Kerala',
    district: 'Kozhikode',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'Kozhikode',
    department: 'PWD',
    fundingSource: 'PWD',
    administrativeSanction: '₹62.653 lakh',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'SANCTIONED',
    physicalProgress: '0%',
    operationalStatus: 'Implementation to be verified',
    outcome: 'Sanctioned but implementation requires confirmation',
    representative: 'Not established',
    representativeTerm: 'Not established',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Government record',
    source: 'src-kn-road-1',
    sourceDate: '2025',
    geographicVerification: 'Location partially identified',
    startDate: 'Not verified',
    expectedCompletion: 'Not verified',
    actualCompletion: 'Not verified',
    cost: '₹62.653 lakh',
    funding: 'PWD'
  },
  {
    id: 6,
    name: 'Aanakkayamthodu Improvement',
    state: 'Kerala',
    district: 'Kozhikode',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'Ward 16, Kozhikode Corporation',
    department: 'LAC-ADS',
    fundingSource: 'LAC-ADS 2025–26',
    administrativeSanction: 'Not verified',
    technicalSanction: 'Not verified',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'ONGOING',
    physicalProgress: '30%',
    operationalStatus: 'Work in progress',
    outcome: 'Expected completion 8 January 2027',
    representative: 'Thottathil Ravindran',
    representativeTerm: '2021–2026',
    representativeRelationship: 'DURING TERM / LAC-ADS project',
    evidenceLevel: 'Government record',
    source: 'src-kn-ad-1',
    sourceDate: '2025',
    geographicVerification: 'Ward-level location verified',
    startDate: 'Not verified',
    expectedCompletion: '2027-01-08',
    actualCompletion: 'Not verified',
    cost: 'Not verified',
    funding: 'LAC-ADS 2025–26'
  },
  {
    id: 7,
    name: 'Francis Road–Vengali Gate Road',
    state: 'Kerala',
    district: 'Kozhikode',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'Kozhikode North',
    department: 'PWD',
    fundingSource: 'Road improvement 2024–25',
    administrativeSanction: 'Approximately ₹426.1 lakh',
    technicalSanction: 'Not verified',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Implementation / tender status requires verification',
    physicalProgress: 'Not verified',
    operationalStatus: 'Requires verification',
    outcome: 'Implementation context not confirmed',
    representative: 'Not established',
    representativeTerm: 'Not established',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Credible secondary source',
    source: 'src-kn-road-2',
    sourceDate: '2024',
    geographicVerification: 'Location verification pending',
    startDate: 'Not verified',
    expectedCompletion: 'Not verified',
    actualCompletion: 'Not verified',
    cost: 'Approximately ₹426.1 lakh',
    funding: 'Road improvement 2024–25'
  },
  {
    id: 8,
    name: 'Stroke Centre Lift — Government Medical College Kozhikode',
    state: 'Kerala',
    district: 'Kozhikode',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'Government Medical College Kozhikode',
    department: 'PWD',
    fundingSource: 'LAC-ADS 2025–26',
    administrativeSanction: 'Approx. ₹2.49 lakh',
    technicalSanction: 'Not verified',
    tenderAmount: 'Approx. ₹2.49 lakh',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'Tendered / awarded',
    physicalProgress: 'Not verified',
    operationalStatus: 'Tendered / awarded',
    outcome: 'Lift project not to be described as personal construction by the MLA',
    representative: 'Thottathil Ravindran',
    representativeTerm: '2021–2026',
    representativeRelationship: 'FUNDED / REPRESENTATIVE NAMED IN PROJECT RECORD',
    evidenceLevel: 'Official / tender record',
    source: 'src-kn-lift-1',
    sourceDate: '2025',
    geographicVerification: 'Institution-level project verified',
    startDate: 'Not verified',
    expectedCompletion: 'Not verified',
    actualCompletion: 'Not verified',
    cost: 'Approx. ₹2.49 lakh',
    funding: 'LAC-ADS 2025–26'
  },
  {
    id: 9,
    name: 'Palayam Multi-Level Car Parking',
    state: 'Kerala',
    district: 'Thiruvananthapuram',
    constituency: 'Thiruvananthapuram',
    lacNumber: 134,
    location: 'Palayam',
    department: 'SMARTCITY / local administration',
    fundingSource: 'Not established',
    administrativeSanction: 'Approximately ₹30 crore original contract context',
    technicalSanction: 'Not verified',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'COMPLETED',
    physicalProgress: '100%',
    operationalStatus: 'YES',
    outcome: 'PARTIALLY ACHIEVED / UNDERUTILIZED',
    representative: 'Not established',
    representativeTerm: 'Not established',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Official / secondary mix',
    source: 'src-tv-mlcp',
    sourceDate: '2024',
    geographicVerification: 'Location verified',
    startDate: 'Not verified',
    expectedCompletion: 'Not verified',
    actualCompletion: 'Completed',
    cost: 'Approximately ₹30 crore',
    funding: 'Not established'
  },
  {
    id: 10,
    name: 'Manaveeyam Veedhi',
    state: 'Kerala',
    district: 'Thiruvananthapuram',
    constituency: 'Thiruvananthapuram',
    lacNumber: 134,
    location: 'Palayam / Althara',
    department: 'Local urban works',
    fundingSource: 'Not established',
    administrativeSanction: '₹1.25 crore',
    technicalSanction: 'Not verified',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'COMPLETED',
    physicalProgress: '100%',
    operationalStatus: 'Functional / partially verified',
    outcome: 'Pedestrian improvements and cultural amenities delivered',
    representative: 'Not established',
    representativeTerm: 'Not established',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Secondary report / official record',
    source: 'src-tv-manaveeyam',
    sourceDate: '2023',
    geographicVerification: 'Location verified',
    startDate: '2023-05',
    expectedCompletion: '2023-08',
    actualCompletion: '2023-08',
    cost: '₹1.25 crore',
    funding: 'Not established'
  },
  {
    id: 11,
    name: 'Althara–Chenthitta Smart Road',
    state: 'Kerala',
    district: 'Thiruvananthapuram',
    constituency: 'Thiruvananthapuram',
    lacNumber: 134,
    location: 'Vellayambalam → Althara → Vazhuthacaud → Thycaud → Chenthitta',
    department: 'SMARTCITY / city mobility',
    fundingSource: 'Not established',
    administrativeSanction: '₹77.81 crore total project cost',
    technicalSanction: 'Not verified',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'NOT ESTABLISHED',
    status: 'COMPLETED',
    physicalProgress: 'Not verified',
    operationalStatus: 'Not verified',
    outcome: 'Total project cost is not assigned wholly to LAC 134',
    representative: 'Not established',
    representativeTerm: 'Not established',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Government record',
    source: 'src-tv-smartroad',
    sourceDate: '2023',
    geographicVerification: 'Partial — LAC-specific component not established',
    startDate: 'Not verified',
    expectedCompletion: 'Not verified',
    actualCompletion: 'Not verified',
    cost: '₹77.81 crore total project cost',
    funding: 'Not established / citywide project'
  },
  {
    id: 12,
    name: 'Vazhuthacaud sewer-line project',
    state: 'Kerala',
    district: 'Thiruvananthapuram',
    constituency: 'Thiruvananthapuram',
    lacNumber: 134,
    location: 'Vazhuthacaud Junction → MP Appan Road',
    department: 'SMARTCITY / KWA',
    fundingSource: 'SMARTCITY',
    administrativeSanction: '₹46.01 lakh',
    technicalSanction: '₹46.01 lakh',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'COMPLETED',
    physicalProgress: '100%',
    operationalStatus: 'Requires verification',
    outcome: 'Requires verification',
    representative: 'Not established',
    representativeTerm: 'Not established',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Government record',
    source: 'src-tv-sewer',
    sourceDate: '2024',
    geographicVerification: 'Project-level geographic mapping verified',
    startDate: 'Not verified',
    expectedCompletion: 'Not verified',
    actualCompletion: '100%',
    cost: '₹46.01 lakh',
    funding: 'SMARTCITY'
  },
  {
    id: 13,
    name: 'PRISM — Nadakkavu Government Girls School',
    state: 'Kerala',
    district: 'Kozhikode',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'Nadakkavu',
    department: 'PRISM',
    fundingSource: 'Government order / partners',
    administrativeSanction: 'Reported investment: ₹10–20 crore',
    technicalSanction: 'Not verified',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Financial reconciliation required',
    status: 'Implemented',
    physicalProgress: 'Varied / project-level verification required',
    operationalStatus: 'Implemented',
    outcome: 'Reported transformation project with financial reconciliation required',
    representative: 'Historical — A. Pradeep Kumar',
    representativeTerm: '2011–2026',
    representativeRelationship: 'Historical / not a direct personal expenditure claim',
    evidenceLevel: 'Strong project evidence',
    source: 'src-prism-1',
    sourceDate: '2025',
    geographicVerification: 'Strong, but financial reconciliation required',
    startDate: 'Not verified',
    expectedCompletion: 'Not verified',
    actualCompletion: 'Implemented',
    cost: '₹10–20 crore reported',
    funding: 'Government order / partners'
  },
  {
    id: 14,
    name: 'PRISM — Karaparamba Government Higher Secondary School',
    state: 'Kerala',
    district: 'Kozhikode',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'Karaparamba',
    department: 'PRISM',
    fundingSource: 'Government / PRISM',
    administrativeSanction: '₹12 crore',
    technicalSanction: 'Not verified',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'COMPLETED',
    physicalProgress: '100%',
    operationalStatus: 'Completed',
    outcome: 'Smart classrooms, science labs, hall, solar, landscaping, rainwater harvesting',
    representative: 'Historical — A. Pradeep Kumar',
    representativeTerm: 'Earlier period',
    representativeRelationship: 'Historical',
    evidenceLevel: 'Official / strong project evidence',
    source: 'src-prism-2',
    sourceDate: '2025',
    geographicVerification: 'Project location verified',
    startDate: 'Not verified',
    expectedCompletion: 'Not verified',
    actualCompletion: 'Completed',
    cost: '₹12 crore',
    funding: 'PRISM / govt'
  },
  {
    id: 15,
    name: 'Vaduthala Railway Overbridge',
    state: 'Kerala',
    district: 'Ernakulam',
    constituency: 'Ernakulam',
    lacNumber: 82,
    location: 'Vaduthala, Ernakulam',
    department: 'Railway / local administration',
    fundingSource: 'Not verified',
    administrativeSanction: 'Not verified',
    technicalSanction: 'Not verified',
    tenderAmount: 'Not verified',
    releasedAmount: 'Not verified',
    billsSubmitted: 'Not verified',
    billsPaid: 'Not verified',
    actualExpenditure: 'Not verified',
    status: 'Not verified',
    physicalProgress: 'Not verified',
    operationalStatus: 'Not verified',
    outcome: 'Project record available but missing detailed financial and status fields',
    representative: 'Not established',
    representativeTerm: 'Not established',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Verification pending',
    source: 'src-vaduthala',
    sourceDate: 'Not verified',
    geographicVerification: 'Location identified',
    startDate: 'Not verified',
    expectedCompletion: 'Not verified',
    actualCompletion: 'Not verified',
    cost: 'Not verified',
    funding: 'Not verified'
  }
];

const problems = [
  {
    id: 1,
    category: 'Water',
    problem: 'Drinking-water availability',
    location: 'Kozhikode North',
    evidence: 'Reported constituency-level concern; location-specific verification required',
    responsibleAuthority: 'Kerala Water Authority / Kozhikode Municipal Corporation',
    currentStatus: 'Reported',
    impact: 'Locational verification required',
    correctiveAction: 'Issue verification and site mapping required',
    firstReported: 'Not verified',
    lastReported: 'Not verified',
    verificationLevel: 'Reported concern',
    lacMapping: '27',
    representativeConnection: 'Not established',
    source: 'src-problem-kn-water'
  },
  {
    id: 2,
    category: 'Waste',
    problem: 'Solid Waste Management',
    location: 'Kozhikode North',
    evidence: 'Credible secondary evidence for constituency-level concern',
    responsibleAuthority: 'Kozhikode Municipal Corporation / waste management authorities',
    currentStatus: 'Reported',
    impact: 'Service quality and local public health concern',
    correctiveAction: 'Verify site-level condition and service records',
    firstReported: 'Not verified',
    lastReported: 'Not verified',
    verificationLevel: 'Credible secondary source',
    lacMapping: '27',
    representativeConnection: 'Not established',
    source: 'src-problem-kn-waste'
  },
  {
    id: 3,
    category: 'Roads',
    problem: 'Mananchira–Vellimadukunnu Road',
    location: 'Kozhikode North',
    evidence: 'Incomplete or unfinished road-development components, reported not automatically a project failure',
    responsibleAuthority: 'PWD / local authority',
    currentStatus: 'REPORTED INCOMPLETE',
    impact: 'Medians, drains, footpaths, lighting, bus bays and surfacing may still require completion',
    correctiveAction: 'Verify actual project scope and completion status against working drawings',
    firstReported: 'Not verified',
    lastReported: 'Not verified',
    verificationLevel: 'Reported deficiency',
    lacMapping: '27',
    representativeConnection: 'Not established',
    source: 'src-problem-kn-road'
  },
  {
    id: 4,
    category: 'Utilities',
    problem: 'Smart City drinking-water kiosks',
    location: 'Thiruvananthapuram',
    evidence: '25 kiosks installed; 13 reported defunct in 2026',
    responsibleAuthority: 'Smart City / local utilities / KWA',
    currentStatus: 'NON-FUNCTIONAL / REVIVAL UNDERWAY',
    impact: 'Intended outcome not fully achieved',
    correctiveAction: 'Separate infrastructure status from allegations; verify maintenance and billing records',
    firstReported: '2026',
    lastReported: '2026',
    verificationLevel: 'Official / field report',
    lacMapping: '134',
    representativeConnection: 'Not established',
    source: 'src-problem-tv-water'
  },
  {
    id: 5,
    category: 'Water',
    problem: 'Sewer and drainage constraints',
    location: 'Vazhuthacaud / MP Appan Road',
    evidence: 'Sewer line works completed; outcome and service continuity require verification',
    responsibleAuthority: 'SMARTCITY / KWA',
    currentStatus: 'Completed but outcome requires verification',
    impact: 'Long-term service efficacy not yet fully established',
    correctiveAction: 'Verify operational performance and maintenance before concluding full resolution',
    firstReported: 'Not verified',
    lastReported: 'Not verified',
    verificationLevel: 'Official / mixed',
    lacMapping: '134',
    representativeConnection: 'Not established',
    source: 'src-problem-tv-sewer'
  },
  {
    id: 6,
    category: 'Healthcare',
    problem: 'Public health access and service continuity',
    location: 'Ernakulam',
    evidence: 'Healthcare and drainage/water issues require stronger evidence treatment',
    responsibleAuthority: 'Local governing bodies / health agency',
    currentStatus: 'Reported',
    impact: 'Service deficits require verified site-by-site review',
    correctiveAction: 'Use primary records and local authority data before mapping to constituency-level blame',
    firstReported: 'Not verified',
    lastReported: 'Not verified',
    verificationLevel: 'Mixed',
    lacMapping: '82',
    representativeConnection: 'Not established',
    source: 'src-problem-er-health'
  },
  {
    id: 7,
    category: 'Roads',
    problem: 'Road and drainage deficiencies',
    location: 'Ernakulam',
    evidence: 'Road and transport issues require evidence treatment with local records',
    responsibleAuthority: 'PWD / local civic authorities',
    currentStatus: 'Reported',
    impact: 'Mobility and drainage service quality concerns',
    correctiveAction: 'Use official repair and completion records for each route',
    firstReported: 'Not verified',
    lastReported: 'Not verified',
    verificationLevel: 'Secondary / mixed',
    lacMapping: '82',
    representativeConnection: 'Not established',
    source: 'src-problem-er-road'
  }
];

const fundingRecords = [
  { id: 'f1', title: 'SMAR CITY sewer project', amount: '₹46.01 lakh', stage: 'Technical sanction', source: 'src-tv-sewer' },
  { id: 'f2', title: 'Ernakulam AMRUT', amount: '₹5 crore', stage: 'Technical sanction', source: 'src-amrut-1' },
  { id: 'f3', title: 'Kozhikode road restoration', amount: '₹62.653 lakh', stage: 'Administrative sanction', source: 'src-kn-road-1' }
];

const csrProjects = [
  {
    id: 1,
    organization: 'Cochin Shipyard Limited',
    project: 'CSR Support for General Hospital — Dialysis centre + children\'s play area',
    location: 'General Hospital, Ernakulam',
    investment: '₹1.23 crore',
    status: 'Implemented',
    verification: 'Documented CSR project',
    source: 'src-csr-er-1'
  },
  {
    id: 2,
    organization: 'Faizal & Shabana Foundation + partners',
    project: 'PRISM — Nadakkavu School Transformation',
    location: 'Nadakkavu',
    investment: '₹10–20 crore reported',
    status: 'Implemented',
    verification: 'Strong project evidence; financial reconciliation required',
    source: 'src-prism-1'
  },
  {
    id: 3,
    organization: 'ISRO / Infosys / IIM Kozhikode / partners',
    project: 'School infrastructure and labs',
    location: 'Kozhikode',
    investment: 'Not verified',
    status: 'Implemented',
    verification: 'Geographic verification required',
    source: 'src-prism-1'
  }
];

const sources = [
  {
    id: 'src-kwa-1',
    type: 'Government Record',
    org: 'Kerala Water Authority / local project record',
    title: 'Meenakshiparambu pipeline project record',
    date: '2024',
    section: 'Local improvement record',
    docId: 'KWA/ERK/2024/WATER/001',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-kwa-2',
    type: 'Government Record',
    org: 'Kerala Water Authority',
    title: 'Varma Road / Chittoor water-supply improvement',
    date: '2023',
    section: 'Project completion confirmation',
    docId: 'KWA/ERK/2023/WATER/014',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-amrut-1',
    type: 'Government Record',
    org: 'AMRUT / local agency',
    title: 'OHSR + CWR project at Vadathode',
    date: '2024',
    section: 'Technical sanction and project update',
    docId: 'AMRUT/ERK/2024/015',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-er-3',
    type: 'Official Update',
    org: 'LAC-related records',
    title: 'Container extension pipeline status update',
    date: '2026-02',
    section: 'Latest status / site handover pending',
    docId: 'ERK/MLA-SDF/2026/002',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-kn-road-1',
    type: 'Government Record',
    org: 'PWD / local administration',
    title: 'Karaparamb–Malaparamb Road Restoration',
    date: '2025',
    section: 'Administrative sanction and project status',
    docId: 'PWD/KN/2025/062',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-kn-ad-1',
    type: 'Government Record',
    org: 'LAC-ADS / public works',
    title: 'Aanakkayamthodu Improvement',
    date: '2025',
    section: 'LAC-ADS allocation and work progress',
    docId: 'LACADS/KND/2025/011',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-kn-road-2',
    type: 'Secondary Report',
    org: 'Reported road improvement record',
    title: 'Francis Road–Vengali Gate Road',
    date: '2024',
    section: 'Reported cost and implementation status',
    docId: 'KND/ROAD/2024/170',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-kn-lift-1',
    type: 'Tender / Government record',
    org: 'PWD / Government Medical College Kozhikode',
    title: 'Stroke Centre Lift tender and funding record',
    date: '2025',
    section: 'Funding relationship and tender value',
    docId: 'PWD/KMC/2025/LIFT/089',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-tv-mlcp',
    type: 'Government Record',
    org: 'Smart City / local authority',
    title: 'Palayam Multi-Level Car Parking',
    date: '2024',
    section: 'Construction status and operational outcome',
    docId: 'TVM/SMARTCITY/2024/MLCP',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-tv-manaveeyam',
    type: 'City project record',
    org: 'Local urban works / public space record',
    title: 'Manaveeyam Veedhi public space project',
    date: '2023',
    section: 'Project completion and amenity scope',
    docId: 'TVM/URBAN/2023/MANAVEEYAM',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-tv-smartroad',
    type: 'Government Record',
    org: 'City mobility / SMARTCITY',
    title: 'Althara–Chenthitta Smart Road',
    date: '2023',
    section: 'Total project cost and LAC-zone mapping',
    docId: 'TVM/SMARTROAD/2023/001',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-tv-sewer',
    type: 'Government Record',
    org: 'SMARTCITY / KWA',
    title: 'Vazhuthacaud sewer-line project',
    date: '2024',
    section: 'Technical sanction and monitoring evidence',
    docId: 'TVM/SMARTCITY/SEWER/2024/017',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-prism-1',
    type: 'Project record',
    org: 'PRISM / partners',
    title: 'Nadakkavu school transformation',
    date: '2025',
    section: 'Reported investment and implementation status',
    docId: 'PRISM/KND/2025/007',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-prism-2',
    type: 'Project record',
    org: 'PRISM / school authorities',
    title: 'Karaparamba Government Higher Secondary School',
    date: '2025',
    section: 'Completed transformation project',
    docId: 'PRISM/KND/2025/014',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-csr-er-1',
    type: 'CSR',
    org: 'Cochin Shipyard Limited',
    title: 'CSR support for General Hospital, Ernakulam',
    date: '2025',
    section: 'Dialysis centre and children\'s play area',
    docId: 'CSR/ERK/2025/001',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-problem-kn-water',
    type: 'Reported concern',
    org: 'Research dossier',
    title: 'Kozhikode North drinking-water availability concern',
    date: 'Not verified',
    section: 'Location-specific verification required',
    docId: 'KND/ISSUE/WATER/001',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-problem-kn-waste',
    type: 'Reported concern',
    org: 'Research dossier',
    title: 'Kozhikode North solid waste issue',
    date: 'Not verified',
    section: 'Service quality and verification',
    docId: 'KND/ISSUE/WASTE/001',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-problem-kn-road',
    type: 'Reported concern',
    org: 'Research dossier',
    title: 'Mananchira–Vellimadukunnu Road deficiency',
    date: 'Not verified',
    section: 'Reported incomplete works',
    docId: 'KND/ISSUE/ROAD/001',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-problem-tv-water',
    type: 'Official / field report',
    org: 'Smart City / civic service record',
    title: 'Drinking-water kiosks status update',
    date: '2026',
    section: 'Non-functional kiosk review',
    docId: 'TVM/SMARTCITY/DEFUNCT/2026',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-problem-tv-sewer',
    type: 'Official / mixed',
    org: 'SMARTCITY / KWA',
    title: 'Vazhuthacaud sewer-line project outcome check',
    date: 'Not verified',
    section: 'Operational impact after completion',
    docId: 'TVM/SMARTCITY/SEWER/OUTCOME',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-problem-er-health',
    type: 'Mixed',
    org: 'Research dossier',
    title: 'Ernakulam public health and drainage concern',
    date: 'Not verified',
    section: 'Evidence-quality discussion',
    docId: 'ERK/ISSUE/HEALTH/001',
    sourceText: 'Source reference available in research dossier.'
  },
  {
    id: 'src-problem-er-road',
    type: 'Secondary / mixed',
    org: 'Research dossier',
    title: 'Ernakulam road and drainage concern',
    date: 'Not verified',
    section: 'Evidence needs verification',
    docId: 'ERK/ISSUE/ROAD/001',
    sourceText: 'Source reference available in research dossier.'
  }
];

const metricLabels = {
  population: 'Population',
  voters: 'Voters',
  pollingPercentage: 'Polling %',
  projects: 'Projects',
  completed: 'Completed',
  delayed: 'Delayed',
  issues: 'Problems'
};

let currentConstituency = 'thiruvananthapuram';
let currentProblemFilter = 'all';

const heroStats = [
  { value: 14, label: 'Districts' },
  { value: 3, label: 'Detailed Constituencies' },
  { value: 15, label: 'Project Records' },
  { value: 7, label: 'Public Problem Records' }
];

function initTheme() {
  const saved = localStorage.getItem('civiclens-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

function setLanguage(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}

function showSection(section) {
  document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
  const target = document.getElementById('section-' + section);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === section);
  });

  closeNav();

  if (section === 'districts') renderDistrictDirectory();
  if (section === 'constituencies') renderConstituencyDashboard(currentConstituency);
  if (section === 'projects') renderProjects();
  if (section === 'problems') renderProblems();
  if (section === 'compare') renderComparison();
  if (section === 'sources') renderSources();
  if (section === 'representatives') renderRepresentatives();
}

function renderHome() {
  const hero = document.getElementById('heroStats');
  hero.innerHTML = heroStats.map(item => `
    <div class="hero-stat">
      <span class="hs-num" data-count="${item.value}">0</span>
      <span class="hs-label">${item.label}</span>
    </div>
  `).join('');

  animateCounters();

  renderKeralaMap();
  renderFeaturedConstituencies();
  renderCoverage();
}

function renderKeralaMap() {
  const map = document.getElementById('keralaMap');
  if (!map) return;
  const featured = ['Thiruvananthapuram', 'Kollam', 'Ernakulam', 'Kozhikode', 'Thrissur', 'Kannur'];
  map.innerHTML = districts.map(d => {
    const active = d === 'Ernakulam' || d === 'Thiruvananthapuram' || d === 'Kozhikode';
    const tag = featured.includes(d) ? 'Featured' : 'Data pending';
    return `
      <button class="district-node ${active ? 'active' : ''}" data-district="${d}">
        <div class="district-name">${d}</div>
        <div class="district-meta">${d === 'Thiruvananthapuram' ? 'LAC 134' : d === 'Ernakulam' ? 'LAC 82' : d === 'Kozhikode' ? 'LAC 27' : 'Data collection in progress'}</div>
        <span class="district-tag">${tag}</span>
      </button>
    `;
  }).join('');

  map.querySelectorAll('.district-node').forEach(node => {
    node.addEventListener('click', () => {
      const district = node.dataset.district;
      if (district === 'Ernakulam' || district === 'Thiruvananthapuram' || district === 'Kozhikode') {
        const id = district === 'Thiruvananthapuram' ? 'thiruvananthapuram' : district === 'Ernakulam' ? 'ernakulam' : 'kozhikode-north';
        currentConstituency = id;
        showSection('constituencies');
        renderConstituencyDashboard(id);
      } else {
        const dir = document.getElementById('districtDirectory');
        if (dir) {
          showSection('districts');
          const districtCard = document.getElementById('district-' + district.replace(/\s+/g, '-').toLowerCase());
          if (districtCard) districtCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });
}

function renderFeaturedConstituencies() {
  const featured = [
    { id: 'thiruvananthapuram', title: 'Thiruvananthapuram', code: 'LAC 134', district: 'Thiruvananthapuram', description: 'Urban infrastructure, sewer works and public-space projects.' },
    { id: 'ernakulam', title: 'Ernakulam', code: 'LAC 82', district: 'Ernakulam', description: 'Water-supply upgrades, AMRUT and delayed MLA-SDF records.' },
    { id: 'kozhikode-north', title: 'Kozhikode North', code: 'LAC 27', district: 'Kozhikode', description: 'Road works, municipal issues and PRISM-linked school transformation.' }
  ];
  const el = document.getElementById('featuredGrid');
  if (!el) return;
  el.innerHTML = featured.map(item => `
    <div class="featured-card">
      <div class="const-code">${item.code}</div>
      <h3>${item.title}</h3>
      <p><strong>District:</strong> ${item.district}</p>
      <p>${item.description}</p>
      <div class="card-actions">
        <span class="badge badge-info">Kerala focus</span>
        <a href="#" class="card-link" onclick="currentConstituency='${item.id}'; showSection('constituencies'); return false;">Explore Constituency →</a>
      </div>
    </div>
  `).join('');
}

function renderCoverage() {
  const el = document.getElementById('coverageGrid');
  if (!el) return;
  const totals = [
    { number: 14, label: 'Districts' },
    { number: 3, label: 'Detailed Constituencies' },
    { number: projects.length, label: 'Project Records' },
    { number: problems.length, label: 'Problem Records' },
    { number: sources.length, label: 'Source Records' }
  ];
  el.innerHTML = totals.map(item => `
    <div class="coverage-card">
      <div class="big-number">${item.number}</div>
      <div class="label">${item.label}</div>
    </div>
  `).join('');
}

function renderDistrictDirectory() {
  const districtDirectory = document.getElementById('districtDirectory');
  if (!districtDirectory) return;

  const districtCards = districts.map(district => {
    const districtConstituencies = [
      district === 'Thiruvananthapuram' ? 'Thiruvananthapuram' :
      district === 'Ernakulam' ? 'Ernakulam' :
      district === 'Kozhikode' ? 'Kozhikode North' :
      'Constituency data coming soon'
    ];

    const displayList = district === 'Thiruvananthapuram' || district === 'Ernakulam' || district === 'Kozhikode'
      ? `
        <li><span>${districtConstituencies}</span></li>
        <li class="pending">Other constituencies: Data collection in progress</li>
      `
      : `<li class="pending">Data collection in progress</li>`;

    return `
      <div class="district-card" id="district-${district.toLowerCase().replace(/\s+/g, '-')}">
        <div class="district-card-header">
          <h3>${district}</h3>
          <span class="badge ${district === 'Thiruvananthapuram' || district === 'Ernakulam' || district === 'Kozhikode' ? 'badge-info' : 'badge-pending'}">${district === 'Thiruvananthapuram' || district === 'Ernakulam' || district === 'Kozhikode' ? 'Live' : 'Pending'}</span>
        </div>
        <ul class="district-list">${displayList}</ul>
        ${district === 'Thiruvananthapuram' ? '<button class="btn-outline" onclick="currentConstituency=\'thiruvananthapuram\'; showSection(\'constituencies\');">Open Dashboard</button>' : district === 'Ernakulam' ? '<button class="btn-outline" onclick="currentConstituency=\'ernakulam\'; showSection(\'constituencies\');">Open Dashboard</button>' : district === 'Kozhikode' ? '<button class="btn-outline" onclick="currentConstituency=\'kozhikode-north\'; showSection(\'constituencies\');">Open Dashboard</button>' : ''}
      </div>
    `;
  }).join('');

  districtDirectory.innerHTML = districtCards;
}

function renderConstituencyDashboard(id) {
  const el = document.getElementById('constDashboard');
  if (!el) return;

  const item = constituencies.find(c => c.id === id) || constituencies[0];
  currentConstituency = item.id;
  const selector = document.getElementById('constSelector');
  if (selector) selector.value = item.id;

  const stats = [
    { label: 'LAC No', value: item.lacNo },
    { label: 'Polling Stations', value: item.pollingStations },
    { label: 'Electors', value: item.electors.toLocaleString() },
    { label: 'Voters', value: item.voters.toLocaleString() },
    { label: 'Polling %', value: `${item.pollingPercentage}%` },
    { label: 'Population', value: item.population },
    { label: 'Current MLA', value: item.currentMLA },
    { label: 'Party', value: item.party }
  ];

  const qualityItems = [
    { label: 'Official election data', value: item.dataQuality.officialElectionData ? 'Available' : 'Pending' },
    { label: 'Project financial data', value: item.dataQuality.projectFinancialData ? 'Partial' : 'Pending' },
    { label: 'Actual expenditure', value: item.dataQuality.actualExpenditure },
    { label: 'Geographic mapping', value: item.dataQuality.geographicMapping },
    { label: 'Problem records', value: item.dataQuality.problemRecords },
    { label: 'Current MLA', value: item.currentMLA }
  ];

  const relatedProjects = projects.filter(p => p.constituency === item.name || p.district === item.district).slice(0, 3);
  const relatedProblems = problems.filter(p => p.lacMapping === String(item.lacNo) || p.location.toLowerCase().includes(item.name.toLowerCase().split(' ')[0].toLowerCase())).slice(0, 3);

  el.innerHTML = `
    <div class="dashboard-shell">
      <div class="cd-header">
        <div>
          <h2>${item.name}</h2>
          <div class="cd-sub">${item.type} · ${item.district} · ${item.state} · LAC ${item.lacNo}</div>
        </div>
        <span class="badge badge-strong">Prototype — Kerala Dataset</span>
      </div>

      <div class="kpi-grid">
        ${stats.map(s => `
          <div class="kpi-card">
            <div class="kpi-label">${s.label}</div>
            <div class="kpi-value">${s.value}</div>
            <div class="kpi-sub">${s.label === 'Current MLA' ? item.currentTerm : item.populationNote || 'Kerala dataset'}</div>
          </div>
        `).join('')}
      </div>

      <div class="meta-grid">
        <div class="panel-card">
          <h3>Current Representative</h3>
          <div class="rep-summary">
            <div class="rep-avatar">${item.currentMLA.split(' ').map(part => part[0]).slice(0,2).join('').toUpperCase()}</div>
            <div>
              <div style="font-size:1.1rem;font-weight:800;">${item.currentMLA}</div>
              <div class="rep-meta-line">${item.currentTerm}</div>
              <div class="rep-meta-line">${item.party}</div>
              <div class="representative-tags">
                <span class="tag-pill">LAC ${item.lacNo}</span>
                <span class="tag-pill">${item.district}</span>
                <span class="tag-pill">${item.state}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-card">
          <h3>Data Quality</h3>
          <div class="quality-box">
            ${qualityItems.map(q => `
              <div class="quality-item">
                <span class="q-label">${q.label}</span>
                <div class="q-value">${q.value}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="what-we-know">
        <div class="knowledge-row">
          <div class="knowledge-card">
            <h4>What we know</h4>
            <ul>
              ${item.keyFacts.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
          <div class="knowledge-card">
            <h4>What is not yet verified</h4>
            <ul>
              ${item.unknowns.map(u => `<li>${u}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <div class="meta-grid" style="margin-top:18px;">
        <div class="panel-card">
          <h3>Representative History</h3>
          <ul class="term-list">
            ${item.representativeHistory.map(term => `
              <li>
                <span class="term-year">${term.year}</span>
                <span><strong>${term.name}</strong><br><small>${term.party}${term.note ? ` · ${term.note}` : ''}</small></span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="panel-card">
          <h3>Related project notes</h3>
          <ul class="term-list">
            ${relatedProjects.length ? relatedProjects.map(p => `
              <li>
                <span class="term-year">${p.status}</span>
                <span><strong>${p.name}</strong><br><small>${p.location}</small></span>
              </li>
            `).join('') : '<li><span class="term-year">—</span><span>No project records in active dataset for this constituency.</span></li>'}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function renderRepresentatives() {
  const repGrid = document.getElementById('repGrid');
  if (!repGrid) return;

  const search = document.getElementById('repSearch')?.value.toLowerCase() || '';
  const type = document.getElementById('repTypeFilter')?.value || '';

  const filtered = representatives.filter(rep => {
    const match = !search || rep.name.toLowerCase().includes(search) || rep.constituency.toLowerCase().includes(search) || rep.party.toLowerCase().includes(search);
    const matchType = !type || rep.position === type;
    return match && matchType;
  });

  repGrid.innerHTML = filtered.length ? filtered.map(rep => `
    <div class="rep-card">
      <div class="rep-top">
        <div class="rep-avatar-lg">${rep.avatar}</div>
        <div>
          <div class="rep-name">${rep.name}</div>
          <div class="rep-role">${rep.position} · ${rep.constituency}</div>
        </div>
      </div>
      <div class="rep-card-stats">
        <div class="rep-stat-box"><div class="num">${rep.projects}</div><div class="label">Projects</div></div>
        <div class="rep-stat-box"><div class="num">${rep.funds}</div><div class="label">Funds</div></div>
        <div class="rep-stat-box"><div class="num">${rep.questions}</div><div class="label">Questions</div></div>
      </div>
      <button class="btn-outline" onclick="openEvidenceModal('representative','${rep.id}')">Evidence</button>
    </div>
  `).join('') : '<div class="no-results">No representatives found matching your search.</div>';
}

function renderProjects() {
  const search = document.getElementById('projectSearch')?.value.toLowerCase() || '';
  const status = document.getElementById('statusFilter')?.value || '';
  const dept = document.getElementById('deptFilter')?.value || '';
  const sort = document.getElementById('sortProjects')?.value || 'name';

  let filtered = projects.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.location.toLowerCase().includes(search) || p.department.toLowerCase().includes(search) || p.constituency.toLowerCase().includes(search);
    const matchStatus = !status || p.status.toLowerCase() === status.toLowerCase();
    const matchDept = !dept || p.department === dept;
    return matchSearch && matchStatus && matchDept;
  });

  if (sort === 'cost-desc') filtered.sort((a,b) => parseCost(b.cost) - parseCost(a.cost));
  if (sort === 'cost-asc') filtered.sort((a,b) => parseCost(a.cost) - parseCost(b.cost));
  if (sort === 'name') filtered.sort((a,b) => a.name.localeCompare(b.name));

  const container = document.getElementById('projectsGrid');
  if (!container) return;

  container.innerHTML = filtered.length ? filtered.map(project => `
    <div class="project-card">
      <div class="project-card-header">
        <h3>${project.name}</h3>
        <span class="badge ${project.status === 'COMPLETED' ? 'badge-strong' : project.status === 'ONGOING' ? 'badge-info' : project.status === 'DELAYED' ? 'badge-warning' : 'badge-pending'}">${project.status}</span>
      </div>
      <div class="proj-meta">${project.department} · ${project.constituency} · ${project.location}</div>
      <div class="proj-costs">
        <div>
          <div class="proj-cost">${project.cost}</div>
          <div class="proj-label">Cost</div>
        </div>
        <div>
          <div class="proj-cost" style="font-size:1rem;">${project.physicalProgress}</div>
          <div class="proj-label">Progress</div>
        </div>
      </div>
      <div class="progress-bar">
        <div class="progress-fill ${statusClass(project.status)}" style="width:${progressWidth(project.physicalProgress)}%"></div>
      </div>
      <div class="project-footer">
        <small>${project.startDate !== 'Not verified' ? project.startDate : 'Start: Not verified'} → ${project.expectedCompletion !== 'Not verified' ? project.expectedCompletion : 'Completion: Not verified'}</small>
        <button class="view-source-btn" onclick="openEvidenceModal('project','${project.id}')">Evidence</button>
      </div>
    </div>
  `).join('') : '<div class="no-results">No project matches your current filters.</div>';

  renderStatusTabs();
}

function renderStatusTabs() {
  const tabs = ['all', 'COMPLETED', 'ONGOING', 'DELAYED', 'SANCTIONED', 'PROPOSED'];
  const el = document.getElementById('statusTabs');
  if (!el) return;
  el.innerHTML = tabs.map(tab => {
    const active = tab === 'all' && !document.getElementById('statusFilter')?.value ? 'active' : document.getElementById('statusFilter')?.value === tab ? 'active' : '';
    return `<button class="status-tab ${active}" data-tab="${tab}" onclick="setStatusFilter('${tab}', this)">${tab === 'all' ? 'All' : tab}</button>`;
  }).join('');
}

function setStatusFilter(tab, button) {
  const statusFilter = document.getElementById('statusFilter');
  if (statusFilter) statusFilter.value = tab === 'all' ? '' : tab;
  document.querySelectorAll('.status-tab').forEach(el => el.classList.toggle('active', el === button));
  renderProjects();
}

function renderProblems() {
  const tabs = ['all', ...new Set(problems.map(p => p.category))];
  const tabsEl = document.getElementById('problemTabs');
  if (tabsEl) {
    tabsEl.innerHTML = tabs.map(tab => `<button class="pcat-tab ${tab === currentProblemFilter ? 'active' : ''}" onclick="setProblemFilter('${tab}', this)">${tab === 'all' ? 'All' : tab}</button>`).join('');
  }

  const filtered = currentProblemFilter === 'all' ? problems : problems.filter(p => p.category === currentProblemFilter);
  const grid = document.getElementById('problemsGrid');
  if (!grid) return;
  grid.innerHTML = filtered.map(problem => `
    <div class="problem-card">
      <div class="badge badge-info">${problem.category}</div>
      <h3>${problem.problem}</h3>
      <p>${problem.evidence}</p>
      <div class="problem-meta">
        <span>${problem.location}</span>
        <span>${problem.currentStatus}</span>
      </div>
      <div style="margin-top:12px;">
        <button class="view-source-btn" onclick="openEvidenceModal('problem','${problem.id}')">Evidence</button>
      </div>
    </div>
  `).join('');
}

function setProblemFilter(tab, button) {
  currentProblemFilter = tab;
  document.querySelectorAll('.pcat-tab').forEach(el => el.classList.toggle('active', el === button));
  renderProblems();
}

function renderComparison() {
  const cmp1 = document.getElementById('cmp1');
  const cmp2 = document.getElementById('cmp2');
  const cmp3 = document.getElementById('cmp3');
  if (!cmp1 || !cmp2 || !cmp3) return;

  const focus = [cmp1.value, cmp2.value, cmp3.value].map(v => constituencies.find(c => c.id === v)).filter(Boolean);
  const rows = [
    ['Population', 'population'],
    ['Voters', 'voters'],
    ['Polling %', 'pollingPercentage'],
    ['Projects', 'projectsCount'],
    ['Completed', 'completedCount'],
    ['Delayed', 'delayedCount'],
    ['Problems', 'issuesCount']
  ];

  const table = document.getElementById('comparisonTableWrap');
  if (table) {
    const html = `
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Metric</th>
            ${focus.map(c => `<th>${c.name}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map(([label, key]) => `
            <tr>
              <td>${label}</td>
              ${focus.map(c => `<td>${getComparisonValue(c, key)}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    table.innerHTML = html;
  }

  const chart = document.getElementById('comparisonChartRow');
  if (chart) {
    const bars = focus.map((item, index) => {
      const value = projectAndIssueCounts(item).projects;
      const height = Math.max(18, (value / Math.max(...focus.map(f => projectAndIssueCounts(f).projects))) * 120);
      return `
        <div class="chart-card">
          <h3>${item.name}</h3>
          <div class="bar-rows">
            <div class="bar-col" style="width:100%;">
              <div class="bar-stack" style="height:${height}px;">
                <div class="bar-segment" style="height:${height}px; background:${['#1b6feb','#10b981','#f59e0b'][index]};"></div>
              </div>
            </div>
          </div>
          <div class="bar-label">Projects: ${value}</div>
        </div>
      `;
    }).join('');
    chart.innerHTML = bars;
  }

  const rep1 = document.getElementById('repCmp1');
  const rep2 = document.getElementById('repCmp2');
  if (rep1 && rep2) {
    const repA = representatives[Number(rep1.value)];
    const repB = representatives[Number(rep2.value)];
    const repContent = document.getElementById('repComparisonContent');
    if (repContent && repA && repB) {
      repContent.innerHTML = `
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>${repA.name}</th>
              <th>${repB.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Position</td><td>${repA.position}</td><td>${repB.position}</td></tr>
            <tr><td>Constituency</td><td>${repA.constituency}</td><td>${repB.constituency}</td></tr>
            <tr><td>Party</td><td>${repA.party}</td><td>${repB.party}</td></tr>
            <tr><td>Projects</td><td>${repA.projects}</td><td>${repB.projects}</td></tr>
            <tr><td>Funds</td><td>${repA.funds}</td><td>${repB.funds}</td></tr>
          </tbody>
        </table>
      `;
    }
  }
}

function getComparisonValue(item, key) {
  const values = {
    population: item.population,
    voters: item.voters.toLocaleString(),
    pollingPercentage: `${item.pollingPercentage}%`,
    projectsCount: projectAndIssueCounts(item).projects,
    completedCount: projectAndIssueCounts(item).completed,
    delayedCount: projectAndIssueCounts(item).delayed,
    issuesCount: projectAndIssueCounts(item).issues
  };
  return values[key] ?? 'Not verified';
}

function projectAndIssueCounts(item) {
  const relatedProjects = projects.filter(p => p.constituency === item.name || p.district === item.district);
  const completed = relatedProjects.filter(p => p.status === 'COMPLETED').length;
  const delayed = relatedProjects.filter(p => p.status === 'DELAYED').length;
  const issues = problems.filter(p => p.lacMapping === String(item.lacNo) || p.location.toLowerCase().includes(item.name.toLowerCase().split(' ')[0].toLowerCase())).length;
  return { projects: relatedProjects.length, completed, delayed, issues };
}

function switchCompareTab(tab) {
  document.querySelectorAll('.compare-tab').forEach(el => el.classList.toggle('active', el.dataset.tab === tab));
  document.getElementById('constComparePanel').style.display = tab === 'constituencies' ? 'block' : 'none';
  document.getElementById('repComparePanel').style.display = tab === 'representatives' ? 'block' : 'none';
}

function renderSources() {
  const filters = ['all', ...new Set(sources.map(s => s.type))];
  const filterContainer = document.getElementById('sourceFilters');
  if (filterContainer) {
    filterContainer.innerHTML = filters.map(filter => `<button class="filter-chip ${filter === 'all' ? 'active' : ''}" data-filter="${filter}" onclick="setSourceFilter('${filter}', this)">${filter === 'all' ? 'All' : filter}</button>`).join('');
  }

  const grid = document.getElementById('sourcesGrid');
  if (!grid) return;
  const active = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';
  const filtered = active === 'all' ? sources : sources.filter(s => s.type === active);
  grid.innerHTML = filtered.map(source => `
    <div class="source-card">
      <div class="source-type">${source.type}</div>
      <h3>${source.title}</h3>
      <p>${source.org}</p>
      <small>${source.date} · ${source.section}</small>
      <div style="margin-top:12px;">
        <button class="view-source-btn" onclick="openEvidenceModal('source','${source.id}')">View details</button>
      </div>
    </div>
  `).join('');
}

function setSourceFilter(filterValue, button) {
  document.querySelectorAll('.filter-chip').forEach(el => el.classList.toggle('active', el === button));
  renderSources();
}

function openEvidenceModal(type, id) {
  const modal = document.getElementById('evidenceModal');
  const title = document.getElementById('evidenceModalTitle');
  const body = document.getElementById('evidenceModalBody');

  if (type === 'source') {
    const source = sources.find(s => s.id === id) || sources[0];
    title.textContent = 'Source evidence';
    body.innerHTML = `
      <div class="badge badge-info">${source.type}</div>
      <h3 style="margin-top:12px;">${source.title}</h3>
      <p>${source.org}</p>
      <div class="ev-grid">
        <div class="ev-item"><span class="ev-key">Organization</span><span class="ev-value">${source.org}</span></div>
        <div class="ev-item"><span class="ev-key">Date</span><span class="ev-value">${source.date}</span></div>
        <div class="ev-item"><span class="ev-key">Section</span><span class="ev-value">${source.section}</span></div>
        <div class="ev-item"><span class="ev-key">Document ID</span><span class="ev-value">${source.docId}</span></div>
      </div>
      <p style="margin-top:14px;">${source.sourceText}</p>
    `;
  }

  if (type === 'project') {
    const project = projects.find(p => p.id === Number(id));
    title.textContent = 'Project evidence';
    body.innerHTML = `
      <div class="badge badge-info">${project.status}</div>
      <h3 style="margin-top:12px;">${project.name}</h3>
      <p>${project.location} · ${project.department}</p>
      <div class="ev-grid">
        <div class="ev-item"><span class="ev-key">Administrative sanction</span><span class="ev-value">${project.administrativeSanction}</span></div>
        <div class="ev-item"><span class="ev-key">Technical sanction</span><span class="ev-value">${project.technicalSanction}</span></div>
        <div class="ev-item"><span class="ev-key">Released</span><span class="ev-value">${project.releasedAmount}</span></div>
        <div class="ev-item"><span class="ev-key">Actual expenditure</span><span class="ev-value">${project.actualExpenditure}</span></div>
        <div class="ev-item"><span class="ev-key">Representative relationship</span><span class="ev-value">${project.representativeRelationship}</span></div>
        <div class="ev-item"><span class="ev-key">Verification</span><span class="ev-value">${project.geographicVerification}</span></div>
      </div>
      <p style="margin-top:14px;">This project record distinguishes sanction, release and expenditure, and marks missing values as Not verified rather than zero.</p>
    `;
  }

  if (type === 'problem') {
    const problem = problems.find(p => p.id === Number(id));
    title.textContent = 'Problem evidence';
    body.innerHTML = `
      <div class="badge badge-warning">${problem.category}</div>
      <h3 style="margin-top:12px;">${problem.problem}</h3>
      <p>${problem.location}</p>
      <div class="ev-grid">
        <div class="ev-item"><span class="ev-key">Authority</span><span class="ev-value">${problem.responsibleAuthority}</span></div>
        <div class="ev-item"><span class="ev-key">Status</span><span class="ev-value">${problem.currentStatus}</span></div>
        <div class="ev-item"><span class="ev-key">Verification</span><span class="ev-value">${problem.verificationLevel}</span></div>
        <div class="ev-item"><span class="ev-key">Representative link</span><span class="ev-value">${problem.representativeConnection}</span></div>
      </div>
      <p style="margin-top:14px;">${problem.evidence}</p>
    `;
  }

  if (type === 'representative') {
    const rep = representatives.find(r => r.id === id);
    title.textContent = 'Representative record';
    body.innerHTML = `
      <div class="badge badge-info">${rep.position}</div>
      <h3 style="margin-top:12px;">${rep.name}</h3>
      <p>${rep.constituency} · ${rep.party}</p>
      <div class="ev-grid">
        <div class="ev-item"><span class="ev-key">Constituency</span><span class="ev-value">${rep.constituency}</span></div>
        <div class="ev-item"><span class="ev-key">Term</span><span class="ev-value">${rep.term}</span></div>
        <div class="ev-item"><span class="ev-key">Projects</span><span class="ev-value">${rep.projects}</span></div>
        <div class="ev-item"><span class="ev-key">Funds</span><span class="ev-value">${rep.funds}</span></div>
      </div>
      <p style="margin-top:14px;">Representative timelines in this prototype are recorded as term history and should not be conflated with personal project responsibility without evidence.</p>
    `;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeNav() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  if (nav) nav.classList.remove('open');
  if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
}

function parseCost(value) {
  const match = String(value).match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function statusClass(status) {
  if (status === 'COMPLETED') return 'green';
  if (status === 'ONGOING') return 'blue';
  if (status === 'DELAYED') return 'amber';
  return 'red';
}

function progressWidth(value) {
  if (typeof value === 'string' && value.includes('%')) {
    const num = Number(value.replace('%', ''));
    return Number.isFinite(num) ? Math.min(num, 100) : 0;
  }
  return 0;
}

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = Number(el.dataset.count);
    let current = 0;
    const step = target / 30;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.round(current);
      }
    }, 30);
  });
}

function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('globalSearch').focus(), 100);
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('globalSearch').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

function runSearch(query) {
  const q = String(query || '').trim().toLowerCase();
  const results = document.getElementById('searchResults');
  if (!q || !results) return;

  const items = [
    ...constituencies.map(item => ({ name: item.name, type: 'Constituency', meta: item.district + ' · ' + item.state, target: () => { currentConstituency = item.id; showSection('constituencies'); } })),
    ...representatives.map(item => ({ name: item.name, type: item.position, meta: item.constituency + ' · ' + item.party, target: () => { showSection('representatives'); } })),
    ...projects.map(item => ({ name: item.name, type: 'Project', meta: item.district + ' · ' + item.status, target: () => { showSection('projects'); } })),
    ...problems.map(item => ({ name: item.problem, type: 'Problem', meta: item.location + ' · ' + item.category, target: () => { showSection('problems'); } })),
    ...sources.map(item => ({ name: item.title, type: item.type, meta: item.org, target: () => { showSection('sources'); } }))
  ].filter(item => {
    return item.name.toLowerCase().includes(q) || item.meta.toLowerCase().includes(q) || item.type.toLowerCase().includes(q);
  }).slice(0, 8);

  if (!items.length) {
    results.innerHTML = '<div class="no-results">No results found for this Kerala search.</div>';
    return;
  }

  results.innerHTML = items.map(item => `
    <div class="search-result-item" onclick="${item.target.toString()}; closeSearch();">
      <div class="sri-icon">•</div>
      <div class="sri-info">
        <div class="sri-name">${item.name}</div>
        <div class="sri-meta">${item.meta}</div>
      </div>
      <span class="sri-type">${item.type}</span>
    </div>
  `).join('');
}

function heroSearchSubmit() {
  const value = document.getElementById('heroSearch')?.value || '';
  if (value.trim()) {
    runSearch(value);
    openSearch();
  }
}

function bindEvents() {
  document.getElementById('searchTrigger')?.addEventListener('click', openSearch);
  document.getElementById('globalSearch')?.addEventListener('input', (e) => runSearch(e.target.value));
  document.getElementById('heroSearch')?.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    const dd = document.getElementById('heroDropdown');
    if (!q) { dd.classList.remove('open'); return; }
    const items = [
      ...constituencies.map(c => ({ name: c.name, type: 'Constituency' })),
      ...representatives.map(r => ({ name: r.name, type: r.position })),
      ...projects.map(p => ({ name: p.name, type: 'Project' }))
    ].filter(item => item.name.toLowerCase().includes(q)).slice(0, 6);
    if (!items.length) { dd.classList.remove('open'); return; }
    dd.innerHTML = items.map(item => `<div class="hd-item" onclick="runSearch('${item.name}'); closeSearch();">${item.name} <span style="color:var(--text-muted); font-size:11px; margin-left:6px;">${item.type}</span></div>`).join('');
    dd.classList.add('open');
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.hero-search-box')) {
      document.getElementById('heroDropdown')?.classList.remove('open');
    }
  });

  document.getElementById('hamburger')?.addEventListener('click', () => {
    const nav = document.getElementById('navLinks');
    const burger = document.getElementById('hamburger');
    const isOpen = nav.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('civiclens-theme', next);
  });

  document.getElementById('constSelector')?.addEventListener('change', (e) => {
    currentConstituency = e.target.value;
    renderConstituencyDashboard(e.target.value);
  });

  document.getElementById('repSearch')?.addEventListener('input', renderRepresentatives);
  document.getElementById('repTypeFilter')?.addEventListener('change', renderRepresentatives);
  document.getElementById('projectSearch')?.addEventListener('input', renderProjects);
  document.getElementById('statusFilter')?.addEventListener('change', renderProjects);
  document.getElementById('deptFilter')?.addEventListener('change', renderProjects);
  document.getElementById('sortProjects')?.addEventListener('change', renderProjects);

  document.getElementById('cmp1')?.addEventListener('change', renderComparison);
  document.getElementById('cmp2')?.addEventListener('change', renderComparison);
  document.getElementById('cmp3')?.addEventListener('change', renderComparison);
  document.getElementById('repCmp1')?.addEventListener('change', renderComparison);
  document.getElementById('repCmp2')?.addEventListener('change', renderComparison);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeSearch();
      closeModal('sourceModal');
      closeModal('evidenceModal');
    }
  });
}

function init() {
  initTheme();
  bindEvents();
  renderHome();
  renderDistrictDirectory();
  renderConstituencyDashboard(currentConstituency);
  renderRepresentatives();
  renderProjects();
  renderProblems();
  renderComparison();
  renderSources();
  showSection('home');
}

document.addEventListener('DOMContentLoaded', init);
