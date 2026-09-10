/* ============================================================
   CIVICLENS — script.js
   Complete frontend logic with demo data
   ============================================================ */

'use strict';

/* ============================================================
   DEMO DATA
   ============================================================ */

const CONSTITUENCIES = {
  'new-delhi': {
    name: 'New Delhi',
    type: 'Assembly Constituency',
    state: 'Delhi',
    district: 'New Delhi',
    population: '5,20,000',
    voters: '3,80,000',
    area: '35 sq km',
    funds: '₹142 Cr',
    fundsNum: 142,
    projects: 86,
    completed: 61,
    ongoing: 19,
    delayed: 6,
    abandoned: 0,
    proposed: 12,
    problems: 24,
    updated: 'June 2025',
    representative: 'Ramesh Kumar',
    party: 'Demo Party A',
    term: '2020–2025',
    position: 'MLA',
  },
  'south-delhi': {
    name: 'South Delhi',
    type: 'Parliamentary Constituency',
    state: 'Delhi',
    district: 'South Delhi',
    population: '22,00,000',
    voters: '16,40,000',
    area: '250 sq km',
    funds: '₹310 Cr',
    fundsNum: 310,
    projects: 148,
    completed: 112,
    ongoing: 24,
    delayed: 9,
    abandoned: 3,
    proposed: 28,
    problems: 41,
    updated: 'May 2025',
    representative: 'Priya Sharma',
    party: 'Demo Party B',
    term: '2019–2024',
    position: 'MP',
  },
  'north-east-delhi': {
    name: 'North East Delhi',
    type: 'Parliamentary Constituency',
    state: 'Delhi',
    district: 'North East Delhi',
    population: '29,00,000',
    voters: '20,10,000',
    area: '60 sq km',
    funds: '₹284 Cr',
    fundsNum: 284,
    projects: 132,
    completed: 89,
    ongoing: 31,
    delayed: 11,
    abandoned: 1,
    proposed: 22,
    problems: 56,
    updated: 'April 2025',
    representative: 'Anil Verma',
    party: 'Demo Party A',
    term: '2019–2024',
    position: 'MP',
  },
  'chandni-chowk': {
    name: 'Chandni Chowk',
    type: 'Parliamentary Constituency',
    state: 'Delhi',
    district: 'Central Delhi',
    population: '18,40,000',
    voters: '12,60,000',
    area: '100 sq km',
    funds: '₹198 Cr',
    fundsNum: 198,
    projects: 97,
    completed: 68,
    ongoing: 18,
    delayed: 7,
    abandoned: 4,
    proposed: 19,
    problems: 33,
    updated: 'June 2025',
    representative: 'Sunita Mehta',
    party: 'Demo Party C',
    term: '2019–2024',
    position: 'MP',
  }
};

const REPRESENTATIVES = [
  {
    name: 'Ramesh Kumar',
    position: 'MLA',
    constituency: 'New Delhi',
    state: 'Delhi',
    party: 'Demo Party A',
    term: '2020–2025',
    email: 'ramesh.kumar@example.gov.in',
    phone: '+91-11-2300-XXXX',
    projects: 86,
    funds: '₹142 Cr',
    legislative: 48,
    documents: 22,
    avatar: 'R',
    termHistory: [
      { term: '2020–2025', constituency: 'New Delhi', position: 'MLA' },
      { term: '2015–2020', constituency: 'New Delhi', position: 'MLA' },
    ],
    legislative_record: [
      { label: 'Questions raised', value: '112' },
      { label: 'Bills introduced', value: '3' },
      { label: 'Committee memberships', value: '4' },
      { label: 'Attendance (Sessions)', value: '87%' },
    ],
  },
  {
    name: 'Priya Sharma',
    position: 'MP',
    constituency: 'South Delhi',
    state: 'Delhi',
    party: 'Demo Party B',
    term: '2019–2024',
    email: 'priya.sharma@example.nic.in',
    phone: '+91-11-2340-XXXX',
    projects: 148,
    funds: '₹310 Cr',
    legislative: 67,
    documents: 38,
    avatar: 'P',
    termHistory: [
      { term: '2019–2024', constituency: 'South Delhi', position: 'MP' },
    ],
    legislative_record: [
      { label: 'Questions raised', value: '198' },
      { label: 'Bills introduced', value: '6' },
      { label: 'Committee memberships', value: '5' },
      { label: 'Attendance (Sessions)', value: '91%' },
    ],
  },
  {
    name: 'Anil Verma',
    position: 'MP',
    constituency: 'North East Delhi',
    state: 'Delhi',
    party: 'Demo Party A',
    term: '2019–2024',
    email: 'anil.verma@example.nic.in',
    phone: '+91-11-2350-XXXX',
    projects: 132,
    funds: '₹284 Cr',
    legislative: 54,
    documents: 29,
    avatar: 'A',
    termHistory: [
      { term: '2019–2024', constituency: 'North East Delhi', position: 'MP' },
      { term: '2014–2019', constituency: 'North East Delhi', position: 'MP' },
    ],
    legislative_record: [
      { label: 'Questions raised', value: '167' },
      { label: 'Bills introduced', value: '4' },
      { label: 'Committee memberships', value: '3' },
      { label: 'Attendance (Sessions)', value: '78%' },
    ],
  },
  {
    name: 'Sunita Mehta',
    position: 'MP',
    constituency: 'Chandni Chowk',
    state: 'Delhi',
    party: 'Demo Party C',
    term: '2019–2024',
    email: 'sunita.mehta@example.nic.in',
    phone: '+91-11-2360-XXXX',
    projects: 97,
    funds: '₹198 Cr',
    legislative: 41,
    documents: 19,
    avatar: 'S',
    termHistory: [
      { term: '2019–2024', constituency: 'Chandni Chowk', position: 'MP' },
    ],
    legislative_record: [
      { label: 'Questions raised', value: '89' },
      { label: 'Bills introduced', value: '2' },
      { label: 'Committee memberships', value: '3' },
      { label: 'Attendance (Sessions)', value: '82%' },
    ],
  },
];

const PROJECTS = [
  { id: 1, name: 'Connaught Place Road Resurfacing', location: 'Connaught Place, New Delhi', dept: 'PWD', cost: '₹4.2 Cr', costNum: 4.2, sanctioned: '₹4.0 Cr', expenditure: '₹3.9 Cr', start: 'Jan 2023', expected: 'Dec 2023', actual: 'Feb 2024', status: 'Completed', source: 'src-1', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,true,true,true], x: 48, y: 42 },
  { id: 2, name: 'Lodi Road Flyover Construction', location: 'Lodi Road, New Delhi', dept: 'PWD', cost: '₹82 Cr', costNum: 82, sanctioned: '₹80 Cr', expenditure: '₹41 Cr', start: 'Mar 2022', expected: 'Dec 2024', actual: null, status: 'Ongoing', source: 'src-2', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,true,false,false], x: 35, y: 55 },
  { id: 3, name: 'Yamuna Bank Sewer Upgrade', location: 'Yamuna Pushta, North East Delhi', dept: 'MCD', cost: '₹18 Cr', costNum: 18, sanctioned: '₹18 Cr', expenditure: '₹6 Cr', start: 'Jul 2021', expected: 'Mar 2023', actual: null, status: 'Delayed', source: 'src-3', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,true,false,false], x: 72, y: 38 },
  { id: 4, name: 'Shastri Park Community Centre', location: 'Shastri Park, North East Delhi', dept: 'DDA', cost: '₹9.6 Cr', costNum: 9.6, sanctioned: '₹9.0 Cr', expenditure: '₹9.4 Cr', start: 'Jun 2021', expected: 'Dec 2022', actual: 'Jan 2023', status: 'Completed', source: 'src-4', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,true,true,true], x: 60, y: 28 },
  { id: 5, name: 'Chandni Chowk Heritage Walk', location: 'Chandni Chowk, Central Delhi', dept: 'NDMC', cost: '₹15 Cr', costNum: 15, sanctioned: '₹14.5 Cr', expenditure: '₹14.2 Cr', start: 'Sep 2020', expected: 'Mar 2022', actual: 'May 2022', status: 'Completed', source: 'src-5', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,true,true,true], x: 28, y: 30 },
  { id: 6, name: 'Gole Market Parking Complex', location: 'Gole Market, New Delhi', dept: 'NDMC', cost: '₹38 Cr', costNum: 38, sanctioned: '₹35 Cr', expenditure: '₹8 Cr', start: 'Nov 2022', expected: 'Jun 2025', actual: null, status: 'Ongoing', source: 'src-6', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,true,false,false], x: 55, y: 65 },
  { id: 7, name: 'Jama Masjid Area Drainage Overhaul', location: 'Jama Masjid, Central Delhi', dept: 'MCD', cost: '₹22 Cr', costNum: 22, sanctioned: '₹20 Cr', expenditure: '₹2 Cr', start: 'Feb 2020', expected: 'Dec 2021', actual: null, status: 'Abandoned', source: 'src-7', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,false,false,false], x: 20, y: 48 },
  { id: 8, name: 'Rohini Sector 10 School Building', location: 'Rohini, North West Delhi', dept: 'Education', cost: '₹6.8 Cr', costNum: 6.8, sanctioned: '₹6.5 Cr', expenditure: '₹6.7 Cr', start: 'Apr 2022', expected: 'Mar 2023', actual: 'Apr 2023', status: 'Completed', source: 'src-1', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,true,true,true], x: 82, y: 18 },
  { id: 9, name: 'Sadar Bazar PHC Upgrade', location: 'Sadar Bazar, Central Delhi', dept: 'Health', cost: '₹4.1 Cr', costNum: 4.1, sanctioned: '₹4.0 Cr', expenditure: '₹3.8 Cr', start: 'Sep 2022', expected: 'Aug 2023', actual: 'Sep 2023', status: 'Completed', source: 'src-2', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,true,true,true], x: 40, y: 72 },
  { id: 10, name: 'Kashmere Gate Bus Terminus', location: 'Kashmere Gate, Central Delhi', dept: 'PWD', cost: '₹28 Cr', costNum: 28, sanctioned: '₹28 Cr', expenditure: '₹0', start: null, expected: 'Dec 2026', actual: null, status: 'Proposed', source: 'src-3', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,false,false,false,false,false], x: 67, y: 82 },
  { id: 11, name: 'Paharganj Streetlight Replacement', location: 'Paharganj, Central Delhi', dept: 'MCD', cost: '₹3.2 Cr', costNum: 3.2, sanctioned: '₹3.0 Cr', expenditure: '₹3.1 Cr', start: 'Jan 2024', expected: 'Jun 2024', actual: 'Jun 2024', status: 'Completed', source: 'src-4', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,true,true,true], x: 88, y: 58 },
  { id: 12, name: 'Dilli Haat Expansion Phase 2', location: 'INA, South Delhi', dept: 'DDA', cost: '₹44 Cr', costNum: 44, sanctioned: '₹42 Cr', expenditure: '₹19 Cr', start: 'Oct 2023', expected: 'Dec 2025', actual: null, status: 'Ongoing', source: 'src-5', timeline: ['Proposal','AA','Sanctioned','Tender','Construction','Completed'], progress: [true,true,true,true,false,false], x: 15, y: 68 },
];

const PROBLEMS = [
  { id: 1, category: 'Waste & Environment', title: 'Garbage Overflow near ITO Metro', location: 'ITO, New Delhi', desc: 'Uncollected municipal waste accumulating near the ITO Metro exit. Community complaints filed with MCD.', dept: 'MCD', status: 'Under review', date: '14 May 2025', updated: '20 May 2025', source: 'src-1' },
  { id: 2, category: 'Water & Utilities', title: 'Burst Pipeline — Karol Bagh', location: 'Karol Bagh, Central Delhi', desc: 'Main water pipeline burst causing supply disruption to approximately 400 households for 3 days.', dept: 'Delhi Jal Board', status: 'Resolved', date: '02 Apr 2025', updated: '05 Apr 2025', source: 'src-2' },
  { id: 3, category: 'Transport & Infrastructure', title: 'Pothole Cluster — Mathura Road', location: 'Mathura Road, South Delhi', desc: 'Multiple large potholes reported on a 1.2 km stretch. Cause attributed to water logging last monsoon.', dept: 'PWD', status: 'Work initiated', date: '10 Mar 2025', updated: '28 May 2025', source: 'src-3' },
  { id: 4, category: 'Essential Services', title: 'Non-functional Streetlights — Trilokpuri', location: 'Trilokpuri, East Delhi', desc: '14 streetlights non-functional in Block 16. Reported by RWA to local MLA office.', dept: 'MCD', status: 'Resolved', date: '08 Jan 2025', updated: '22 Jan 2025', source: 'src-4' },
  { id: 5, category: 'Waste & Environment', title: 'Open Drains — Seelampur', location: 'Seelampur, North East Delhi', desc: 'Open drainage channels causing environmental and health hazard. Multiple RTIs filed.', dept: 'Delhi Jal Board', status: 'Reported', date: '18 May 2025', updated: '18 May 2025', source: 'src-5' },
  { id: 6, category: 'Transport & Infrastructure', title: 'Damaged Footpath — Lajpat Nagar', location: 'Lajpat Nagar, South Delhi', desc: 'Broken tiles and encroachment on pedestrian footpath. Safety concern for elderly and disabled.', dept: 'MCD', status: 'Reported', date: '25 Apr 2025', updated: '25 Apr 2025', source: 'src-6' },
  { id: 7, category: 'Essential Services', title: 'Overcrowded Government School — Shahdara', location: 'Shahdara, East Delhi', desc: 'One government school serving 3 blocks with inadequate classroom space. Formal request for additional building submitted.', dept: 'Education Dept', status: 'Under review', date: '01 Feb 2025', updated: '15 Apr 2025', source: 'src-7' },
  { id: 8, category: 'Water & Utilities', title: 'Irregular Power Supply — Narela', location: 'Narela, North Delhi', desc: 'Frequent and extended power cuts reported by residents. Issue escalated to DISCOMS.', dept: 'BSES/Discoms', status: 'Work initiated', date: '12 Mar 2025', updated: '30 May 2025', source: 'src-1' },
];

const SOURCES = [
  { id: 'src-1', type: 'Government', org: 'Ministry of Road Transport & Highways', title: 'Annual Development Report 2023–24, Chapter 4: Urban Roads', date: 'Nov 2024', section: 'Section 4.2.1, Page 87', docId: 'MoRTH/ADR/2024/CH4', url: '#' },
  { id: 'src-2', type: 'CAG', org: "Comptroller & Auditor General of India", title: 'Performance Audit: Urban Infrastructure Projects, Delhi 2022–23', date: 'Mar 2024', section: 'Para 3.4, Page 62', docId: 'CAG/PA/UR/DEL/2023', url: '#' },
  { id: 'src-3', type: 'RTI', org: 'Delhi Jal Board (RTI Response)', title: 'RTI Application Response: Pipeline Projects Q3 2024', date: 'Sep 2024', section: 'Response Point 6', docId: 'DJB/RTI/2024/0842', url: '#' },
  { id: 'src-4', type: 'Tender', org: 'Municipal Corporation of Delhi', title: 'Tender Document: Streetlight Replacement Lot 14–18', date: 'Dec 2023', section: 'Schedule of Works', docId: 'MCD/TDR/SL/2023/1422', url: '#' },
  { id: 'src-5', type: 'Government', org: 'Delhi Development Authority', title: 'Project Completion Report: Chandni Chowk Revitalisation', date: 'Jun 2022', section: 'Full Report', docId: 'DDA/PCR/CCK/2022/003', url: '#' },
  { id: 'src-6', type: 'Parliament', org: 'Lok Sabha Secretariat', title: 'Unstarred Question No. 1842 — Urban Infrastructure Delhi', date: 'Feb 2024', section: 'Q. 1842 + Ministry Reply', docId: 'LS/USQ/2024/1842', url: '#' },
  { id: 'src-7', type: 'Gazette', org: 'Delhi Government Gazette', title: 'Administrative Sanction: Community Centres Scheme 2021', date: 'May 2021', section: 'Extraordinary Gazette No. 214', docId: 'GNCTD/GAZ/2021/214', url: '#' },
];

const NGO_CSR = [
  { org: 'Teach For India', project: 'Learning Enhancement Program — 12 Government Schools', location: 'East Delhi', sector: 'Education', amount: '₹3.2 Cr', type: 'NGO', date: '2023–24', status: 'Ongoing', source: 'src-5' },
  { org: 'Tata Trusts', project: 'Urban Water Kiosk Network — 40 Locations', location: 'North Delhi', sector: 'Water & Sanitation', amount: '₹1.8 Cr', type: 'CSR', date: '2022–23', status: 'Completed', source: 'src-1' },
  { org: 'Aga Khan Foundation', project: 'Heritage Conservation Grant — Old Delhi', location: 'Central Delhi', sector: 'Heritage & Culture', amount: '₹5.1 Cr', type: 'NGO', date: '2021–23', status: 'Completed', source: 'src-7' },
  { org: 'Infosys Foundation', project: 'Digital Literacy Centres — 8 Locations', location: 'South Delhi', sector: 'Education', amount: '₹2.4 Cr', type: 'CSR', date: '2023–24', status: 'Ongoing', source: 'src-2' },
  { org: 'Care India', project: 'Urban Health Outreach Program', location: 'North East Delhi', sector: 'Healthcare', amount: '₹1.1 Cr', type: 'NGO', date: '2024', status: 'Ongoing', source: 'src-4' },
  { org: 'Reliance Foundation', project: 'Community Sports Infrastructure', location: 'West Delhi', sector: 'Sports & Recreation', amount: '₹2.9 Cr', type: 'CSR', date: '2022–23', status: 'Completed', source: 'src-6' },
];

const MONEY_DATA = {
  allocated: 142, sanctioned: 128, released: 112, spent: 94, balance: 48,
  yearwise: [
    { year: '2019', alloc: 88, spent: 72 },
    { year: '2020', alloc: 95, spent: 61 },
    { year: '2021', alloc: 110, spent: 88 },
    { year: '2022', alloc: 125, spent: 104 },
    { year: '2023', alloc: 138, spent: 119 },
    { year: '2024', alloc: 142, spent: 94 },
  ],
  donut: [
    { label: 'Infrastructure', value: 48, color: '#1B6FEB' },
    { label: 'Education', value: 18, color: '#10B981' },
    { label: 'Health', value: 14, color: '#F59E0B' },
    { label: 'Water & Sanitation', value: 12, color: '#8B5CF6' },
    { label: 'Others', value: 8, color: '#64748B' },
  ]
};

const FTM_NODES = [
  { id: 'central', label: 'Central Government', amount: '₹6,40,000 Cr', dept: 'Union Budget', date: 'Feb 2024', source: 'Union Budget 2024–25', color: 'central' },
  { id: 'state', label: 'State Government (Delhi)', amount: '₹75,800 Cr', dept: 'Delhi State Budget', date: 'Mar 2024', source: 'Delhi Budget 2024–25', color: '' },
  { id: 'dept', label: 'PWD / MCD / DDA', amount: '₹8,200 Cr', dept: 'Department Allocations', date: 'Apr 2024', source: 'Departmental AOs', color: '' },
  { id: 'scheme', label: 'Urban Dev. Scheme', amount: '₹1,420 Cr', dept: 'Scheme Code UD-2024-07', date: 'May 2024', source: 'Scheme Guideline MoHUA', color: '' },
  { id: 'local', label: 'Local Authority (NDMC)', amount: '₹284 Cr', dept: 'NDMC Annual Budget', date: 'May 2024', source: 'NDMC Budget Report', color: '' },
  { id: 'project', label: 'Project (Constituency)', amount: '₹142 Cr', dept: 'Project SA Orders', date: 'Jun 2024', source: 'Administrative Sanction Orders', color: '' },
  { id: 'impl', label: 'Implementation / Works', amount: '₹94 Cr (Spent)', dept: 'Contractor Bills', date: 'Ongoing', source: 'Expenditure Reports', color: '' },
];

const LATEST_RECORDS = [
  { category: 'Project Update', title: 'Chandni Chowk Heritage Walk marked Completed', location: 'Chandni Chowk', date: '12 Jun 2025', source: 'src-5', icon: '✅' },
  { category: 'Fund Record', title: '₹2.4 Cr expenditure recorded — School Buildings Scheme', location: 'Rohini, NW Delhi', date: '08 Jun 2025', source: 'src-1', icon: '💰' },
  { category: 'Sanction', title: 'New project sanctioned: Kashmere Gate Bus Terminus', location: 'Kashmere Gate', date: '01 Jun 2025', source: 'src-6', icon: '📋' },
  { category: 'Audit Document', title: 'CAG Performance Audit Report 2022–23 added', location: 'Delhi-wide', date: '28 May 2025', source: 'src-2', icon: '📄' },
  { category: 'Problem Resolved', title: 'Karol Bagh burst pipeline issue resolved', location: 'Karol Bagh', date: '22 May 2025', source: 'src-3', icon: '🔧' },
  { category: 'Project Update', title: 'Lodi Road Flyover — 50% construction milestone', location: 'Lodi Road', date: '15 May 2025', source: 'src-2', icon: '🏗' },
  { category: 'RTI Response', title: 'RTI response received: DJB Pipeline Projects', location: 'North Delhi', date: '10 May 2025', source: 'src-3', icon: '📬' },
  { category: 'Fund Record', title: 'NDMC Q4 expenditure report 2024–25 published', location: 'New Delhi', date: '05 May 2025', source: 'src-7', icon: '📊' },
];

const CHANGES_TIMELINE = [
  { title: 'Project status updated: Sadar Bazar PHC Upgrade → Completed', sub: 'Expenditure recorded: ₹3.8 Cr. Source: Health Dept.', date: '14 Jun 2025', color: '#10B981' },
  { title: 'New funding record: NDMC Urban Infra allocation increased by ₹12 Cr', sub: 'Administrative order issued. Source: NDMC', date: '10 Jun 2025', color: '#1B6FEB' },
  { title: 'New government document added: PWD Annual Report 2024–25', sub: '186-page report. Source: PWD Delhi', date: '05 Jun 2025', color: '#8B5CF6' },
  { title: 'Problem status updated: Mathura Road potholes → Work Initiated', sub: 'PWD assigned contractor. Source: RTI', date: '28 May 2025', color: '#F59E0B' },
  { title: 'New project sanctioned: Kashmere Gate Bus Terminus ₹28 Cr', sub: 'Administrative sanction order issued.', date: '01 Jun 2025', color: '#1B6FEB' },
];

const YEAR_DATA = {
  2019: { funds: '₹88 Cr', spent: '₹72 Cr', projects: 42, completed: 28, problems: 38 },
  2020: { funds: '₹95 Cr', spent: '₹61 Cr', projects: 51, completed: 22, problems: 45 },
  2021: { funds: '₹110 Cr', spent: '₹88 Cr', projects: 64, completed: 47, problems: 41 },
  2022: { funds: '₹125 Cr', spent: '₹104 Cr', projects: 72, completed: 58, problems: 36 },
  2023: { funds: '₹138 Cr', spent: '₹119 Cr', projects: 79, completed: 64, problems: 29 },
  2024: { funds: '₹142 Cr', spent: '₹94 Cr', projects: 86, completed: 61, problems: 24 },
  2025: { funds: '₹148 Cr', spent: '₹38 Cr', projects: 90, completed: 12, problems: 18 },
  2026: { funds: '₹155 Cr (Proposed)', spent: '₹0', projects: 94, completed: 0, problems: 14 },
};

const AI_EXPLANATIONS = {
  'Administrative sanction': 'This means the government department has formally approved the project and its estimated cost. It does not mean the entire amount has been released or spent — it is the first formal step in the project approval process.',
  'AA': 'Short for "Administrative Approval". The formal order from the competent authority permitting commencement of the project and sanctioning its estimated cost for planning purposes.',
  'Sanction order': 'A formal government document that officially approves a project, scheme or expenditure. Without a sanction order, funds generally cannot be released to the implementing agency.',
  'CAG': 'The Comptroller and Auditor General of India — a constitutional body that independently audits government accounts and expenditure. CAG reports are key public accountability documents.',
  'RTI': 'Right to Information. Under the RTI Act, 2005, any citizen can request documents and records from government bodies. RTI responses are often used as primary evidence on CivicLens.',
  'MPLADS': 'Member of Parliament Local Area Development Scheme. Each MP receives a fixed annual fund (currently ₹5 Cr/year) to recommend development works in their constituency.',
  'Tender': 'A formal process by which the government invites competitive bids from contractors or suppliers to undertake a project or procure goods. Tender documents contain project specifications and cost estimates.',
  'DPR': 'Detailed Project Report — a comprehensive technical document prepared before a project begins. It contains design, cost estimates, timelines and implementation plans.',
  'Revised estimate': 'A recalculation of a project\'s cost during implementation when the original estimate proves insufficient due to design changes, price escalation or scope expansion.',
  'UC': 'Utilization Certificate — a document submitted by the implementing agency to confirm that funds released for a project have been used for their stated purpose.',
};

const BVN_DATA = [
  { location: 'Chandni Chowk, Central Delhi', project: 'Heritage Walk Pedestrianization', cost: '₹15 Cr', completion: 'May 2022', source: 'src-5' },
  { location: 'Connaught Place, New Delhi', project: 'Road Resurfacing & Utility Work', cost: '₹4.2 Cr', completion: 'Feb 2024', source: 'src-1' },
  { location: 'Shastri Park, North East Delhi', project: 'Community Centre Construction', cost: '₹9.6 Cr', completion: 'Jan 2023', source: 'src-4' },
];

const COMPARE_METRICS = [
  { key: 'population', label: 'Population', format: v => v },
  { key: 'voters', label: 'Registered Voters', format: v => v },
  { key: 'funds', label: 'Total Funds Allocated', format: v => v },
  { key: 'fundsNum', label: 'Funds (₹ Cr)', format: v => v, numeric: true },
  { key: 'projects', label: 'Total Projects', format: v => v, numeric: true },
  { key: 'completed', label: 'Completed Projects', format: v => v, numeric: true },
  { key: 'delayed', label: 'Delayed Projects', format: v => v, numeric: true, lowerBetter: true },
  { key: 'problems', label: 'Documented Problems', format: v => v, numeric: true, lowerBetter: true },
  { key: 'proposed', label: 'Proposed Projects', format: v => v, numeric: true },
  { key: 'representative', label: 'Representative', format: v => v },
  { key: 'party', label: 'Party (Demo)', format: v => v },
  { key: 'term', label: 'Current Term', format: v => v },
];

/* ============================================================
   STATE
   ============================================================ */

let currentLang = 'en';
let currentConstituency = 'new-delhi';
let currentStatusTab = '';
let currentNGOFilter = 'all';
let currentSourceFilter = 'all';
let currentProblemFilter = 'all';
let currentCompareTab = 'constituencies';
let activeYear = 2024;

/* ============================================================
   I18N
   ============================================================ */

const I18N = {
  en: {
    hero_badge: 'Public Accountability Platform',
    hero_heading: 'Know where public money goes.<br>See what gets built.',
    hero_sub: 'A source-backed civic information platform for understanding constituencies, public funds, development projects and local needs.',
    cta_constituencies: 'Explore Constituencies',
    cta_money: 'Explore Public Money',
    map_heading: 'Explore India by Constituency',
    map_sub: 'Select a state or constituency to explore verified public information.',
    const_heading: 'Constituency Dashboard',
    const_sub: 'Explore verified public information for constituencies across India.',
  },
  hi: {
    hero_badge: 'सार्वजनिक जवाबदेही मंच',
    hero_heading: 'जानें कहाँ जाता है सार्वजनिक धन।<br>देखें क्या बनता है।',
    hero_sub: 'निर्वाचन क्षेत्रों, सार्वजनिक धन, विकास परियोजनाओं और स्थानीय आवश्यकताओं को समझने के लिए एक स्रोत-समर्थित नागरिक सूचना मंच।',
    cta_constituencies: 'निर्वाचन क्षेत्र देखें',
    cta_money: 'सार्वजनिक धन देखें',
    map_heading: 'निर्वाचन क्षेत्र द्वारा भारत का अन्वेषण करें',
    map_sub: 'सत्यापित सार्वजनिक जानकारी देखने के लिए कोई राज्य या निर्वाचन क्षेत्र चुनें।',
    const_heading: 'निर्वाचन क्षेत्र डैशबोर्ड',
    const_sub: 'भारत के निर्वाचन क्षेत्रों के लिए सत्यापित सार्वजनिक जानकारी देखें।',
  }
};

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.innerHTML = dict[key];
  });
}

/* ============================================================
   NAVIGATION
   ============================================================ */

function showSection(section) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('section-' + section);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === section);
  });
  closeNav();
  // Init section on first visit
  initSection(section);
}

function initSection(section) {
  if (section === 'constituencies') renderConstituencyDashboard(currentConstituency);
  if (section === 'representatives') renderRepresentatives();
  if (section === 'money') { renderMoneyKPIs(); renderBarChart(); renderDonutChart(); renderFTM(); renderNGO(); }
  if (section === 'projects') { renderProjects(); renderProjectMap(); renderBVN(); }
  if (section === 'problems') renderProblems();
  if (section === 'compare') { renderComparison(); renderRepComparison(); }
  if (section === 'sources') renderSources();
}

/* Mobile Nav */
document.getElementById('hamburger').addEventListener('click', function () {
  const nav = document.getElementById('navLinks');
  const open = nav.classList.toggle('open');
  this.classList.toggle('open', open);
  this.setAttribute('aria-expanded', open);
});

function closeNav() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
}

/* ============================================================
   DARK MODE
   ============================================================ */

function initTheme() {
  const saved = localStorage.getItem('civiclens-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('civiclens-theme', next);
});

/* ============================================================
   SEARCH
   ============================================================ */

const ALL_SEARCH = [
  ...Object.values(CONSTITUENCIES).map(c => ({ name: c.name, meta: c.type + ' · ' + c.state, type: 'Constituency', section: 'constituencies', icon: '🗺' })),
  ...REPRESENTATIVES.map(r => ({ name: r.name, meta: r.position + ' · ' + r.constituency, type: r.position, section: 'representatives', icon: '👤' })),
  ...PROJECTS.map(p => ({ name: p.name, meta: p.dept + ' · ' + p.status, type: 'Project', section: 'projects', icon: '🏗' })),
  ...PROBLEMS.map(p => ({ name: p.title, meta: p.category + ' · ' + p.location, type: 'Problem', section: 'problems', icon: '⚠' })),
  ...SOURCES.map(s => ({ name: s.title, meta: s.type + ' · ' + s.org, type: 'Source', section: 'sources', icon: '📄' })),
];

document.getElementById('searchTrigger').addEventListener('click', openSearch);
document.getElementById('globalSearch').addEventListener('input', function () {
  runSearch(this.value);
});

function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('globalSearch').focus(), 100);
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('globalSearch').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

document.getElementById('searchOverlay').addEventListener('click', function (e) {
  if (e.target === this) closeSearch();
});

function runSearch(query) {
  const q = query.trim().toLowerCase();
  const resultsEl = document.getElementById('searchResults');
  if (!q) { resultsEl.innerHTML = ''; return; }
  const results = ALL_SEARCH.filter(item =>
    item.name.toLowerCase().includes(q) || item.meta.toLowerCase().includes(q)
  ).slice(0, 8);
  if (!results.length) {
    resultsEl.innerHTML = '<div class="no-results" style="padding:20px 20px;font-size:14px;">No results found for "' + escapeHTML(query) + '"</div>';
    return;
  }
  resultsEl.innerHTML = results.map(r => `
    <div class="search-result-item" onclick="searchNavigate('${r.section}')">
      <div class="sri-icon">${r.icon}</div>
      <div class="sri-info">
        <div class="sri-name">${highlight(r.name, q)}</div>
        <div class="sri-meta">${r.meta}</div>
      </div>
      <span class="sri-type">${r.type}</span>
    </div>
  `).join('');
}

function highlight(text, query) {
  const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
  return text.replace(re, '<mark style="background:var(--blue-light);color:var(--blue);border-radius:2px;padding:0 2px;">$1</mark>');
}

function searchNavigate(section) {
  closeSearch();
  showSection(section);
}

/* Hero search */
document.getElementById('heroSearch').addEventListener('input', function () {
  const q = this.value.trim().toLowerCase();
  const dd = document.getElementById('heroDropdown');
  if (!q) { dd.classList.remove('open'); return; }
  const results = ALL_SEARCH.filter(r => r.name.toLowerCase().includes(q) || r.meta.toLowerCase().includes(q)).slice(0, 5);
  if (!results.length) { dd.classList.remove('open'); return; }
  dd.innerHTML = results.map(r => `<div class="hd-item" onclick="searchNavigate('${r.section}')">${r.icon} ${escapeHTML(r.name)} <span style="font-size:11px;color:var(--text-muted);margin-left:6px;">${r.type}</span></div>`).join('');
  dd.classList.add('open');
});

document.addEventListener('click', function (e) {
  if (!e.target.closest('.hero-search-box')) {
    document.getElementById('heroDropdown').classList.remove('open');
  }
});

function heroSearchSubmit() {
  const q = document.getElementById('heroSearch').value.trim();
  if (q) runSearch(q), openSearch(), document.getElementById('globalSearch').value = q;
}

/* ============================================================
   HOME PAGE — LATEST RECORDS
   ============================================================ */

function renderLatestRecords() {
  const el = document.getElementById('latestRecords');
  if (!el) return;
  el.innerHTML = LATEST_RECORDS.map(r => `
    <div class="record-card">
      <div class="rc-category">${r.icon} ${r.category}</div>
      <div class="rc-title">${r.title}</div>
      <div class="rc-meta">
        <span>📍 ${r.location}</span>
        <span>🗓 ${r.date}</span>
      </div>
      <div class="rc-source mt-8">
        <button class="view-source-btn" onclick="openSourceModal('${r.source}')">View Source</button>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   CHANGES TIMELINE
   ============================================================ */

function renderChangesTimeline() {
  const el = document.getElementById('changesTimeline');
  if (!el) return;
  el.innerHTML = CHANGES_TIMELINE.map((c, i) => `
    <div class="ct-item">
      <div class="ct-dot-col">
        <div class="ct-dot" style="background:${c.color}"></div>
        ${i < CHANGES_TIMELINE.length - 1 ? '<div class="ct-line"></div>' : ''}
      </div>
      <div class="ct-body">
        <div class="ct-title">${c.title}</div>
        <div class="ct-sub">${c.sub}</div>
        <div class="ct-date">${c.date}</div>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   YEAR TIMELINE
   ============================================================ */

function renderYearNav() {
  const nav = document.getElementById('yearNav');
  if (!nav) return;
  const years = Object.keys(YEAR_DATA).map(Number).sort();
  nav.innerHTML = years.map(y => `
    <button class="year-btn${y === activeYear ? ' active' : ''}" onclick="setYear(${y})">${y}</button>
  `).join('');
  renderYearDashboard();
}

function setYear(year) {
  activeYear = year;
  document.querySelectorAll('.year-btn').forEach(b => b.classList.toggle('active', parseInt(b.textContent) === year));
  renderYearDashboard();
}

function renderYearDashboard() {
  const el = document.getElementById('yearDashboard');
  if (!el) return;
  const d = YEAR_DATA[activeYear] || {};
  const items = [
    { label: 'Funds Allocated', value: d.funds, icon: '💰' },
    { label: 'Recorded Expenditure', value: d.spent, icon: '📊' },
    { label: 'Total Projects', value: d.projects, icon: '🏗' },
    { label: 'Completed', value: d.completed, icon: '✅' },
    { label: 'Documented Problems', value: d.problems, icon: '⚠' },
  ];
  el.innerHTML = items.map(i => `
    <div class="kpi-card">
      <div class="kpi-label">${i.icon} ${i.label}</div>
      <div class="kpi-value">${i.value}</div>
      <div class="kpi-sub">New Delhi · ${activeYear}</div>
    </div>
  `).join('');
}

/* ============================================================
   CONSTITUENCY DASHBOARD
   ============================================================ */

function loadConstituency(key) {
  currentConstituency = key;
  renderConstituencyDashboard(key);
}

function renderConstituencyDashboard(key) {
  const el = document.getElementById('constDashboard');
  if (!el) return;
  const c = CONSTITUENCIES[key];
  if (!c) return;

  const pct = (n, t) => t > 0 ? Math.round((n / t) * 100) : 0;
  const total = c.completed + c.ongoing + c.delayed + c.abandoned;

  el.innerHTML = `
    <div class="cd-header">
      <div>
        <div class="cd-name">${c.name}</div>
        <div class="cd-meta">${c.type} · ${c.district} · ${c.state}</div>
      </div>
      <div class="cd-updated">Last updated: ${c.updated} &nbsp;<span class="badge badge-proposed">Demo Data</span></div>
    </div>

    <div class="cd-kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">Population</div>
        <div class="kpi-value">${c.population}</div>
        <div class="kpi-sub">${c.area} · ${c.type}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Registered Voters</div>
        <div class="kpi-value">${c.voters}</div>
        <div class="kpi-sub"><button class="explain-btn" onclick="openExplainModal('RTI')">What is RTI? ✦</button></div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Public Funds Allocated</div>
        <div class="kpi-value">${c.funds}</div>
        <div class="kpi-sub"><button class="view-source-btn" onclick="openSourceModal('src-1')">View Source</button></div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Total Projects</div>
        <div class="kpi-value">${c.projects}</div>
        <div class="kpi-sub">All documented projects</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Completed</div>
        <div class="kpi-value text-green">${c.completed}</div>
        <div class="kpi-sub">${pct(c.completed, total)}% of tracked projects</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Ongoing</div>
        <div class="kpi-value text-blue">${c.ongoing}</div>
        <div class="kpi-sub">Currently in progress</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Delayed</div>
        <div class="kpi-value text-amber">${c.delayed}</div>
        <div class="kpi-sub">Past expected completion</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Documented Problems</div>
        <div class="kpi-value text-red">${c.problems}</div>
        <div class="kpi-sub">Civic issues on record</div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;flex-wrap:wrap;">
      <div class="cd-section">
        <h3>Current Representative</h3>
        <div class="cd-rep-card">
          <div class="cd-rep-avatar">👤</div>
          <div class="cd-rep-info">
            <h4>${c.representative}</h4>
            <p>${c.position} · ${c.name}</p>
            <p>Term: ${c.term}</p>
            <span class="party-tag">${c.party} (Demo)</span>
          </div>
        </div>
      </div>
      <div class="cd-section">
        <h3>Project Breakdown</h3>
        <div class="cd-project-bars">
          ${[
            { label: 'Completed', val: c.completed, max: total, color: 'green' },
            { label: 'Ongoing', val: c.ongoing, max: total, color: 'blue' },
            { label: 'Delayed', val: c.delayed, max: total, color: 'amber' },
            { label: 'Abandoned', val: c.abandoned, max: total, color: 'red' },
          ].map(b => `
            <div class="cd-pbar-item">
              <div class="cd-pbar-label"><span>${b.label}</span><span>${b.val}</span></div>
              <div class="progress-bar"><div class="progress-fill ${b.color}" style="width:${pct(b.val, total)}%"></div></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="cd-section mt-16">
      <h3>Fund Summary</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:14px;">
        ${[
          { label: 'Allocated', val: c.funds, pct: 100 },
          { label: 'Sanctioned', val: '₹' + Math.round(c.fundsNum * 0.9) + ' Cr', pct: 90 },
          { label: 'Released', val: '₹' + Math.round(c.fundsNum * 0.79) + ' Cr', pct: 79 },
          { label: 'Spent', val: '₹' + Math.round(c.fundsNum * 0.66) + ' Cr', pct: 66 },
        ].map(f => `
          <div class="kpi-card">
            <div class="kpi-label">${f.label}</div>
            <div class="kpi-value" style="font-size:20px;">${f.val}</div>
            <div class="progress-bar mt-8"><div class="progress-fill blue" style="width:${f.pct}%"></div></div>
            <div class="kpi-sub" style="margin-top:4px;">${f.pct}%</div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:12px;"><button class="view-source-btn" onclick="openSourceModal('src-2')">View Source</button> &nbsp; <button class="explain-btn" onclick="openExplainModal('Administrative sanction')">What is Administrative Sanction? ✦</button></div>
    </div>
  `;
}

/* ============================================================
   ASK CONSTITUENCY
   ============================================================ */

const ASK_ANSWERS = {
  'how much money was spent': () => {
    const c = CONSTITUENCIES[currentConstituency];
    return `<strong>Recorded Expenditure:</strong> ₹${Math.round(c.fundsNum * 0.66)} Cr out of ₹${c.fundsNum} Cr allocated for <strong>${c.name}</strong>. This represents approximately 66% utilization based on available expenditure records. <div style="margin-top:8px;"><button class="view-source-btn" onclick="openSourceModal('src-2')">View Source</button></div>`;
  },
  'which projects are delayed': () => {
    const delayed = PROJECTS.filter(p => p.status === 'Delayed');
    return `<strong>${delayed.length} delayed projects</strong> documented in the database:<br><br>${delayed.map(p => `• <strong>${p.name}</strong> (${p.dept}) — Expected: ${p.expected}`).join('<br>')}`;
  },
  'what projects were completed': () => {
    const done = PROJECTS.filter(p => p.status === 'Completed');
    return `<strong>${done.length} completed projects</strong> are on record:<br><br>${done.slice(0, 5).map(p => `• <strong>${p.name}</strong> — ₹${p.costNum} Cr (${p.actual})`).join('<br>')}`;
  },
  'where did the funding come from': () => `Public funds flow through: <strong>Central Government → State Budget → Department → Scheme → Local Authority → Project</strong>. For ${CONSTITUENCIES[currentConstituency].name}, allocations are primarily through the Urban Development Ministry, DDA, PWD and MCD budgets. <div style="margin-top:8px;"><button class="view-source-btn" onclick="openSourceModal('src-6')">View Parliament Source</button></div>`,
  'what are the major civic problems': () => {
    return `<strong>${PROBLEMS.length} civic problems</strong> are currently documented, across categories:<br><br>${[...new Set(PROBLEMS.map(p => p.category))].map(cat => `• ${cat}: ${PROBLEMS.filter(p => p.category === cat).length} issues`).join('<br>')}`;
  },
  'what are the civic problems': () => `<strong>${PROBLEMS.length} civic problems</strong> are documented: ${PROBLEMS.filter(p => p.status !== 'Resolved').length} currently open. Categories: Waste & Environment, Water & Utilities, Transport, Essential Services.`,
};

function askPreset(q) {
  document.getElementById('askInput').value = q;
  askConstituency();
}

function askConstituency() {
  const input = document.getElementById('askInput').value.trim().toLowerCase();
  const answerEl = document.getElementById('askAnswer');
  if (!input) { answerEl.innerHTML = '<em style="color:var(--text-muted);">Please enter a question above.</em>'; return; }

  // Match against known answers
  let answer = null;
  for (const key of Object.keys(ASK_ANSWERS)) {
    if (input.includes(key) || key.includes(input.substring(0, 15))) {
      answer = ASK_ANSWERS[key]();
      break;
    }
  }

  if (!answer) {
    answer = `This prototype returns answers from a pre-defined demo dataset. Try asking: <em>how much money was spent, which projects are delayed, what projects were completed, where did funding come from,</em> or <em>what are the civic problems.</em>`;
  }

  answerEl.innerHTML = `<div style="border-left:3px solid var(--blue);padding-left:14px;">${answer}</div>
    <div style="margin-top:12px;font-size:12px;color:var(--text-muted);">⚠ This is a demo prototype. All data is illustrative. <button class="explain-btn" onclick="openExplainModal('RTI')">Learn about RTI ✦</button></div>`;
}

/* ============================================================
   REPRESENTATIVES
   ============================================================ */

function renderRepresentatives() {
  const grid = document.getElementById('repGrid');
  if (!grid) return;
  filterRepresentatives();
}

function filterRepresentatives() {
  const grid = document.getElementById('repGrid');
  const search = (document.getElementById('repSearch')?.value || '').toLowerCase();
  const type = document.getElementById('repTypeFilter')?.value || '';

  const filtered = REPRESENTATIVES.filter(r => {
    const matchSearch = !search || r.name.toLowerCase().includes(search) || r.constituency.toLowerCase().includes(search) || r.party.toLowerCase().includes(search);
    const matchType = !type || r.position === type;
    return matchSearch && matchType;
  });

  grid.innerHTML = filtered.length ? filtered.map((r, i) => `
    <div class="rep-card" onclick="openRepProfile(${i})" tabindex="0" role="button" aria-label="View ${r.name}">
      <div class="rep-card-header">
        <div class="rep-avatar">${r.avatar}</div>
        <div>
          <div class="rep-name">${r.name}</div>
          <div class="rep-role">${r.position} · ${r.constituency}</div>
          <span class="rep-party">${r.party} (Demo)</span>
        </div>
      </div>
      <div class="rep-card-stats">
        <div class="rcs-item"><div class="rcs-val">${r.projects}</div><div class="rcs-key">Projects</div></div>
        <div class="rcs-item"><div class="rcs-val">${r.funds}</div><div class="rcs-key">Funds</div></div>
        <div class="rcs-item"><div class="rcs-val">${r.legislative}</div><div class="rcs-key">Questions</div></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);padding-top:12px;margin-top:4px;">
        <span class="badge badge-ongoing">${r.position}</span>
        <button class="btn-outline" onclick="event.stopPropagation();openRepProfile(${i})">View Profile</button>
      </div>
    </div>
  `).join('') : '<div class="no-results">No representatives found matching your search.</div>';
}

function openRepProfile(index) {
  const r = REPRESENTATIVES[index];
  const panel = document.getElementById('repProfilePanel');
  const content = document.getElementById('repProfileContent');

  content.innerHTML = `
    <div class="rp-header">
      <div class="rp-avatar-lg">${r.avatar}</div>
      <div class="rp-info">
        <h1>${r.name}</h1>
        <div class="rp-meta">${r.position} · ${r.constituency} · ${r.state}</div>
        <div class="rp-meta" style="margin-top:4px;">Term: ${r.term} &nbsp; <span class="rep-party">${r.party} (Demo)</span></div>
        <div class="rp-meta" style="margin-top:6px;font-size:13px;color:var(--text-muted);">📧 ${r.email} &nbsp; 📞 ${r.phone}</div>
      </div>
    </div>

    <div class="rp-stat-row" style="margin-bottom:32px;">
      <div class="rp-stat"><div class="rp-stat-val">${r.projects}</div><div class="rp-stat-key">Projects</div></div>
      <div class="rp-stat"><div class="rp-stat-val">${r.funds}</div><div class="rp-stat-key">Funds</div></div>
      <div class="rp-stat"><div class="rp-stat-val">${r.legislative}</div><div class="rp-stat-key">Parl. Questions</div></div>
      <div class="rp-stat"><div class="rp-stat-val">${r.documents}</div><div class="rp-stat-key">Documents</div></div>
    </div>

    <div class="rp-sections">
      <div class="rp-section">
        <h3>Term History</h3>
        <div class="timeline-track">
          ${r.termHistory.map((t, i) => `
            <div class="tt-item">
              <div class="tt-dot-col">
                <div class="tt-dot done"></div>
                ${i < r.termHistory.length - 1 ? '<div class="tt-line"></div>' : ''}
              </div>
              <div class="tt-body">
                <div class="tt-stage">${t.position} — ${t.constituency}</div>
                <div class="tt-date">${t.term}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rp-section">
        <h3>Legislative Record <span class="demo-note">(Demo Data)</span></h3>
        <div class="rp-stat-row">
          ${r.legislative_record.map(lr => `
            <div class="rp-stat"><div class="rp-stat-val">${lr.value}</div><div class="rp-stat-key">${lr.label}</div></div>
          `).join('')}
        </div>
      </div>

      <div class="rp-section">
        <h3>Associated Constituency Projects</h3>
        <div class="projects-grid" style="margin-top:0;">
          ${PROJECTS.slice(0, 3).map(p => `
            <div class="project-card" onclick="openProjectModal(${p.id})">
              <div class="pc-top"><div class="pc-title">${p.name}</div><span class="badge badge-${p.status.toLowerCase()}">${p.status}</span></div>
              <div class="pc-dept">${p.dept}</div>
              <div class="pc-cost-row"><div><div class="pc-cost">${p.cost}</div><div class="pc-cost-label">Estimated cost</div></div></div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rp-section">
        <h3>Official Documents</h3>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          ${SOURCES.slice(0, 3).map(s => `<button class="view-source-btn" onclick="openSourceModal('${s.id}')">${s.type}: ${s.title.substring(0,40)}…</button>`).join('')}
        </div>
      </div>
    </div>
  `;

  document.getElementById('repGrid').parentElement.style.display = 'none';
  panel.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeRepProfile() {
  document.getElementById('repProfilePanel').style.display = 'none';
  document.getElementById('repGrid').parentElement.style.display = 'block';
}

/* ============================================================
   MONEY — KPIs
   ============================================================ */

function renderMoneyKPIs() {
  const el = document.getElementById('moneyKpiRow');
  if (!el) return;
  const d = MONEY_DATA;
  const items = [
    { label: 'Total Allocated', val: `₹${d.allocated} Cr`, pct: 100, color: 'blue' },
    { label: 'Sanctioned', val: `₹${d.sanctioned} Cr`, pct: Math.round((d.sanctioned/d.allocated)*100), color: 'blue' },
    { label: 'Released', val: `₹${d.released} Cr`, pct: Math.round((d.released/d.allocated)*100), color: 'blue' },
    { label: 'Recorded Expenditure', val: `₹${d.spent} Cr`, pct: Math.round((d.spent/d.allocated)*100), color: 'green' },
    { label: 'Balance', val: `₹${d.balance} Cr`, pct: Math.round((d.balance/d.allocated)*100), color: 'amber' },
  ];
  el.innerHTML = items.map(i => `
    <div class="money-kpi">
      <div class="mk-label">${i.label}</div>
      <div class="mk-value">${i.val}</div>
      <div class="mk-bar"><div class="progress-bar" style="margin-top:8px;"><div class="progress-fill ${i.color}" style="width:${i.pct}%"></div></div></div>
      <div style="font-size:11px;color:var(--text-muted);margin-top:4px;">${i.pct}% of allocated</div>
      <div class="mk-source" style="margin-top:8px;"><button class="view-source-btn" onclick="openSourceModal('src-1')">View Source</button></div>
    </div>
  `).join('');
}

/* Bar Chart */
function renderBarChart(yearFilter) {
  const el = document.getElementById('moneyBarChart');
  if (!el) return;
  let data = MONEY_DATA.yearwise;
  if (yearFilter && yearFilter !== 'all') data = data.filter(d => d.year === yearFilter);
  const maxVal = Math.max(...data.map(d => d.alloc));
  el.innerHTML = data.map(d => `
    <div class="bar-item">
      <div class="bar-fill blue" style="height:${Math.round((d.alloc/maxVal)*120)}px" data-value="₹${d.alloc}Cr" title="Allocated: ₹${d.alloc}Cr"></div>
      <div class="bar-fill" style="height:${Math.round((d.spent/maxVal)*120)}px;background:var(--green);position:absolute;bottom:24px;opacity:0.7;" data-value="₹${d.spent}Cr" title="Spent: ₹${d.spent}Cr"></div>
      <span class="bar-label">${d.year}</span>
    </div>
  `).join('');

  // Fix overlapping bars — rebuild properly
  el.innerHTML = data.map(d => `
    <div class="bar-item" style="position:relative;justify-content:flex-end;">
      <div style="position:absolute;bottom:24px;left:0;right:0;display:flex;gap:3px;align-items:flex-end;height:140px;">
        <div style="flex:1;background:var(--blue);border-radius:4px 4px 0 0;height:${Math.round((d.alloc/maxVal)*130)}px;" title="Allocated ₹${d.alloc}Cr"></div>
        <div style="flex:1;background:var(--green);border-radius:4px 4px 0 0;height:${Math.round((d.spent/maxVal)*130)}px;" title="Spent ₹${d.spent}Cr"></div>
      </div>
      <span class="bar-label" style="margin-top:4px;">${d.year}</span>
    </div>
  `).join('');
}

function setChartYear(year, btn) {
  document.querySelectorAll('.chart-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderBarChart(year);
}

/* Donut Chart */
function renderDonutChart() {
  const svg = document.getElementById('donutChart');
  const legend = document.getElementById('donutLegend');
  if (!svg || !legend) return;
  const data = MONEY_DATA.donut;
  const total = data.reduce((a, b) => a + b.value, 0);
  const r = 75, cx = 100, cy = 100, strokeW = 30;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  const circles = data.map(d => {
    const fraction = d.value / total;
    const dash = fraction * circumference;
    const circle = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${d.color}" stroke-width="${strokeW}" stroke-dasharray="${dash} ${circumference - dash}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})" />`;
    offset += dash;
    return circle;
  }).join('');

  svg.innerHTML = circles + `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" font-size="14" font-weight="800" fill="var(--text-primary)">₹${total}%</text>`;

  legend.innerHTML = data.map(d => `
    <div class="dl-item">
      <div class="dl-dot" style="background:${d.color}"></div>
      <span class="dl-label">${d.label}</span>
      <span class="dl-value">${d.value}%</span>
    </div>
  `).join('');
}

/* ============================================================
   FOLLOW THE MONEY
   ============================================================ */

function renderFTM() {
  const el = document.getElementById('ftmContainer');
  if (!el) return;
  el.innerHTML = FTM_NODES.map((node, i) => `
    ${i > 0 ? `
      <div class="ftm-arrow">
        <svg width="16" height="24" viewBox="0 0 16 24"><path d="M8 0v20M2 14l6 8 6-8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="ftm-amount-label">${node.amount}</span>
      </div>
    ` : ''}
    <div class="ftm-node${node.color ? ' ' + node.color : ''}" onclick="openFTMModal('${node.id}')" role="button" tabindex="0" aria-label="View details for ${node.label}">
      <div class="ftm-node-title">${node.label}</div>
      <div class="ftm-node-amount">${node.amount}</div>
    </div>
  `).join('');
}

function openFTMModal(nodeId) {
  const node = FTM_NODES.find(n => n.id === nodeId);
  if (!node) return;
  document.getElementById('ftmModalTitle').textContent = node.label;
  document.getElementById('ftmModalBody').innerHTML = `
    <div class="ftm-detail-row"><span class="ftm-detail-key">Amount:</span><span class="ftm-detail-val">${node.amount}</span></div>
    <div class="ftm-detail-row"><span class="ftm-detail-key">Department:</span><span class="ftm-detail-val">${node.dept}</span></div>
    <div class="ftm-detail-row"><span class="ftm-detail-key">Date:</span><span class="ftm-detail-val">${node.date}</span></div>
    <div class="ftm-detail-row"><span class="ftm-detail-key">Source:</span><span class="ftm-detail-val">${node.source}</span></div>
    <div style="margin-top:16px;"><button class="view-source-btn" onclick="openSourceModal('src-6')">View Related Document</button></div>
    <div style="margin-top:12px;font-size:12px;color:var(--text-muted);">⚠ Amounts shown are illustrative demo data.</div>
  `;
  openModal('ftmModal');
}

function closeFTMModal(e) {
  if (!e || e.target === e.currentTarget) closeModal('ftmModal');
}

/* ============================================================
   NGO / CSR
   ============================================================ */

function renderNGO() {
  filterNGO(currentNGOFilter, null);
  renderSectorBars();
}

function filterNGO(type, btn) {
  currentNGOFilter = type;
  if (btn) {
    document.querySelectorAll('.ngo-filters .filter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  const grid = document.getElementById('ngoGrid');
  if (!grid) return;
  const filtered = type === 'all' ? NGO_CSR : NGO_CSR.filter(n => n.type === type);
  grid.innerHTML = filtered.map(n => `
    <div class="ngo-card">
      <div class="ngo-org">${n.org} <span class="badge badge-${n.type === 'NGO' ? 'ongoing' : n.type === 'CSR' ? 'sanctioned' : 'completed'}" style="font-size:10px;">${n.type}</span></div>
      <div class="ngo-project">${n.project}</div>
      <div class="ngo-meta">
        <span>📍 ${n.location}</span>
        <span>📂 ${n.sector}</span>
        <span>🗓 ${n.date}</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
        <div class="ngo-amount">${n.amount}</div>
        <span class="badge badge-${n.status === 'Completed' ? 'completed' : 'ongoing'}">${n.status}</span>
      </div>
      <div style="margin-top:10px;"><button class="view-source-btn" onclick="openSourceModal('${n.source}')">View Source</button></div>
    </div>
  `).join('');
}

function renderSectorBars() {
  const el = document.getElementById('sectorBars');
  if (!el) return;
  const sectors = {};
  NGO_CSR.forEach(n => {
    const val = parseFloat(n.amount.replace(/[^0-9.]/g, ''));
    sectors[n.sector] = (sectors[n.sector] || 0) + val;
  });
  const max = Math.max(...Object.values(sectors));
  el.innerHTML = Object.entries(sectors).map(([sec, val]) => `
    <div class="sb-item">
      <span class="sb-label">${sec}</span>
      <div class="sb-bar"><div class="sb-fill" style="width:${Math.round((val/max)*100)}%"></div></div>
      <span class="sb-val">₹${val.toFixed(1)} Cr</span>
    </div>
  `).join('');
}

/* ============================================================
   PROJECTS
   ============================================================ */

function renderProjects() {
  filterProjects();
  renderProjectMap();
}

function setStatusTab(status, btn) {
  currentStatusTab = status;
  document.querySelectorAll('.status-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (document.getElementById('statusFilter')) document.getElementById('statusFilter').value = status;
  filterProjects();
}

function filterProjects() {
  const search = (document.getElementById('projectSearch')?.value || '').toLowerCase();
  const status = document.getElementById('statusFilter')?.value || currentStatusTab || '';
  const dept = document.getElementById('deptFilter')?.value || '';
  const year = document.getElementById('yearFilter')?.value || '';
  const sort = document.getElementById('sortProjects')?.value || 'name';

  let filtered = PROJECTS.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.location.toLowerCase().includes(search) || p.dept.toLowerCase().includes(search);
    const matchStatus = !status || p.status === status;
    const matchDept = !dept || p.dept === dept;
    const matchYear = !year || (p.start && p.start.includes(year)) || (p.expected && p.expected.includes(year));
    return matchSearch && matchStatus && matchDept && matchYear;
  });

  if (sort === 'cost-desc') filtered.sort((a, b) => b.costNum - a.costNum);
  else if (sort === 'cost-asc') filtered.sort((a, b) => a.costNum - b.costNum);
  else if (sort === 'date-desc') filtered.sort((a, b) => new Date(b.start || '2019') - new Date(a.start || '2019'));
  else filtered.sort((a, b) => a.name.localeCompare(b.name));

  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = filtered.length ? filtered.map(p => `
    <div class="project-card" onclick="openProjectModal(${p.id})" role="button" tabindex="0" aria-label="View ${p.name}">
      <div class="pc-top">
        <div class="pc-title">${p.name}</div>
        <span class="badge badge-${p.status.toLowerCase()}">${p.status}</span>
      </div>
      <div class="pc-dept">${p.dept}</div>
      <div class="pc-location">📍 ${p.location}</div>
      <div class="pc-cost-row">
        <div>
          <div class="pc-cost">${p.cost}</div>
          <div class="pc-cost-label">Estimated cost</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:14px;font-weight:600;color:var(--text-secondary);">${p.expenditure}</div>
          <div class="pc-cost-label">Expenditure</div>
        </div>
      </div>
      <div class="progress-bar"><div class="progress-fill ${p.status === 'Completed' ? 'green' : p.status === 'Delayed' ? 'amber' : p.status === 'Abandoned' ? 'red' : 'blue'}" style="width:${p.progress.filter(Boolean).length/p.progress.length*100}%"></div></div>
      <div class="pc-footer">
        <div class="pc-dates">Start: ${p.start || 'TBD'} · End: ${p.expected}</div>
        <div class="pc-actions">
          <button class="view-source-btn" onclick="event.stopPropagation();openSourceModal('${p.source}')">Source</button>
          <button class="btn-outline" onclick="event.stopPropagation();openProjectModal(${p.id})">Details</button>
        </div>
      </div>
    </div>
  `).join('') : '<div class="no-results">No projects match the current filters.</div>';
}

function openProjectModal(id) {
  const p = PROJECTS.find(proj => proj.id === id);
  if (!p) return;
  const stageLabels = ['Proposal', 'Admin. Approval', 'Fund Sanctioned', 'Tender', 'Construction', 'Completed/Operational'];
  document.getElementById('projectModalTitle').textContent = p.name;
  document.getElementById('projectModalBody').innerHTML = `
    <div class="pm-section">
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:16px;">
        <span class="badge badge-${p.status.toLowerCase()}">${p.status}</span>
        <span style="font-size:13px;color:var(--text-muted);">${p.dept} · ${p.location}</span>
      </div>
      <div class="pm-info-grid">
        <div class="pm-info-item"><div class="pm-info-key">Estimated Cost</div><div class="pm-info-val">${p.cost}</div></div>
        <div class="pm-info-item"><div class="pm-info-key">Sanctioned Amount</div><div class="pm-info-val">${p.sanctioned}</div></div>
        <div class="pm-info-item"><div class="pm-info-key">Expenditure Recorded</div><div class="pm-info-val">${p.expenditure}</div></div>
        <div class="pm-info-item"><div class="pm-info-key">Start Date</div><div class="pm-info-val">${p.start || 'Not started'}</div></div>
        <div class="pm-info-item"><div class="pm-info-key">Expected Completion</div><div class="pm-info-val">${p.expected}</div></div>
        <div class="pm-info-item"><div class="pm-info-key">Actual Completion</div><div class="pm-info-val">${p.actual || '—'}</div></div>
      </div>
    </div>
    <div class="pm-section">
      <h3>Project Timeline</h3>
      <div class="timeline-track">
        ${stageLabels.map((stage, i) => `
          <div class="tt-item">
            <div class="tt-dot-col">
              <div class="tt-dot ${p.progress[i] ? 'done' : 'pending'}"></div>
              ${i < stageLabels.length - 1 ? '<div class="tt-line"></div>' : ''}
            </div>
            <div class="tt-body">
              <div class="tt-stage" style="color:${p.progress[i] ? 'var(--green)' : 'var(--text-muted)'};">${p.progress[i] ? '✔ ' : '○ '}${stage}</div>
              <div class="tt-date">${p.progress[i] ? 'Documented' : 'Pending / Not yet reached'}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="pm-section">
      <h3>Evidence</h3>
      <button class="view-source-btn" onclick="openSourceModal('${p.source}')">View Source Document</button>
      &nbsp;
      <button class="explain-btn" onclick="openExplainModal('Administrative sanction')">Explain Admin. Sanction ✦</button>
    </div>
    <div style="font-size:12px;color:var(--text-muted);border-top:1px solid var(--border);padding-top:12px;margin-top:12px;">⚠ All data shown is sample demo data and does not represent verified government records.</div>
  `;
  openModal('projectModal');
}

function closeProjectModal(e) {
  if (!e || e.target === e.currentTarget) closeModal('projectModal');
}

/* Project Map */
function renderProjectMap() {
  const map = document.getElementById('projectMap');
  if (!map) return;
  map.innerHTML = '<div class="pm-bg"></div>';
  PROJECTS.forEach(p => {
    const marker = document.createElement('div');
    marker.className = `pm-marker ${p.status}`;
    marker.style.left = p.x + '%';
    marker.style.top = p.y + '%';
    marker.title = p.name;
    marker.setAttribute('role', 'button');
    marker.setAttribute('tabindex', '0');
    marker.setAttribute('aria-label', p.name);
    const label = document.createElement('div');
    label.className = 'pm-label';
    label.textContent = p.name.length > 30 ? p.name.substring(0, 30) + '…' : p.name;
    marker.appendChild(label);
    marker.addEventListener('click', () => openProjectModal(p.id));
    map.appendChild(marker);
  });
}

/* Before vs Now */
function renderBVN() {
  const gallery = document.getElementById('bvnGallery');
  if (!gallery) return;
  gallery.innerHTML = BVN_DATA.map((b, i) => `
    <div class="bvn-card">
      <div class="bvn-slider-wrap" id="bvn-${i}" data-pos="50">
        <div class="bvn-before">
          <div class="bvn-placeholder-text">BEFORE<br>2019–2022<br><small>(Illustrative placeholder)</small></div>
        </div>
        <div class="bvn-after" id="bvn-after-${i}" style="clip-path:inset(0 50% 0 0);">
          <div class="bvn-placeholder-text">NOW<br>2025<br><small>(Illustrative placeholder)</small></div>
        </div>
        <div class="bvn-divider" id="bvn-div-${i}" style="left:50%"></div>
        <div class="bvn-handle" id="bvn-hnd-${i}" style="left:50%">⇔</div>
        <div class="bvn-before-label">BEFORE</div>
        <div class="bvn-after-label">NOW</div>
      </div>
      <div class="bvn-info">
        <div class="bvn-title">${b.project}</div>
        <div class="bvn-meta">
          <span>📍 ${b.location}</span>
          <span>💰 ${b.cost}</span>
          <span>✅ ${b.completion}</span>
        </div>
        <div style="margin-top:8px;"><button class="view-source-btn" onclick="openSourceModal('${b.source}')">View Source</button></div>
      </div>
    </div>
  `).join('');

  // Init drag
  BVN_DATA.forEach((_, i) => initBVNSlider(i));
}

function initBVNSlider(i) {
  const wrap = document.getElementById('bvn-' + i);
  if (!wrap) return;
  const after = document.getElementById('bvn-after-' + i);
  const divider = document.getElementById('bvn-div-' + i);
  const handle = document.getElementById('bvn-hnd-' + i);
  let dragging = false;

  function setPos(pct) {
    pct = Math.max(5, Math.min(95, pct));
    after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    divider.style.left = pct + '%';
    handle.style.left = pct + '%';
  }

  wrap.addEventListener('mousedown', e => { dragging = true; e.preventDefault(); });
  wrap.addEventListener('touchstart', e => { dragging = true; }, { passive: true });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    const rect = wrap.getBoundingClientRect();
    setPos(((e.clientX - rect.left) / rect.width) * 100);
  });
  document.addEventListener('touchmove', e => {
    if (!dragging) return;
    const rect = wrap.getBoundingClientRect();
    setPos(((e.touches[0].clientX - rect.left) / rect.width) * 100);
  }, { passive: true });
  document.addEventListener('mouseup', () => { dragging = false; });
  document.addEventListener('touchend', () => { dragging = false; });
}

/* ============================================================
   PROBLEMS
   ============================================================ */

function renderProblems() {
  filterProblems(currentProblemFilter, null);
}

function filterProblems(cat, btn) {
  currentProblemFilter = cat;
  if (btn) {
    document.querySelectorAll('.pcat-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  const grid = document.getElementById('problemsGrid');
  if (!grid) return;
  const filtered = cat === 'all' ? PROBLEMS : PROBLEMS.filter(p => p.category === cat);
  grid.innerHTML = filtered.map(p => `
    <div class="problem-card">
      <div class="prob-category">${p.category}</div>
      <div class="prob-title">${p.title}</div>
      <div class="prob-location">📍 ${p.location}</div>
      <div class="prob-desc">${p.desc}</div>
      <div class="prob-dept">Department: <strong>${p.dept}</strong></div>
      <div class="prob-footer">
        <span class="prob-date">Reported: ${p.date}</span>
        <span class="badge badge-${p.status === 'Resolved' ? 'completed' : p.status === 'Work initiated' ? 'ongoing' : p.status === 'Under review' ? 'delayed' : 'reported'}">${p.status}</span>
      </div>
      <div style="margin-top:10px;"><button class="view-source-btn" onclick="openSourceModal('${p.source}')">View Source</button></div>
    </div>
  `).join('');
}

/* ============================================================
   COMPARE
   ============================================================ */

function setCompareTab(tab, btn) {
  currentCompareTab = tab;
  document.querySelectorAll('.compare-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('compareConstPanel').style.display = tab === 'constituencies' ? 'block' : 'none';
  document.getElementById('compareRepPanel').style.display = tab === 'representatives' ? 'block' : 'none';
}

function renderComparison() {
  const keys = [
    document.getElementById('cmp1')?.value,
    document.getElementById('cmp2')?.value,
    document.getElementById('cmp3')?.value,
  ].filter(Boolean);

  const data = keys.map(k => CONSTITUENCIES[k]).filter(Boolean);
  const wrap = document.getElementById('comparisonTableWrap');
  if (!wrap || !data.length) return;

  // Find best values
  const getBest = (metric, lowerBetter) => {
    const vals = data.map(d => d[metric]);
    if (!vals.every(v => typeof v === 'number')) return null;
    return lowerBetter ? Math.min(...vals) : Math.max(...vals);
  };

  const headers = `<tr><th class="metric-col">Metric</th>${data.map(d => `<th class="ct-header-cell">${d.name}</th>`).join('')}</tr>`;
  const rows = COMPARE_METRICS.map(m => {
    const best = m.numeric ? getBest(m.key, m.lowerBetter) : null;
    return `<tr>
      <td class="metric-col">${m.label}</td>
      ${data.map(d => {
        const val = d[m.key];
        const isBest = m.numeric && val === best;
        return `<td class="value-col${isBest ? ' best' : ''}">${m.format(val)}${isBest ? ' ★' : ''}</td>`;
      }).join('')}
    </tr>`;
  }).join('');

  wrap.innerHTML = `<table class="comparison-table"><thead>${headers}</thead><tbody>${rows}</tbody></table>`;
  renderComparisonChart(data);
}

function renderComparisonChart(data) {
  const el = document.getElementById('comparisonChartRow');
  if (!el) return;
  const colors = ['#1B6FEB', '#10B981', '#F59E0B'];
  const metrics = ['projects', 'completed', 'delayed', 'problems'];
  const maxVal = Math.max(...data.flatMap(d => metrics.map(m => d[m])));

  el.innerHTML = `
    <div class="chart-card">
      <h3 class="chart-title">Project Comparison</h3>
      <div style="display:flex;align-items:flex-end;gap:16px;height:160px;padding-bottom:24px;">
        ${metrics.map(m => `
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;justify-content:flex-end;">
            <div style="display:flex;gap:3px;align-items:flex-end;width:100%;">
              ${data.map((d, i) => `<div style="flex:1;background:${colors[i]};border-radius:4px 4px 0 0;height:${Math.max(4,Math.round((d[m]/maxVal)*130))}px;" title="${d.name}: ${d[m]}"></div>`).join('')}
            </div>
            <span style="font-size:10px;color:var(--text-muted);text-align:center;">${m}</span>
          </div>
        `).join('')}
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;">
        ${data.map((d, i) => `<div style="display:flex;align-items:center;gap:5px;font-size:12px;"><div style="width:10px;height:10px;border-radius:50%;background:${colors[i]};"></div>${d.name}</div>`).join('')}
      </div>
    </div>
    <div class="chart-card">
      <h3 class="chart-title">Funds Allocated (₹ Cr)</h3>
      <div style="display:flex;align-items:flex-end;gap:20px;height:160px;padding-bottom:24px;">
        ${data.map((d, i) => `
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;justify-content:flex-end;">
            <div style="width:100%;background:${colors[i]};border-radius:6px 6px 0 0;height:${Math.max(4,Math.round((d.fundsNum/Math.max(...data.map(x=>x.fundsNum)))*130))}px;" title="${d.name}: ₹${d.fundsNum}Cr"></div>
            <span style="font-size:11px;color:var(--text-muted);text-align:center;">${d.name}</span>
            <span style="font-size:11px;font-weight:600;">₹${d.fundsNum}Cr</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderRepComparison() {
  const i1 = parseInt(document.getElementById('repCmp1')?.value) || 0;
  const i2 = parseInt(document.getElementById('repCmp2')?.value) || 1;
  const r1 = REPRESENTATIVES[i1];
  const r2 = REPRESENTATIVES[i2];
  const el = document.getElementById('repComparisonContent');
  if (!el || !r1 || !r2) return;

  const metrics = [
    { label: 'Position', v1: r1.position, v2: r2.position },
    { label: 'Constituency', v1: r1.constituency, v2: r2.constituency },
    { label: 'Term', v1: r1.term, v2: r2.term },
    { label: 'Total Projects', v1: r1.projects, v2: r2.projects, numeric: true },
    { label: 'Funds (Demo)', v1: r1.funds, v2: r2.funds },
    { label: 'Legislative Questions', v1: r1.legislative, v2: r2.legislative, numeric: true },
    { label: 'Documents', v1: r1.documents, v2: r2.documents, numeric: true },
    { label: 'Party (Demo)', v1: r1.party + ' (Demo)', v2: r2.party + ' (Demo)' },
  ];

  el.innerHTML = `
    <div style="margin-bottom:12px;padding:10px 16px;background:var(--amber-light);border-radius:var(--radius-sm);font-size:13px;color:#92400E;">
      ⚠ This comparison shows raw documented metrics only. CivicLens does not provide performance scores, rankings or political assessments.
    </div>
    <div style="overflow-x:auto;">
      <table class="comparison-table">
        <thead><tr><th>Metric</th><th class="ct-header-cell">${r1.name}</th><th class="ct-header-cell">${r2.name}</th></tr></thead>
        <tbody>
          ${metrics.map(m => `<tr>
            <td class="metric-col">${m.label}</td>
            <td class="value-col">${m.v1}</td>
            <td class="value-col">${m.v2}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ============================================================
   SOURCES
   ============================================================ */

function renderSources() {
  filterSources('all', null);
}

function filterSources(type, btn) {
  currentSourceFilter = type;
  if (btn) {
    document.querySelectorAll('.source-filters .filter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  const grid = document.getElementById('sourcesGrid');
  if (!grid) return;
  const filtered = type === 'all' ? SOURCES : SOURCES.filter(s => s.type === type);
  grid.innerHTML = filtered.map(s => `
    <div class="source-card">
      <div class="sc-type">${s.type}</div>
      <div class="sc-title">${s.title}</div>
      <div class="sc-org">${s.org}</div>
      <div class="sc-meta">Published: ${s.date} · ${s.section}</div>
      <div class="sc-doc-id">${s.docId}</div>
      <div class="sc-footer">
        <button class="view-source-btn" onclick="openSourceModal('${s.id}')">View Details</button>
        <button class="btn-ghost" style="font-size:12px;" onclick="window.open('${s.url}','_blank')">Official Link ↗</button>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   MAP INTERACTIONS
   ============================================================ */

function mapClickState(state) {
  document.querySelectorAll('.map-state').forEach(s => s.classList.remove('active'));
  const el = document.querySelector(`.map-state[data-state="${state}"]`);
  if (el) el.classList.add('active');

  // Update preview card
  const preview = document.getElementById('mapPreviewCard');
  const stateNames = {
    delhi: { name: 'New Delhi', type: 'Union Territory', const: 'New Delhi', pop: '5.2L', voters: '3.8L', funds: '₹142Cr', proj: 86 },
    maharashtra: { name: 'Mumbai South', type: 'State', const: 'Maharashtra', pop: '14.8L', voters: '10.2L', funds: '₹380Cr', proj: 210 },
    up: { name: 'Lucknow', type: 'State', const: 'Uttar Pradesh', pop: '22.4L', voters: '15.6L', funds: '₹520Cr', proj: 340 },
    karnataka: { name: 'Bengaluru Central', type: 'State', const: 'Karnataka', pop: '18.6L', voters: '12.8L', funds: '₹295Cr', proj: 178 },
    'tamil-nadu': { name: 'Chennai Central', type: 'State', const: 'Tamil Nadu', pop: '16.2L', voters: '11.4L', funds: '₹312Cr', proj: 195 },
  };
  const info = stateNames[state] || { name: state.toUpperCase(), type: 'State', const: state, pop: 'N/A', voters: 'N/A', funds: 'N/A', proj: 'N/A' };

  preview.innerHTML = `
    <div class="mpc-header">
      <span class="mpc-badge">${info.name}</span>
      <span class="mpc-type">${info.type}</span>
    </div>
    <h3 class="mpc-name">${info.name}</h3>
    <p class="mpc-rep">${info.const}</p>
    <div class="mpc-stats">
      <div class="mpc-stat"><span class="mpc-val">${info.pop}</span><span class="mpc-key">Population</span></div>
      <div class="mpc-stat"><span class="mpc-val">${info.voters}</span><span class="mpc-key">Voters</span></div>
      <div class="mpc-stat"><span class="mpc-val">${info.funds}</span><span class="mpc-key">Funds</span></div>
      <div class="mpc-stat"><span class="mpc-val">${info.proj}</span><span class="mpc-key">Projects</span></div>
    </div>
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;">⚠ Sample data only</div>
    <button class="btn-primary btn-sm" onclick="showSection('constituencies')">View Dashboard →</button>
  `;
}

function mapStateChanged() { /* placeholder for state select */ }
function mapDistrictChanged() { /* placeholder */ }

/* ============================================================
   MODALS — SOURCE & EXPLAIN
   ============================================================ */

function openSourceModal(srcId) {
  const s = SOURCES.find(x => x.id === srcId) || SOURCES[0];
  document.getElementById('sourceModalTitle').textContent = 'Source Information';
  document.getElementById('sourceModalBody').innerHTML = `
    <div style="margin-bottom:12px;"><span class="source-verified-badge">📋 Documented Source</span></div>
    <div class="source-row"><span class="source-key">Source Type</span><span class="source-val"><span class="badge badge-ongoing">${s.type}</span></span></div>
    <div class="source-row"><span class="source-key">Organization</span><span class="source-val">${s.org}</span></div>
    <div class="source-row"><span class="source-key">Document Title</span><span class="source-val">${s.title}</span></div>
    <div class="source-row"><span class="source-key">Publication Date</span><span class="source-val">${s.date}</span></div>
    <div class="source-row"><span class="source-key">Section / Page</span><span class="source-val">${s.section}</span></div>
    <div class="source-row"><span class="source-key">Document ID</span><span class="source-val"><code style="font-size:12px;background:var(--gray-100);padding:2px 6px;border-radius:3px;">${s.docId}</code></span></div>
    <div style="border-top:1px solid var(--border);padding-top:14px;margin-top:4px;">
      <button class="source-link-btn" onclick="window.open('${s.url}','_blank')">↗ View Official Source</button>
      <div style="margin-top:10px;font-size:12px;color:var(--text-muted);">⚠ This is a prototype. Document IDs and links are illustrative only.</div>
    </div>
  `;
  openModal('sourceModal');
}

function closeSourceModal(e) {
  if (!e || e.target === e.currentTarget) closeModal('sourceModal');
}

function openExplainModal(term) {
  const explanation = AI_EXPLANATIONS[term] || 'This term refers to an official government process or document. For precise definitions, consult the relevant official gazette or ministry circular.';
  document.getElementById('explainModalTitle').textContent = term;
  document.getElementById('explainModalBody').innerHTML = `
    <div class="explain-term">${term}</div>
    <div class="explain-text">${explanation}</div>
    <div class="explain-note">
      ✦ This explanation is AI-assisted for general understanding. For legal or official definitions, refer to the relevant Act, Rule or Ministry circular.
      <div style="margin-top:8px;"><button class="view-source-btn" onclick="openSourceModal('src-3')">Related Source Document</button></div>
    </div>
  `;
  openModal('explainModal');
}

function closeExplainModal(e) {
  if (!e || e.target === e.currentTarget) closeModal('explainModal');
}

/* ============================================================
   MODAL HELPERS
   ============================================================ */

function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

// Keyboard close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['sourceModal', 'projectModal', 'explainModal', 'ftmModal'].forEach(closeModal);
    closeSearch();
  }
});

/* ============================================================
   COUNTING ANIMATION
   ============================================================ */

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 1600;
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  });
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.record-card, .kpi-card, .project-card, .rep-card, .problem-card').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}

/* ============================================================
   UTILITY
   ============================================================ */

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Theme
  initTheme();

  // Home section rendering
  renderLatestRecords();
  renderChangesTimeline();
  renderYearNav();

  // Animate hero counters after a short delay
  setTimeout(animateCounters, 300);

  // Progress bars animate when visible
  const pbObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.progress-fill').forEach(bar => {
          const w = bar.style.width;
          bar.style.width = '0';
          requestAnimationFrame(() => { bar.style.width = w; });
        });
      }
    });
  }, { threshold: 0.3 });

  // Constituency dashboard
  renderConstituencyDashboard('new-delhi');

  // Header scroll effect
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,0.1)' : '0 1px 4px rgba(0,0,0,0.06)';
  }, { passive: true });

  // Smooth section transitions
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

  console.log('CivicLens initialized. Demo data only — not real government records.');
});
