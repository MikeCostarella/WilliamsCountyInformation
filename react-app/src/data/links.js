// Williams County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-21

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Pivot Point";

export const LINKS = [
  // ---------- Government ----------
  { name: "Williams County (Official Site)", category: "Government", subcategory: "County", url: "https://www.williamscountyoh.gov/", description: "Official government portal for Williams County, Ohio (county seat: Bryan)." },
  { name: "Williams County Auditor", category: "Government", subcategory: "Auditor", url: "https://realestate.williamscountyoh.gov/", description: "Property records, valuations, and parcel/property search (hosted on the Pivot Point platform)." },
  { name: "Williams County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.williamscountyoh.gov/150/Board-of-Elections", description: "Voter registration, polling locations, and election administration." },
  { name: "City of Bryan", category: "Government", subcategory: "City", url: "https://www.cityofbryan.com/", description: "Government site for the City of Bryan, the county seat." },
  // ---------- Education ----------
  { name: "Williams County Public Library", category: "Education", subcategory: "Library", url: "https://www.mywcpl.org/", description: "Public library system serving Bryan and all of Williams County." },
  { name: "Bryan City Schools", category: "Education", subcategory: "K-12", url: "https://www.bryanschools.net/", description: "Bryan City School District — the county seat's public school system." },
  { name: "Northwest State Community College", category: "Education", subcategory: "Higher Ed", url: "https://www.northweststate.edu/", description: "Regional two-year college (Archbold) serving Williams County and northwest Ohio." },
  // ---------- Health ----------
  { name: "Williams County Health Department", category: "Health", subcategory: "Public Health", url: "https://www.williamscountyhealth.org/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  { name: "Parkview Bryan Hospital (CHWC)", category: "Health", subcategory: "Hospital", url: "https://www.chwchospital.org/", description: "Community hospital in Bryan — Community Hospitals and Wellness Centers, now part of Parkview Health." },
  // ---------- Business & Economy ----------
  { name: "Bryan Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.bryanchamber.org/", description: "Business advocacy, member support, and community resources across the Bryan area." },
  { name: "Williams County Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.williamscountyed.org/", description: "Countywide economic development, business attraction, and retention." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Williams County", category: "Community & Social", subcategory: "Workforce", url: "https://www.williamscountyoh.gov/583/OhioMeansJobs-Williams-County", description: "Workforce, job-search, and employment services for county residents." },
  // ---------- Recreation & Tourism ----------
  { name: "Williams County Agricultural Society (County Fair)", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://wcofair.com/", description: "The Williams County Fair and year-round events at the county fairgrounds." },
  // ---------- News & Media ----------
  { name: "The Bryan Times", category: "News & Media", subcategory: "Newspaper", url: "https://www.bryantimes.com/", description: "Williams County's daily newspaper covering local news, sports, and events." },
];
