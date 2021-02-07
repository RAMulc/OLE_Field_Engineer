// https://docs.atlas.mongodb.com/tutorial/insert-data-into-your-cluster/

const { MongoClient } = require("mongodb");
require('dotenv').config();

// Replace the following with your Atlas connection string                                                                                                                                        
const url = MONGODB_URI;
const client = new MongoClient(url);

// The database to use
const dbName = "ptaSystemDesign";

const systemDesignSeed = [
    {
        objectiveID: "A2727975",
        ptaDgnNumber: "00-H-08-0481",
        allocReference: "000/101",
        title: "CONCRETE MAST CANTILEVER ARRANGEMENT",
        otherDgnNumbers: ["10-H-25-0001"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1431194",
        ptaDgnNumber: "00-H-08-0054",
        allocReference: "000/102",
        title: "- BACK TO BACK CANTILEVER ARRANGEMENT",
        otherDgnNumbers: ["00-H-07-5601", "10-H-25-5601"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A2769072",
        ptaDgnNumber: "00-H-08-0482",
        allocReference: "000/104",
        title: "MARGINAL CANTILEVER MASTS PACKAGE - A",
        otherDgnNumbers: ["00/104"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1431275",
        ptaDgnNumber: "00-H-08-0012",
        allocReference: "001/101",
        title: "STANDARD SPANS FOR SAGGED CONTACT WIRE",
        otherDgnNumbers: ["ES-HG-1002", "10-H-25-0002"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1431214",
        ptaDgnNumber: "00-H-08-0013",
        allocReference: "002/101",
        title: "CANTILEVER CONSTRUCTION",
        otherDgnNumbers: ["10-H-25-0003", "ES-H-1003", "000/101", "000/104"],
        revision: "2",
        filename: ""
    },
    {
        objectiveID: "A1633519",
        ptaDgnNumber: "00-H-08-0126",
        allocReference: "003/101",
        title: "PORTAL CONSTRUCTION",
        otherDgnNumbers: ["10-H-25-0004", "ES-HG-1004"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1633517",
        ptaDgnNumber: "00-H-08-0127",
        allocReference: "004/101",
        title: "INSULATED & UNINSULATED OVERLAP FOR TANGENT AND CURVED TRACKS",
        otherDgnNumbers: ["10-H-25-0005", "ES-HG-1005"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1633518",
        ptaDgnNumber: "00-H-08-0128",
        allocReference: "004/102",
        title: "INSULATED & UNINSULATED OVERLAPS FOR TANGENT AND CURVED TRACKS -  BACK TO BACK CANTILEVERS",
        otherDgnNumbers: ["10-H-25-0026", "ES-HG-1043"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1646533",
        ptaDgnNumber: "00-H-08-0116",
        allocReference: "005/101",
        title: "MID POINT STRUCTURE CANTILEVER CONSTRUCTION",
        otherDgnNumbers: ["10-H-25-0006", "ES-HG-1006"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1646542",
        ptaDgnNumber: "00-H-08-0117",
        allocReference: "005/102",
        title: "OVERHEAD LINE EQIPMENT MID POINT STRUCTURE BACK TO BACK CANTILEVER CONSTRUCTION",
        otherDgnNumbers: ["10-H-25-0027", "ES-HG-1044"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1651025",
        ptaDgnNumber: "00-H-08-0130",
        allocReference: "006/101",
        title: "ANCHOR TIE ASSEMBLIES",
        otherDgnNumbers: ["10-H-25-0007", "ES-HG-1007"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1660319",
        ptaDgnNumber: "00-H-08-0131",
        allocReference: "006/102",
        title: "- ANCHOR SET-OUT DETAILS FOR OVERLAPS/TWIN MASTS/CROSSOVERS IN RESTRICTED TRACK INTERVALS",
        otherDgnNumbers: ["10-H-25-0032", "ES-HG-1049"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1283409",
        ptaDgnNumber: "00-H-08-1102",
        allocReference: "006/104",
        title: "CONCRETE SLAB TRACK  ANCHOR SET OUT DETAILS FOR OVERLAP",
        otherDgnNumbers: ["006/104", "00-H-07-5603"],
        revision: "2",
        filename: ""
    },
    {
        objectiveID: "A1651090",
        ptaDgnNumber: "00-H-08-0132",
        allocReference: "007/101",
        title: "ARRANGEMENT OF BOOSTER TRANSFORMER STRUCTURE",
        otherDgnNumbers: ["10-H-25-0021", "ES-HG-1036"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2892479",
        ptaDgnNumber: "00-H-08-0634",
        allocReference: "007/102",
        title: "ARRANGEMENT OF BOOSTER TRANSFORMER STRUCTURES FOR BACK TO BACK STRUCTURES",
        otherDgnNumbers: ["007/102", "10-H-25-2002"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3078229",
        ptaDgnNumber: "00-H-08-0763",
        allocReference: "007/103",
        title: "SINGLE POLE SWITCHING ON BACK TO BACK STRUCTURES",
        otherDgnNumbers: ["10-H-25-0029"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2892485",
        ptaDgnNumber: "00-H-08-0635",
        allocReference: "007/104",
        title: "TSC SWITCHING ARRANGEMENT FOR BACK TO BACK CANTILEVER STRUCTURES",
        otherDgnNumbers: ["007/104", "10-H-25-2003"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2075942",
        ptaDgnNumber: "00-H-08-7038",
        allocReference: "007/104",
        title: "FEEDER STATION SWITCHING ARRANGEMENTS FOR CENTERED CANTILEVER STRUCTURES (SSR)",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1660313",
        ptaDgnNumber: "00-H-08-0134",
        allocReference: "007/105",
        title: "- ARRANGEMENT OF EMERGENCY SUPPLY TRANSFORMER FOR BACK TO BACK STRUCTURES",
        otherDgnNumbers: ["10-H-25-0031", "ES-HG-1048"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3059662",
        ptaDgnNumber: "00-H-08-0765",
        allocReference: "007/106",
        title: "ARRANGEMENT FOR RC AND EW TRANSPOSITION FROM BETWEEN TRACK TO OUTSIDE OF TRACK",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1431204",
        ptaDgnNumber: "00-H-08-0021",
        allocReference: "007/107",
        title: "SURGE ARRESTER AND COUNTER ARRANGEMENT",
        otherDgnNumbers: [],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1980844",
        ptaDgnNumber: "00-H-08-0269",
        allocReference: "007/108",
        title: "250 UC MAST WITH BOOSTER ARRANGEMENT",
        otherDgnNumbers: ["G90-PRI-SI-OH-DRG-068"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1980855",
        ptaDgnNumber: "00-H-08-0272",
        allocReference: "007/109",
        title: "ADJUSTABLE PORTAL WITH BOOSTER TRANSFOMER ARRANGEMENT",
        otherDgnNumbers: ["G90-PRI-SI-OH-DRG-071"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A3982685",
        ptaDgnNumber: "00-H-08-0124",
        allocReference: "007/110",
        title: "GENERAL ARRANGEMENT FOR DEP ON SEALING END",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1697035",
        ptaDgnNumber: "00-H-08-0168",
        allocReference: "008/101",
        title: "FREE RUNNING EQUIPMENT AT FLAT OR ARCHED OVERBRIDGES",
        otherDgnNumbers: ["10-H-25-0008", "ES-HG-1008"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1697566",
        ptaDgnNumber: "00-H-08-0169",
        allocReference: "008/103",
        title: "ARRANGEMENT OF TWIN CONTACT OVERBRIDGE",
        otherDgnNumbers: ["10-H-25-0009", "ES-HG-1009"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888089",
        ptaDgnNumber: "00-H-08-0171",
        allocReference: "008/104",
        title: "APPLICATION OF GLASS FIBRE SUPPORT UNITS TO SUIT CANTED TRACK",
        otherDgnNumbers: ["10-H-25-0010", "ES-HG-1010"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3059656",
        ptaDgnNumber: "00-H-08-0758",
        allocReference: "008/519",
        title: "76X76 DROP TUBE ARRANAGEMENT FOR STEEL BRIDGE BEAMS WITH MINIMUM HEADROOM",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2852269",
        ptaDgnNumber: "00-H-08-0645",
        allocReference: "008/520",
        title: "76X76DROP TUBE ARRANGEMENT FOR TIMBER BRIDGE BEAM",
        otherDgnNumbers: ["008/520", "10-H-25-0400"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2852301",
        ptaDgnNumber: "00-H-08-0646",
        allocReference: "008/521",
        title: "76X76 DROP TUBE ARRANGEMENT FOR TIMBER BRIDGES WITH MINIMUM HEADROOM",
        otherDgnNumbers: ["008/521", "10-H-25-0399"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3139825",
        ptaDgnNumber: "00-H-08-0814",
        allocReference: "008/522",
        title: "76X76 DROP TUBE ARRANGEMENT FOR JACK-ARCHED BRIDGES",
        otherDgnNumbers: "[008/522, ES-HG-1013, 10-H-25-0148]",
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3059648",
        ptaDgnNumber: "00-H-08-0761",
        allocReference: "008/523",
        title: "76X76 DROP TUBE ARRANGEMENT FOR JACK-ARCHED BRIDGES WITH MINIMUM HEADROOM",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3059663",
        ptaDgnNumber: "00-H-08-0760",
        allocReference: "008/524",
        title: " 76X76 DROP TUBE ARRANGEMENT FOR STEEL BRIDGE BEAM",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2852306",
        ptaDgnNumber: "00-H-08-0641",
        allocReference: "008/525",
        title: "76 X 76 DROP TUBE ARRANGEMENT FOR PRESTRESSED CONCRETE BRIDGE BEAM",
        otherDgnNumbers: ["008/525", "10-H-25-0545"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2892752",
        ptaDgnNumber: "00-H-08-0662",
        allocReference: "008/526",
        title: "76X76 DROP TUBE ARRANGEMENT FOR PRESTRESSED CONCRETE BRIDGE BEAM AND CONCRETE PILE CAP",
        otherDgnNumbers: ["008/526", "10-H-25-0159"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A4209995",
        ptaDgnNumber: "00-H-08-0037",
        allocReference: "014/101",
        title: "CONDUTOR PARTICULARS CONTACT & CATENARY WIRE",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888087",
        ptaDgnNumber: "00-H-08-0177",
        allocReference: "014/105",
        title: "MAXIMUM SPAN LENGTH FOR CURVATURE",
        otherDgnNumbers: ["10-H-25-0013", "ES-HG-1019"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888085",
        ptaDgnNumber: "00-H-08-0178",
        allocReference: "014/117",
        title: "BLOW-OFF OFFSET AND STAGGER",
        otherDgnNumbers: ["10-H-25-0013", "ES-HG-1019"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1634849",
        ptaDgnNumber: "00-H-08-0122",
        allocReference: "014/121",
        title: "ALONG TRACK MOVEMENT",
        otherDgnNumbers: ["10-H-25-0015", "10-H-25-2000", "ES-HG-1021"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1635969",
        ptaDgnNumber: "00-H-08-0118",
        allocReference: "014/122 S1",
        title: "CATENARY DROPPER LIGHTS 7/3.75mm CATENARY & 107mm sq CONTACT WIRE - SHEET 1 OF 2",
        otherDgnNumbers: ["10-H-25-0426", "ES-HG-1022"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1620180",
        ptaDgnNumber: "00-H-08-0119",
        allocReference: "014/122 S2",
        title: "CONTENARY DROPPER LENGTHS 107MM SQ CONTENARY & 107MM SQ CONTACT WIRE - SHEET 2 OF 2",
        otherDgnNumbers: ["10-H-25-0469", "ES-HG-1023"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1636135",
        ptaDgnNumber: "00-H-08-0120",
        allocReference: "014/124",
        title: "A.T ANCHOR SPANS ANCHOR HEIGHT RANGES",
        otherDgnNumbers: ["10-H-25-0153", "ES-HG-1024"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2621595",
        ptaDgnNumber: "00-H-08-7132",
        allocReference: "014/126",
        title: "BALANCE WEIGHT SETTING CHART",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888090",
        ptaDgnNumber: "00-H-08-0180",
        allocReference: "014/128",
        title: "RETURN CONDUCTOR SAG CHART",
        otherDgnNumbers: ["10-H-25-0022", "ES-HG-1037"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888083",
        ptaDgnNumber: "00-H-08-0181",
        allocReference: "014/129",
        title: "RETURN CONDUCTOR BLOW OFF CHART",
        otherDgnNumbers: ["10-H-25-0023", "ES-HG-1038"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1652191",
        ptaDgnNumber: "00-H-08-0088",
        allocReference: "014/200",
        title: "RAKE INSTRUCTION FOR CANTILEVER MASTS",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2797743",
        ptaDgnNumber: "00-H-08-0502",
        allocReference: "014/201",
        title: "PUSH OFF CANTILEVER - TUBE LOADING CHART",
        otherDgnNumbers: "",
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2797748",
        ptaDgnNumber: "00-H-08-0508",
        allocReference: "014/202",
        title: "PULL OFF CANTILEVER - TUBE LOADING CHART",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2797739",
        ptaDgnNumber: "00-H-08-0507",
        allocReference: "014/203",
        title: "B.W. ANCHOR SPANS ANCHOR HEIGHT RANGES",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2797740",
        ptaDgnNumber: "00-H-08-0501",
        allocReference: "014/205",
        title: "OVERLAP DROPPER LENGTHS",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1636138",
        ptaDgnNumber: "00-H-08-0121",
        allocReference: "014/217",
        title: "ANCILLARY WIRE ERECTION TENSIONS",
        otherDgnNumbers: ["10-H-25-0020", "ES-HG-1035"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A2674367",
        ptaDgnNumber: "00-H-08-0365",
        allocReference: "014/222",
        title: "DROPPER LENGTHS FOR NEUTRAL SECTION SPANS",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2674370",
        ptaDgnNumber: "00-H-08-0366",
        allocReference: "014/223",
        title: "DROPPER LENGTHS FOR MID SPAN SECTION INSULATOR SPANS",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2674372",
        ptaDgnNumber: "00-H-08-0399",
        allocReference: "014/224",
        title: "DROPPER LENGTHS FOR SUPPORTED SECTION INSULATOR SPANS",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1299522",
        ptaDgnNumber: "00-H-08-0010",
        allocReference: "015/001",
        title: "ELECTRICAL CLEARANCES - PROVIDED AT OVERBRIDGES",
        otherDgnNumbers: ["10-H-25-2001"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1431205",
        ptaDgnNumber: "00-H-08-0050",
        allocReference: "015/002",
        title: "SAFETY SIGN FOR ELECTRIFICATION",
        otherDgnNumbers: ["10-H-25-0017"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1281498",
        ptaDgnNumber: "00-H-08-0006",
        allocReference: "015/003",
        title: "STRUCTURE NUMBERS",
        otherDgnNumbers: ["ES-HG-1028", "10-H-25-0155"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1431223",
        ptaDgnNumber: "00-H-08-0051",
        allocReference: "015/004",
        title: "TRACK DATA PLATE AT ELECTRIFICATION MASTS",
        otherDgnNumbers: ["10-H-04-0005"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A3059651",
        ptaDgnNumber: "00-H-08-0767",
        allocReference: "015/005",
        title: "BONDING ARRANGEMENTS",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3059659",
        ptaDgnNumber: "00-H-08-0764",
        allocReference: "015/006",
        title: "FOUNDATIONS IN PLATFORMS",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3422913",
        ptaDgnNumber: "00-H-08-0512",
        allocReference: "015/008",
        title: "TRACK BONDING GUIDE - POINT AND CROSSING",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3070685",
        ptaDgnNumber: "00-H-08-0808",
        allocReference: "016/101",
        title: "TRAMWAY CANTILEVER CONSTRUCTION ARRANGEMENT",
        otherDgnNumbers: [],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1888097",
        ptaDgnNumber: "00-H-08-0159",
        allocReference: "035/001",
        title: "CONCRETE PORTAL MAST AND HEAVY LOAD CANTILEVER MAST",
        otherDgnNumbers: ["10-H-25-0040", "ES-HG-1130"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888101",
        ptaDgnNumber: "00-H-08-0160",
        allocReference: "035/002",
        title: "CONCRETE SELF SUPPORTING ANCHOR MAST",
        otherDgnNumbers: ["10-H-25-0041", "ES-HG-1131"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2797689",
        ptaDgnNumber: "00-H-08-0448",
        allocReference: "035/003",
        title: "200 SHS TWIN CANTILEVER MAST",
        otherDgnNumbers: [],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A3430232",
        ptaDgnNumber: "00-H-08-0828",
        allocReference: "035/005",
        title: "OVERHEAD CONDUCTOR RAIL 200 SHS WALL-MOUNTED MAST ARRANGEMENT",
        otherDgnNumbers: [],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A3430268",
        ptaDgnNumber: "00-H-08-0934",
        allocReference: "035/006",
        title: "OVERHEAD CONDUCTOR RAIL 200 SHS SLAB-MOUNTED MAST ARRANGEMENT",
        otherDgnNumbers: [],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1888111",
        ptaDgnNumber: "00-H-08-0162",
        allocReference: "035/040",
        title: "40KNM NOMINAL CAPACITY CONCRETE MAST",
        otherDgnNumbers: ["10-H-25-0477", "ES-HG-1132"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888091",
        ptaDgnNumber: "00-H-08-0163",
        allocReference: "035/050",
        title: "50KNM NOMINAL CAPACITY CONCRETE MAST",
        otherDgnNumbers: ["10-H-25-0478", "ES-HG-1133"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888105",
        ptaDgnNumber: "00-H-08-0166",
        allocReference: "035/050",
        title: "50KNM NOMINAL CAPACITY BOLTED BASE MAST",
        otherDgnNumbers: ["10-H-25-0483", "ES-HG-1137"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888096",
        ptaDgnNumber: "00-H-08-0164",
        allocReference: "035/050/F",
        title: "50KNM NOMINAL CAPACITY CONCRETE FEEDER MAST",
        otherDgnNumbers: ["10-H-25-0479", "ES-HG-1134"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888100",
        ptaDgnNumber: "00-H-08-0165",
        allocReference: "035/060",
        title: "60KNM NOMINAL CAPACITY CONCRETE MAST",
        otherDgnNumbers: ["10-H-25-0480", "ES-HG-1135"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888092",
        ptaDgnNumber: "00-H-08-0158",
        allocReference: "035/074",
        title: "74KNM NOMINAL CAPACITY CONCRETE MAST",
        otherDgnNumbers: ["10-H-25-0039", "ES-HG-1115"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888113",
        ptaDgnNumber: "00-H-08-0152",
        allocReference: "035/310",
        title: "STEEL MASTS - VARIOUS LENGTH - 310-UC-XXX",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888093",
        ptaDgnNumber: "00-H-08-0153",
        allocReference: "035/B40",
        title: "40KNM NOMINAL CAPACITY CONCRETE MAST FOR BACK TO BACK CANTILEVERS",
        otherDgnNumbers: ["10-H-25-0034", "ES-HG-1107"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888098",
        ptaDgnNumber: "00-H-08-0154",
        allocReference: "035/B50",
        title: "50KNM NOMINAL CAPACITY CONCRETE MAST FOR BACK TO BACK CANTILEVERS",
        otherDgnNumbers: ["10-H-25-0035", "ES-HG-1108"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888102",
        ptaDgnNumber: "00-H-08-0155",
        allocReference: "035/B74",
        title: "74KNM NOMINAL CAPACITY CONCRETE MAST FOR BACK TO BACK CANTILEVERS",
        otherDgnNumbers: ["10-H-25-0036", "ES-HG-1111"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1693974",
        ptaDgnNumber: "00-H-08-0135",
        allocReference: "035/C65",
        title: "65kNm NOMINAL CAPACITY CONCRETE MAST BOLTED BASE FOR BACK TO BACK CANTILEVER",
        otherDgnNumbers: ["10-H-25-2027"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1694019",
        ptaDgnNumber: "00-H-08-0136",
        allocReference: "035/C71",
        title: "71kNm NOMINAL CAPACITY CONCRETE MAST WITH FERRULES FOR BACK TO BACK CANTILEVER",
        otherDgnNumbers: ["10-H-25-2028"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1696686",
        ptaDgnNumber: "00-H-08-0137",
        allocReference: "035/D71/095",
        title: "71kNm NOMINALCAPACITY CONCRETE MAST WITH FERULES FOR BACK TO BACK CANTILEVER",
        otherDgnNumbers: ["10-H-25-2029", "035-D71-095"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1694034",
        ptaDgnNumber: "00-H-08-0138",
        allocReference: "035/D71/105",
        title: "71kNm NOMINAL CAPACITY CONCRETE MAST WITH FERRULES FOR BACK  TO BACK CANTILEVER",
        otherDgnNumbers: ["10-H-25-2030"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888164",
        ptaDgnNumber: "00-H-08-7002",
        allocReference: "035/R93",
        title: "95KNM NOMINAL CAPACITY CONCRETE MAST WITH UNISTRUT FORBACK TO BACK CANTILEVERS",
        otherDgnNumbers: [],
        revision: "3",
        filename: ""
    },
    {
        objectiveID: "A1695994",
        ptaDgnNumber: "00-H-08-7001",
        allocReference: "035/R97/065",
        title: "97KNM NOMINAL CAPACITY BOLTED BASE CONCRETE MAST WITH UNISTRUT",
        otherDgnNumbers: ["035/R97/065"],
        revision: "3",
        filename: ""
    },
    {
        objectiveID: "A1888163",
        ptaDgnNumber: "00-H-08-7005",
        allocReference: "035/R97/087",
        title: "- 97KNM NOMINAL CAPACITY CONCRETE MAST WITH UNISTRUT FOR BACK TO BACK CANTILEVERS",
        otherDgnNumbers: [],
        revision: "3",
        filename: ""
    },
    {
        objectiveID: "A2969901",
        ptaDgnNumber: "00-H-08-0681",
        allocReference: "036/001",
        title: "CLAMP FOR DIA 127MM DROP TUBE",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2969898",
        ptaDgnNumber: "00-H-08-0682",
        allocReference: "037/001",
        title: "RETURN CONDUCTOR SUPPORT BRACKET FOR DIA 127MM DROP TUBE",
        otherDgnNumbers: ["01-H-04-4682"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888106",
        ptaDgnNumber: "00-H-08-0161",
        allocReference: "037/150",
        title: "150UC HINGED BASE PORTAL MAST",
        otherDgnNumbers: ["10-H-25-0162", "ES-HG-1106"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3072286",
        ptaDgnNumber: "00-H-08-0818",
        allocReference: "038/001",
        title: "GALVANISED CLEVIS THIMBLE",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2772454",
        ptaDgnNumber: "00-H-08-0618",
        allocReference: "038/150",
        title: "15OUC PORTAL BEAM",
        otherDgnNumbers: ["038/150", "10-H-25-0163"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888110",
        ptaDgnNumber: "00-H-08-0167",
        allocReference: "039/074",
        title: "74KNM NOMINAL CAPACITY BOLTED BASE MAST",
        otherDgnNumbers: ["10-H-25-0546", "ES-HG-1116"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1980891",
        ptaDgnNumber: "00-H-08-0259",
        allocReference: "039/256",
        title: "250 UC MAST (450X450 BASE PLATE)",
        otherDgnNumbers: ["G90-PRI-SI-OH-DRG-058"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1980996",
        ptaDgnNumber: "00-H-08-0260",
        allocReference: "039/257",
        title: "250 UC MAST (450X590 BASE PLATE)",
        otherDgnNumbers: ["G90-PRI-SI-OH-DRG-059"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1980886",
        ptaDgnNumber: "00-H-08-0270",
        allocReference: "039/258",
        title: "250 UC MAST WITH BOOSTER MAST DETAILS",
        otherDgnNumbers: ["G90-PRI-SI-OH-DRG-069"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A2737129",
        ptaDgnNumber: "00-H-08-0308",
        allocReference: "039/300",
        title: "350 SHS MAST - MAST DETAILS",
        otherDgnNumbers: ["G90EP-LOR-EP-OH-DRG-076"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3511663",
        ptaDgnNumber: "00-H-08-7040",
        allocReference: "039/500",
        title: "200UC59 BOLTED BASE STEEL MAST",
        otherDgnNumbers: ["00-H-08-0141", "00-H-08-0144", "00-H-08-1323"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3511670",
        ptaDgnNumber: "00-H-08-1321",
        allocReference: "039/501",
        title: "250UC73 BOLTED BASE STEEL MAST",
        otherDgnNumbers: ["00-H-08-0145", "00-H-08-0146", "00-H-08-0147", "00-H-08-0148", "00-H-08-0149", "00-H-08-0150"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888107",
        ptaDgnNumber: "00-H-08-0156",
        allocReference: "039/B50",
        title: "50KNM NOMINAL CAPACITY BOLTED BASE MAST FOR BACK TO BACK CANTILEVERS",
        otherDgnNumbers: ["10-H-25-0037", "ES-HG-1112"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888112",
        ptaDgnNumber: "00-H-08-0157",
        allocReference: "039/B74",
        title: "74KNM NOMINAL CAPACITY BOLTED BASE MAST FOR BACK TO BACK CANTILEVERS",
        otherDgnNumbers: ["10-H-25-0038", "ES-HG-1113"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2595010",
        ptaDgnNumber: "00-H-08-0418",
        allocReference: "040/150",
        title: "150 UC HINGED BASE PORTAL MAST BOLTING ARRANGEMENT",
        otherDgnNumbers: ["10-H-25-0164", "10-H-25-0484"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1620020",
        ptaDgnNumber: "00-H-08-0020",
        allocReference: "040/205",
        title: "ADJUSTABLE PORTAL",
        otherDgnNumbers: ["10-H-25-3000"],
        revision: "0",
        filename: ""
    }

];

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "systemdesigns"
        const col = db.collection("systemdesigns");

        // Construct a document                                                                                                                                                              

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertMany(systemDesignSeed);

        // Find one document
        const myDoc = await col.findOne();

        // Print to the console
        console.log(myDoc);
    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}
run().catch(console.dir);