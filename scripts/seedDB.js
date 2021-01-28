const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ptaSystemDesign"
);

const systemDesignSeed = [
    {
        objectiveID: "A2727975",
        ptaDgnNumber: "00-H-08-0481",
        allocReference: "000/101",
        title: "OVERHEAD LINE EQUIPMENT CONCRETE MAST CANTILEVER ARRANGEMENT 000 / 101",
        otherDgnNumbers: ["10-H-25-0001"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1431194",
        ptaDgnNumber: "00-H-08-0054",
        allocReference: "000/102",
        title: "OVERHEAD LINE EQUIPMENT - BACK TO BACK CANTILEVER ARRANGEMENT 000/102",
        otherDgnNumbers: ["00-H-07-5601", "10-H-25-5601"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A2769072",
        ptaDgnNumber: "00-H-08-0482",
        allocReference: "000/104",
        title: "MARGINAL CANTILEVER MASTS PACKAGE - A 000/104",
        otherDgnNumbers: ["00/104"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1431275",
        ptaDgnNumber: "00-H-08-0012",
        allocReference: "001/101",
        title: "OVERHEAD LINE EQUIPMENT STANDARD SPANS FOR SAGGED CONTACT WIRE 001/101",
        otherDgnNumbers: ["ES-HG-1002", "10-H-25-0002"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1431214",
        ptaDgnNumber: "00-H-08-0013",
        allocReference: "002/101",
        title: "OVERHEAD LINE EQUIPMENT CANTILEVER CONSTRUCTION 002/101",
        otherDgnNumbers: ["10-H-25-0003", "ES-H-1003", "000/101", "000/104"],
        revision: "2",
        filename: ""
    },
    {
        objectiveID: "A1633519",
        ptaDgnNumber: "00-H-08-0126",
        allocReference: "003/101",
        title: "OVERHEAD LINE EQUIPMENT PORTAL CONSTRUCTION 003/101",
        otherDgnNumbers: ["10-H-25-0004", "ES-HG-1004"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1633517",
        ptaDgnNumber: "00-H-08-0127",
        allocReference: "004/101",
        title: "OVERHEAD LINE EQUIP - INSULATED & UNINSULATED OVERLAP FOR TANGENT AND CURVED TRACKS  004/101",
        otherDgnNumbers: ["10-H-25-0005", "ES-HG-1005"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1633518",
        ptaDgnNumber: "00-H-08-0128",
        allocReference: "004/102",
        title: "OVERHEAD LINE EQUIP INSULATED & UNINSULATED OVERLAPS FOR TANGENT AND CURVED TRACKS -  BACK TO BACK CANTILEVERS - 004/102",
        otherDgnNumbers: ["10-H-25-0026", "ES-HG-1043"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1646533",
        ptaDgnNumber: "00-H-08-0116",
        allocReference: "005/101",
        title: "OVERHEAD LINE EQUIPMENTMID POINT STRUCTURE CANTILEVER CONSTRUCTION 005/101",
        otherDgnNumbers: ["10-H-25-0006", "ES-HG-1006"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1646542",
        ptaDgnNumber: "00-H-08-0117",
        allocReference: "005/102",
        title: "OVERHEAD LINE EQIPMENT MID POINT STRUCTURE BACK TO BACK CANTILEVER CONSTRUCTION 005/102",
        otherDgnNumbers: ["10-H-25-0027", "ES-HG-1044"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1651025",
        ptaDgnNumber: "00-H-08-0130",
        allocReference: "006/101",
        title: "OVERHEAD LINE EQUIPMENT ANCHOR TIE ASSEMBLIES 006/101",
        otherDgnNumbers: ["10-H-25-0007", "ES-HG-1007"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1660319",
        ptaDgnNumber: "00-H-08-0131",
        allocReference: "006/102",
        title: "OVERHEAD LINE EQUIPMENT - ANCHOR SET-OUT DETAILS FOR OVERLAPS/TWIN MASTS/CROSSOVERS IN RESTRICTED TRACK INTERVALS - 006/102",
        otherDgnNumbers: ["10-H-25-0032", "ES-HG-1049"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1283409",
        ptaDgnNumber: "00-H-08-1102",
        allocReference: "006/104",
        title: "SOUTH WEST METROPOLITAN RAILWAY  CONCRETE SLAB TRACK  ANCHOR SET OUT DETAILS FOR OVERLAP",
        otherDgnNumbers: ["006/104", "00-H-07-5603"],
        revision: "2",
        filename: ""
    },
    {
        objectiveID: "A1651090",
        ptaDgnNumber: "00-H-08-0132",
        allocReference: "007/101",
        title: "OVERHEAD LINE EQUIPMENT ARRANGEMENT OF BOOSTER TRANSFORMER STRUCTURE 007/101",
        otherDgnNumbers: ["10-H-25-0021", "ES-HG-1036"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2892479",
        ptaDgnNumber: "00-H-08-0634",
        allocReference: "007/102",
        title: "OVERHEAD LINE EQUIPMENT ARRANGEMENT OF BOOSTER TRANSFORMER STRUCTURES FOR BACK TO BACK STRUCTURES - 007/102",
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
        title: "OVERHEAD LINE EQUIPMENT TSC SWITCHING ARRANGEMENT FOR BACK TO BACK CANTILEVER STRUCTURES - 007/104",
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
        title: "OVERHEAD LINE EQUIPMENT - ARRANGEMENT OF EMERGENCY SUPPLY TRANSFORMER FOR BACK TO BACK STRUCTURES - 007/105",
        otherDgnNumbers: ["10-H-25-0031", "ES-HG-1048"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3059662",
        ptaDgnNumber: "00-H-08-0765",
        allocReference: "007/106",
        title: "OVERHEAD LINE EQUIPMENT ARRANGEMENT FOR RC AND EW TRANSPOSITION FROM BETWEEN TRACK TO OUTSIDE OF TRACK - 007/106",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1431204",
        ptaDgnNumber: "00-H-08-0021",
        allocReference: "007/107",
        title: "OVERHEAD LINE EQUIPMENT SURGE ARRESTER AND COUNTER ARRANGEMENT 007/107",
        otherDgnNumbers: [],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1980844",
        ptaDgnNumber: "00-H-08-0269",
        allocReference: "007/108",
        title: "OVERHEAD LINE EQUIPMENT 250 UC MAST WITH BOOSTER ARRANGEMENT - 007/108",
        otherDgnNumbers: ["G90-PRI-SI-OH-DRG-068"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1980855",
        ptaDgnNumber: "00-H-08-0272",
        allocReference: "007/109",
        title: "OVERHEAD LINE EQUIPMENT ADJUSTABLE PORTAL WITH BOOSTER TRANSFOMER ARRANGEMENT - 007/109",
        otherDgnNumbers: ["G90-PRI-SI-OH-DRG-071"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A3982685",
        ptaDgnNumber: "00-H-08-0124",
        allocReference: "007/110",
        title: "OVERHEAD LINE EQUIPMENT GENERAL ARRANGEMENT FOR DEP ON SEALING END 007/110",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1697035",
        ptaDgnNumber: "00-H-08-0168",
        allocReference: "008/101",
        title: "OVERHEAD LINE EQUIPMENTFREE RUNNING EQUIPMENT AT FLAT OR ARCHED OVERBRIDGES 008/101",
        otherDgnNumbers: ["10-H-25-0008", "ES-HG-1008"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1697566",
        ptaDgnNumber: "00-H-08-0169",
        allocReference: "008/103",
        title: "OVERHEAD LINE EQUIPMENT ARRANGEMENT OF TWIN CONTACT OVERBRIDGE 008/103",
        otherDgnNumbers: ["10-H-25-0009", "ES-HG-1009"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888089",
        ptaDgnNumber: "00-H-08-0171",
        allocReference: "008/104",
        title: "OVERHEAD LINE EQUIPMENT APPLICATION OF GLASS FIBRE SUPPORT UNITS TO SUIT CANTED TRACK - 008/104",
        otherDgnNumbers: ["10-H-25-0010", "ES-HG-1010"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3059656",
        ptaDgnNumber: "00-H-08-0758",
        allocReference: "008/519",
        title: "OVERHEAD LINE EQUIPMENT 76X76 DROP TUBE ARRANAGEMENT FOR STEEL BRIDGE BEAMS WITH MINIMUM HEADROOM - 008/519",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2852269",
        ptaDgnNumber: "00-H-08-0645",
        allocReference: "008/520",
        title: "OVERHEAD LINE EQUIPMENT 76X76DROP TUBE ARRANGEMENT FOR TIMBER BRIDGE BEAM - 008/520",
        otherDgnNumbers: ["008/520", "10-H-25-0400"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2852301",
        ptaDgnNumber: "00-H-08-0646",
        allocReference: "008/521",
        title: "OVERHEAD LINE EQUIPMENT 76X76 DROP TUBE ARRANGEMENT FOR TIMBER BRIDGES WITH MINIMUM HEADROOM - 008/521",
        otherDgnNumbers: ["008/521", "10-H-25-0399"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3139825",
        ptaDgnNumber: "00-H-08-0814",
        allocReference: "008/522",
        title: "OVERHEAD LINE EQUIPMENT 76X76 DROP TUBE ARRANGEMENT FOR JACK-ARCHED BRIDGES - 008/522",
        otherDgnNumbers: "[008/522, ES-HG-1013, 10-H-25-0148]",
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3059648",
        ptaDgnNumber: "00-H-08-0761",
        allocReference: "008/523",
        title: "OVERHEAD LINE EQUIPMENT 76X76 DROP TUBE ARRANGEMENT FOR JACK-ARCHED BRIDGES WITH MINIMUM HEADROOM - 008/523",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3059663",
        ptaDgnNumber: "00-H-08-0760",
        allocReference: "008/524",
        title: "OVERHEAD LINE EQUIPMENT  76X76 DROP TUBE ARRANGEMENT FOR STEEL BRIDGE BEAM - 008/524",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2852306",
        ptaDgnNumber: "00-H-08-0641",
        allocReference: "008/525",
        title: "OVERHEAD LINE EQUIPMENT 76 X 76 DROP TUBE ARRANGEMENT FOR PRESTRESSED CONCRETE BRIDGE BEAM - 008/525",
        otherDgnNumbers: ["008/525", "10-H-25-0545"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2892752",
        ptaDgnNumber: "00-H-08-0662",
        allocReference: "008/526",
        title: "OVERHEAD LINE EQUIPMENT 76X76 DROP TUBE ARRANGEMENT FOR PRESTRESSED CONCRETE BRIDGE BEAM AND CONCRETE PILE CAP 008/526",
        otherDgnNumbers: ["008/526", "10-H-25-0159"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A4209995",
        ptaDgnNumber: "00-H-08-0037",
        allocReference: "014/101",
        title: "OVERHEAD LINE EQUIPMENT CONDUTOR PARTICULARS CONTACT & CATENARY WIRE 014/101",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888087",
        ptaDgnNumber: "00-H-08-0177",
        allocReference: "014/105",
        title: "OVERHEAD LINE EQUIPMENT MAXIMUM SPAN LENGTH FOR CURVATURE 014/105",
        otherDgnNumbers: ["10-H-25-0013", "ES-HG-1019"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888085",
        ptaDgnNumber: "00-H-08-0178",
        allocReference: "014/117",
        title: "OVERHEAD LINE EQUIPMENT BLOW-OFF OFFSET AND STAGGER 014/117",
        otherDgnNumbers: ["10-H-25-0013", "ES-HG-1019"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1634849",
        ptaDgnNumber: "00-H-08-0122",
        allocReference: "014/121",
        title: "OVERHEAD LINE EQUIPMENT ALONG TRACK MOVEMENT 014/121",
        otherDgnNumbers: ["10-H-25-0015", "10-H-25-2000", "ES-HG-1021"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1635969",
        ptaDgnNumber: "00-H-08-0118",
        allocReference: "014/122 S1",
        title: "OVERHEAD LINE EQUIPMENT CATENARY DROPPER LIGHTS 7/3.75mm CATENARY & 107mm sq CONTACT WIRE 014/122 - SHEET 1 OF 2",
        otherDgnNumbers: ["10-H-25-0426", "ES-HG-1022"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1620180",
        ptaDgnNumber: "00-H-08-0119",
        allocReference: "014/122 S2",
        title: "OVERHEAD LINE EQUIP-CONTENARY DROPPER LENGTHS 107MM SQ CONTENARY & 107MM SQ CONTACT WIRE  014/122 - SHEET 2 OF 2",
        otherDgnNumbers: ["10-H-25-0469", "ES-HG-1023"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1636135",
        ptaDgnNumber: "00-H-08-0120",
        allocReference: "014/124",
        title: "OVERHEAD LINE EQUIPMENT A.T ANCHOR SPANS ANCHOR HEIGHT RANGES 14/124",
        otherDgnNumbers: ["10-H-25-0153", "ES-HG-1024"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2621595",
        ptaDgnNumber: "00-H-08-7132",
        allocReference: "014/126",
        title: "OVERHEAD LINE EQUIPMENT BALANCE WEIGHT SETTING CHART 014/126",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888090",
        ptaDgnNumber: "00-H-08-0180",
        allocReference: "014/128",
        title: "OVERHEAD LINE EQUIPMENT RETURN CONDUCTOR SAG CHART 014/128",
        otherDgnNumbers: ["10-H-25-0022", "ES-HG-1037"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888083",
        ptaDgnNumber: "00-H-08-0181",
        allocReference: "014/129",
        title: "OVERHEAD LINE EQUIPMENT RETURN CONDUCTOR BLOW OFF CHART 014/129",
        otherDgnNumbers: ["10-H-25-0023", "ES-HG-1038"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1652191",
        ptaDgnNumber: "00-H-08-0088",
        allocReference: "014/200",
        title: "OVERHEAD LINE EQUIPMENT RAKE INSTRUCTION FOR CANTILEVER MASTS 014/200/001",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2797743",
        ptaDgnNumber: "00-H-08-0502",
        allocReference: "014/201",
        title: "OVERHEAD LINE EQUIPMENT PUSH OFF CANTILEVER - TUBE LOADING CHART 014/201",
        otherDgnNumbers: "",
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2797748",
        ptaDgnNumber: "00-H-08-0508",
        allocReference: "014/202",
        title: "OVERHEAD LINE EQUIPMENT PULL OFF CANTILEVER - TUBE LOADING CHART 014/202",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2797739",
        ptaDgnNumber: "00-H-08-0507",
        allocReference: "014/203",
        title: "OVERHEAD LINE EQUIPMENT B.W. ANCHOR SPANS ANCHOR HEIGHT RANGES 014/203",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2797740",
        ptaDgnNumber: "00-H-08-0501",
        allocReference: "014/205",
        title: "OVERHEAD LINE EQUIPMENT OVERLAP DROPPER LENGTHS 014/205",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1636138",
        ptaDgnNumber: "00-H-08-0121",
        allocReference: "014/217",
        title: "OVERHEAD LINE EQUIPMENT ANCILLARY WIRE ERECTION TENSIONS 014/127",
        otherDgnNumbers: ["10-H-25-0020", "ES-HG-1035"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A2674367",
        ptaDgnNumber: "00-H-08-0365",
        allocReference: "014/222",
        title: "OVERHEAD LINE EQUIPMENT DROPPER LENGTHS FOR NEUTRAL SECTION SPANS 014/222 ",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2674370",
        ptaDgnNumber: "00-H-08-0366",
        allocReference: "014/223",
        title: "OVERHEAD LINES EQUIPMENT DROPPER LENGTHS FOR MID SPAN SECTION INSULATOR SPANS 014/223",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2674372",
        ptaDgnNumber: "00-H-08-0399",
        allocReference: "014/224",
        title: "OVERHEAD LINES EQUIPMENT DROPPER LENGTHS FOR SUPPORTED SECTION INSULATOR SPANS 014/224",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1299522",
        ptaDgnNumber: "00-H-08-0010",
        allocReference: "015/001",
        title: "OVERHEAD LINE EQUIPMENT ELECTRICAL CLEARANCES - PROVIDED AT OVERBRIDGES 015/001",
        otherDgnNumbers: ["10-H-25-2001"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1431205",
        ptaDgnNumber: "00-H-08-0050",
        allocReference: "015/002",
        title: "OVERHEAD LINE EQUIPMENT SAFETY SIGN FOR ELECTRIFICATION 015/002",
        otherDgnNumbers: ["10-H-25-0017"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1281498",
        ptaDgnNumber: "00-H-08-0006",
        allocReference: "015/003",
        title: "OVERHEAD LINE EQUIPMENT STRUCTURE NUMBERS 015/003 ",
        otherDgnNumbers: ["ES-HG-1028", "10-H-25-0155"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1431223",
        ptaDgnNumber: "00-H-08-0051",
        allocReference: "015/004",
        title: "OVERHEAD LINE EQUIPMENT TRACK DATA PLATE AT ELECTRIFICATION MASTS 015/004",
        otherDgnNumbers: ["10-H-04-0005"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A3059651",
        ptaDgnNumber: "00-H-08-0767",
        allocReference: "015/005",
        title: "OVERHEAD LINE EQUIPMENT BONDING ARRANGEMENTS 015/005",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3059659",
        ptaDgnNumber: "00-H-08-0764",
        allocReference: "015/006",
        title: "OVERHEAD LINE EQUIPMENT  FOUNDATIONS IN PLATFORMS 015/006",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3422913",
        ptaDgnNumber: "00-H-08-0512",
        allocReference: "015/008",
        title: "OVERHEAD LINE EQUIPMENT TRACK BONDING GUIDE - POINT AND CROSSING 015/008",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3070685",
        ptaDgnNumber: "00-H-08-0808",
        allocReference: "016/101",
        title: "OVERHEAD LINE EQUIPMENT TRAMWAY CANTILEVER CONSTRUCTION ARRANGEMENT 016/101",
        otherDgnNumbers: [],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1888097",
        ptaDgnNumber: "00-H-08-0159",
        allocReference: "035/001",
        title: "OVERHEAD LINE EQUIPMENT CONCRETE PORTAL MAST AND HEAVY LOAD CANTILEVER MAST - 035/001",
        otherDgnNumbers: ["10-H-25-0040", "ES-HG-1130"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888101",
        ptaDgnNumber: "00-H-08-0160",
        allocReference: "035/002",
        title: "OVERHEAD LINE EQUIPMENT CONCRETE SELF SUPPORTING ANCHOR MAST 035/002",
        otherDgnNumbers: ["10-H-25-0041", "ES-HG-1131"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2797689",
        ptaDgnNumber: "00-H-08-0448",
        allocReference: "035/003",
        title: "OVERHEAD LINE EQUIPMENT 200 SHS TWIN CANTILEVER MAST 035/003",
        otherDgnNumbers: [],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A3430232",
        ptaDgnNumber: "00-H-08-0828",
        allocReference: "035/005",
        title: "OVERHEAD CONDUCTOR RAIL 200 SHS WALL-MOUNTED MAST ARRANGEMENT 035/005",
        otherDgnNumbers: [],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A3430268",
        ptaDgnNumber: "00-H-08-0934",
        allocReference: "035/006",
        title: "OVERHEAD CONDUCTOR RAIL 200 SHS SLAB-MOUNTED MAST ARRANGEMENT 035/006",
        otherDgnNumbers: [],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1888111",
        ptaDgnNumber: "00-H-08-0162",
        allocReference: "035/040",
        title: "OVERHEAD LINE EQUIPMENT 40KNM NOMINAL CAPACITY CONCRETE MAST 035/040",
        otherDgnNumbers: ["10-H-25-0477", "ES-HG-1132"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888091",
        ptaDgnNumber: "00-H-08-0163",
        allocReference: "035/050",
        title: "OVERHEAD LINE EQUIPMENT 50KNM NOMINAL CAPACITY CONCRETE MAST 035/050",
        otherDgnNumbers: ["10-H-25-0478", "ES-HG-1133"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888105",
        ptaDgnNumber: "00-H-08-0166",
        allocReference: "035/050",
        title: "OVERHEAD LINE EQUIPMENT 50KNM NOMINAL CAPACITY BOLTED BASE MAST 039/050",
        otherDgnNumbers: ["10-H-25-0483", "ES-HG-1137"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888096",
        ptaDgnNumber: "00-H-08-0164",
        allocReference: "035/050/F",
        title: "OVERHEAD LINE EQUIPMENT 50KNM NOMINAL CAPACITY CONCRETE FEEDER MAST 035/050/F",
        otherDgnNumbers: ["10-H-25-0479", "ES-HG-1134"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888100",
        ptaDgnNumber: "00-H-08-0165",
        allocReference: "035/060",
        title: "OVERHEAD LINE EQUIPMENT 60KNM NOMINAL CAPACITY CONCRETE MAST 035/060",
        otherDgnNumbers: ["10-H-25-0480", "ES-HG-1135"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888092",
        ptaDgnNumber: "00-H-08-0158",
        allocReference: "035/074",
        title: "OVERHEAD LINE EQUIPMENT 74KNM NOMINAL CAPACITY CONCRETE MAST 035/074",
        otherDgnNumbers: ["10-H-25-0039", "ES-HG-1115"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888113",
        ptaDgnNumber: "00-H-08-0152",
        allocReference: "035/310",
        title: "OVERHEAD LINE EQUIPMENT STEEL MASTS - VARIOUS LENGTH - 310-UC-XXX 035/310/XXX",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888093",
        ptaDgnNumber: "00-H-08-0153",
        allocReference: "035/B40",
        title: "OVERHEAD LINE EQUIPMENT 40KNM NOMINAL CAPACITY CONCRETE MAST FOR BACK TO BACK CANTILEVERS - 035/B40",
        otherDgnNumbers: ["10-H-25-0034", "ES-HG-1107"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888098",
        ptaDgnNumber: "00-H-08-0154",
        allocReference: "035/B50",
        title: "OVERHEAD LINE EQUIPMENT 50KNM NOMINAL CAPACITY CONCRETE MAST FOR BACK TO BACK CANTILEVERS - 035/B50",
        otherDgnNumbers: ["10-H-25-0035", "ES-HG-1108"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888102",
        ptaDgnNumber: "00-H-08-0155",
        allocReference: "035/B74",
        title: "OVERHEAD LINE EQUIPMENT 74KNM NOMINAL CAPACITY CONCRETE MAST FOR BACK TO BACK CANTILEVERS - 035/B74",
        otherDgnNumbers: ["10-H-25-0036", "ES-HG-1111"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1693974",
        ptaDgnNumber: "00-H-08-0135",
        allocReference: "035/C65",
        title: "OVERHEAD LINE EQUIPMENT 65kNm NOMINAL CAPACITY CONCRETE MAST BOLTED BASE FOR BACK TO BACK CANTILEVER 035/C65/067",
        otherDgnNumbers: ["10-H-25-2027"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1694019",
        ptaDgnNumber: "00-H-08-0136",
        allocReference: "035/C71",
        title: "OVERHEAD LINE EQUIPMENT 71kNm NOMINAL CAPACITY CONCRETE MAST WITH FERRULES FOR BACK TO BACK CANTILEVER 035/C71/087",
        otherDgnNumbers: ["10-H-25-2028"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1696686",
        ptaDgnNumber: "00-H-08-0137",
        allocReference: "035/D71/095",
        title: "OVERHEAD LINE EQUIPMENT 71kNm NOMINALCAPACITY CONCRETE MAST WITH FERULES FOR BACK TO BACK CANTILEVER 035/D71/095",
        otherDgnNumbers: ["10-H-25-2029", "035-D71-095"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1694034",
        ptaDgnNumber: "00-H-08-0138",
        allocReference: "035/D71/105",
        title: "OVERHEAD LINE EQUIPMENT 71kNm NOMINAL CAPACITY CONCRETE MAST WITH FERRULES FOR BACK  TO BACK CANTILEVER 035/D71/105",
        otherDgnNumbers: ["10-H-25-2030"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888164",
        ptaDgnNumber: "00-H-08-7002",
        allocReference: "035/R93", title: "OVERHEAD LINE EQUIPMENT - 95KNM NOMINAL CAPACITY CONCRETE MAST WITH UNISTRUT FORBACK TO BACK CANTILEVERS - 035/R93/095",
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
        title: "OVERHEAD LINE EQUIPMENT - 97KNM NOMINAL CAPACITY CONCRETE MAST WITH UNISTRUT FOR BACK TO BACK CANTILEVERS - 035/R97/087",
        otherDgnNumbers: [],
        revision: "3",
        filename: ""
    },
    {
        objectiveID: "A2969901",
        ptaDgnNumber: "00-H-08-0681",
        allocReference: "036/001",
        title: "OVERHEAD LINE EQUIPMENT CLAMP FOR DIA 127MM DROP TUBE PCL/036/001",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2969898",
        ptaDgnNumber: "00-H-08-0682",
        allocReference: "037/001",
        title: "OVERHEAD LINE EQUIPMENT RETURN CONDUCTOR SUPPORT BRACKET FOR DIA 127MM DROP TUBE PCL/037/001",
        otherDgnNumbers: ["01-H-04-4682"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888106",
        ptaDgnNumber: "00-H-08-0161",
        allocReference: "037/150",
        title: "OVERHEAD LINE EQUIPMENT 150UC HINGED BASE PORTAL MAST 037/150",
        otherDgnNumbers: ["10-H-25-0162", "ES-HG-1106"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3072286",
        ptaDgnNumber: "00-H-08-0818",
        allocReference: "038/001",
        title: "OVERHEAD LINE EQUIPMENT GALVANISED CLEVIS THIMBLE 126/038/001",
        otherDgnNumbers: [],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2772454",
        ptaDgnNumber: "00-H-08-0618",
        allocReference: "038/150",
        title: "15OUC PORTAL BEAM 038/150",
        otherDgnNumbers: ["038/150", "10-H-25-0163"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888110",
        ptaDgnNumber: "00-H-08-0167",
        allocReference: "039/074",
        title: "OVERHEAD LINE EQUIPMENT 74KNM NOMINAL CAPACITY BOLTED BASE MAST 039/074",
        otherDgnNumbers: ["10-H-25-0546", "ES-HG-1116"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1980891",
        ptaDgnNumber: "00-H-08-0259",
        allocReference: "039/256",
        title: "OVERHEAD LINE EQUIPMENT 250 UC MAST (450X450 BASE PLATE) 039/256/XXX",
        otherDgnNumbers: ["G90-PRI-SI-OH-DRG-058"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1980996",
        ptaDgnNumber: "00-H-08-0260",
        allocReference: "039/257",
        title: "OVERHEAD LINE EQUIPMENT 250 UC MAST (450X590 BASE PLATE) 039/257/XXX",
        otherDgnNumbers: ["G90-PRI-SI-OH-DRG-059"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A1980886",
        ptaDgnNumber: "00-H-08-0270",
        allocReference: "039/258",
        title: "OVERHEAD LINE EQUIPMENT 250 UC MAST WITH BOOSTER MAST DETAILS - 039/257",
        otherDgnNumbers: ["G90-PRI-SI-OH-DRG-069"],
        revision: "1",
        filename: ""
    },
    {
        objectiveID: "A2737129",
        ptaDgnNumber: "00-H-08-0308",
        allocReference: "039/300",
        title: "OVERHEAD LINE EQUIPMENT 350 SHS MAST - MAST DETAILS 039/300",
        otherDgnNumbers: ["G90EP-LOR-EP-OH-DRG-076"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3511663",
        ptaDgnNumber: "00-H-08-7040",
        allocReference: "039/500",
        title: "OVERHEAD LINE EQUIPMENT 200UC59 BOLTED BASE STEEL MAST 039/500",
        otherDgnNumbers: ["00-H-08-0141", "00-H-08-0144", "00-H-08-1323"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A3511670",
        ptaDgnNumber: "00-H-08-1321",
        allocReference: "039/501",
        title: "OVERHEAD LINE EQUIPMENT 250UC73 BOLTED BASE STEEL MAST 039/501",
        otherDgnNumbers: ["00-H-08-0145", "00-H-08-0146", "00-H-08-0147", "00-H-08-0148", "00-H-08-0149", "00-H-08-0150"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888107",
        ptaDgnNumber: "00-H-08-0156",
        allocReference: "039/B50",
        title: "OVERHEAD LINE EQUIPMENT 50KNM NOMINAL CAPACITY BOLTED BASE MAST FOR BACK TO BACK CANTILEVERS - 039/B50",
        otherDgnNumbers: ["10-H-25-0037", "ES-HG-1112"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1888112",
        ptaDgnNumber: "00-H-08-0157",
        allocReference: "039/B74",
        title: "OVERHEAD LINE EQUIPMENT 74KNM NOMINAL CAPACITY BOLTED BASE MAST FOR BACK TO BACK CANTILEVERS - 039/B74",
        otherDgnNumbers: ["10-H-25-0038", "ES-HG-1113"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A2595010",
        ptaDgnNumber: "00-H-08-0418",
        allocReference: "040/150",
        title: "OVERHEAD LINE EQUIPMENT 150 UC HINGED BASE PORTAL MAST BOLTING ARRANGEMENT 040/150",
        otherDgnNumbers: ["10-H-25-0164", "10-H-25-0484"],
        revision: "0",
        filename: ""
    },
    {
        objectiveID: "A1620020",
        ptaDgnNumber: "00-H-08-0020",
        allocReference: "040/205",
        title: "OVERHEAD LINE EQUIPMENT ADJUSTABLE PORTAL 040/205",
        otherDgnNumbers: ["10-H-25-3000"],
        revision: "0",
        filename: ""
    }

];

db.SystemDesign
    .remove({})
    .then(() => db.SystemDesign.collection.insertMany(systemDesignSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });