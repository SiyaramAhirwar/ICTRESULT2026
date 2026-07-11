// ============================================================
// COMPLETE JAVASCRIPT - SSR-GSP Result Portal
// ============================================================

// ============================================================
// STUDENT DATA (Merged from 3 PDF files - 51 Students)
// ============================================================
const studentData = [
    // ===== RANK 1 =====
    {
        id: "SSRGSP/NET/2025/1/035",
        name: "NIKITA RATHORE",
        semester1: {
            subjects: { "NET_M1": 86, "NET_M2": 97, "NET_M3": 89, "NET_M4": 94, "PPD1": 92 },
            total: 458,
            percentage: 91.6,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 86, "NET_M6": 98, "NET_M7": 97, "NET_M8": 99, "PPD2": 49, "PPD3": 46 },
            total: 475,
            percentage: 95.0,
            result: "PASS"
        },
        combined: { total: 933, percentage: 93.30, rank: 1, finalStatus: "PASS" }
    },
    // ===== RANK 2 =====
    {
        id: "SSRGSP/NET/2025/1/008",
        name: "ASHISH KUMAR",
        semester1: {
            subjects: { "NET_M1": 85, "NET_M2": 89, "NET_M3": 91, "NET_M4": 88, "PPD1": 85 },
            total: 438,
            percentage: 87.6,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 85, "NET_M6": 98, "NET_M7": 97, "NET_M8": 100, "PPD2": 47, "PPD3": 44 },
            total: 471,
            percentage: 94.2,
            result: "PASS"
        },
        combined: { total: 909, percentage: 90.90, rank: 2, finalStatus: "PASS" }
    },
    // ===== RANK 3 =====
    {
        id: "SSRGSP/NET/2025/1/059",
        name: "SIYARAM AHIRWAR",
        semester1: {
            subjects: { "NET_M1": 86, "NET_M2": 99, "NET_M3": 95, "NET_M4": 88, "PPD1": 91 },
            total: 459,
            percentage: 91.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 83, "NET_M6": 97, "NET_M7": 97, "NET_M8": 79, "PPD2": 41, "PPD3": 39 },
            total: 436,
            percentage: 87.2,
            result: "PASS"
        },
        combined: { total: 895, percentage: 89.50, rank: 3, finalStatus: "PASS" }
    },
    // ===== RANK 4 =====
    {
        id: "SSRGSP/NET/2025/1/040",
        name: "PRANIT ASRANI",
        semester1: {
            subjects: { "NET_M1": 92, "NET_M2": 100, "NET_M3": 93, "NET_M4": 94, "PPD1": 91 },
            total: 470,
            percentage: 94.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 80, "NET_M6": 82, "NET_M7": 65, "NET_M8": 96, "PPD2": 48, "PPD3": 44 },
            total: 415,
            percentage: 83.0,
            result: "PASS"
        },
        combined: { total: 885, percentage: 88.50, rank: 4, finalStatus: "PASS" }
    },
    // ===== RANK 5 =====
    {
        id: "SSRGSP/NET/2025/1/064",
        name: "SWAPNIL SASWADKAR",
        semester1: {
            subjects: { "NET_M1": 87, "NET_M2": 92, "NET_M3": 83, "NET_M4": 92, "PPD1": 91 },
            total: 445,
            percentage: 89.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 85, "NET_M6": 89, "NET_M7": 94, "NET_M8": 80, "PPD2": 45, "PPD3": 44 },
            total: 437,
            percentage: 87.4,
            result: "PASS"
        },
        combined: { total: 882, percentage: 88.20, rank: 5, finalStatus: "PASS" }
    },
    // ===== RANK 6 =====
    {
        id: "SSRGSP/NET/2025/1/002",
        name: "AAYUSH BARSENA",
        semester1: {
            subjects: { "NET_M1": 94, "NET_M2": 98, "NET_M3": 96, "NET_M4": 95, "PPD1": 74 },
            total: 457,
            percentage: 91.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 88, "NET_M6": 84, "NET_M7": 95, "NET_M8": 83, "PPD2": 41, "PPD3": 34 },
            total: 425,
            percentage: 85.0,
            result: "PASS"
        },
        combined: { total: 882, percentage: 88.20, rank: 6, finalStatus: "PASS" }
    },
    // ===== RANK 7 =====
    {
        id: "SSRGSP/NET/2025/1/023",
        name: "ISHWAR DANGI",
        semester1: {
            subjects: { "NET_M1": 86, "NET_M2": 95, "NET_M3": 91, "NET_M4": 88, "PPD1": 75 },
            total: 435,
            percentage: 87.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 87, "NET_M6": 89, "NET_M7": 95, "NET_M8": 93, "PPD2": 39, "PPD3": 37 },
            total: 442,
            percentage: 88.4,
            result: "PASS"
        },
        combined: { total: 877, percentage: 87.70, rank: 7, finalStatus: "PASS" }
    },
    // ===== RANK 8 =====
    {
        id: "SSRGSP/NET/2025/1/060",
        name: "SONALI MANGROLIYA",
        semester1: {
            subjects: { "NET_M1": 90, "NET_M2": 100, "NET_M3": 98, "NET_M4": 91, "PPD1": 91 },
            total: 470,
            percentage: 94.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 84, "NET_M6": 68, "NET_M7": 85, "NET_M8": 84, "PPD2": 41, "PPD3": 40 },
            total: 402,
            percentage: 80.4,
            result: "PASS"
        },
        combined: { total: 872, percentage: 87.20, rank: 8, finalStatus: "PASS" }
    },
    // ===== RANK 9 =====
    {
        id: "SSRGSP/NET/2025/1/055",
        name: "SATYAM JAISWAL",
        semester1: {
            subjects: { "NET_M1": 89, "NET_M2": 97, "NET_M3": 88, "NET_M4": 84, "PPD1": 85 },
            total: 443,
            percentage: 88.6,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 84, "NET_M6": 94, "NET_M7": 94, "NET_M8": 77, "PPD2": 39, "PPD3": 39 },
            total: 427,
            percentage: 85.4,
            result: "PASS"
        },
        combined: { total: 870, percentage: 87.00, rank: 9, finalStatus: "PASS" }
    },
    // ===== RANK 10 =====
    {
        id: "SSRGSP/NET/2025/1/007",
        name: "ANSHUMAN DEHARIYA",
        semester1: {
            subjects: { "NET_M1": 92, "NET_M2": 90, "NET_M3": 92, "NET_M4": 88, "PPD1": 72 },
            total: 434,
            percentage: 86.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 79, "NET_M6": 83, "NET_M7": 95, "NET_M8": 100, "PPD2": 40, "PPD3": 34 },
            total: 431,
            percentage: 86.2,
            result: "PASS"
        },
        combined: { total: 865, percentage: 86.50, rank: 10, finalStatus: "PASS" }
    },
    // ===== RANK 11 =====
    {
        id: "SSRGSP/NET/2025/1/006",
        name: "ANSHUL GOUR",
        semester1: {
            subjects: { "NET_M1": 93, "NET_M2": 99, "NET_M3": 90, "NET_M4": 87, "PPD1": 75 },
            total: 444,
            percentage: 88.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 80, "NET_M6": 83, "NET_M7": 76, "NET_M8": 90, "PPD2": 46, "PPD3": 44 },
            total: 419,
            percentage: 83.8,
            result: "PASS"
        },
        combined: { total: 863, percentage: 86.30, rank: 11, finalStatus: "PASS" }
    },
    // ===== RANK 12 =====
    {
        id: "SSRGSP/NET/2025/1/005",
        name: "ANKIT KOL",
        semester1: {
            subjects: { "NET_M1": 90, "NET_M2": 89, "NET_M3": 87, "NET_M4": 86, "PPD1": 70 },
            total: 422,
            percentage: 84.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 79, "NET_M6": 92, "NET_M7": 88, "NET_M8": 94, "PPD2": 38, "PPD3": 42 },
            total: 426,
            percentage: 85.2,
            result: "PASS"
        },
        combined: { total: 848, percentage: 84.80, rank: 12, finalStatus: "PASS" }
    },
    // ===== RANK 13 =====
    {
        id: "SSRGSP/NET/2025/1/019",
        name: "GULSHAN KUMAR HANS",
        semester1: {
            subjects: { "NET_M1": 91, "NET_M2": 100, "NET_M3": 97, "NET_M4": 88, "PPD1": 70 },
            total: 446,
            percentage: 89.2,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 72, "NET_M6": 83, "NET_M7": 69, "NET_M8": 92, "PPD2": 42, "PPD3": 40 },
            total: 398,
            percentage: 79.6,
            result: "PASS"
        },
        combined: { total: 844, percentage: 84.40, rank: 13, finalStatus: "PASS" }
    },
    // ===== RANK 14 =====
    {
        id: "SSRGSP/NET/2025/1/062",
        name: "SOURABH KUMAR MEHRA",
        semester1: {
            subjects: { "NET_M1": 87, "NET_M2": 90, "NET_M3": 78, "NET_M4": 89, "PPD1": 90 },
            total: 434,
            percentage: 86.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 74, "NET_M6": 75, "NET_M7": 81, "NET_M8": 91, "PPD2": 41, "PPD3": 43 },
            total: 405,
            percentage: 81.0,
            result: "PASS"
        },
        combined: { total: 839, percentage: 83.90, rank: 14, finalStatus: "PASS" }
    },
    // ===== RANK 15 =====
    {
        id: "SSRGSP/NET/2025/1/067",
        name: "VIKAS YADAV",
        semester1: {
            subjects: { "NET_M1": 88, "NET_M2": 100, "NET_M3": 82, "NET_M4": 91, "PPD1": 89 },
            total: 450,
            percentage: 90.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 82, "NET_M6": 64, "NET_M7": 75, "NET_M8": 82, "PPD2": 45, "PPD3": 37 },
            total: 385,
            percentage: 77.0,
            result: "PASS"
        },
        combined: { total: 835, percentage: 83.50, rank: 15, finalStatus: "PASS" }
    },
    // ===== RANK 16 =====
    {
        id: "SSRGSP/NET/2025/1/043",
        name: "RAKSHA RAUT",
        semester1: {
            subjects: { "NET_M1": 80, "NET_M2": 85, "NET_M3": 86, "NET_M4": 77, "PPD1": 78 },
            total: 406,
            percentage: 81.2,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 62, "NET_M6": 51, "NET_M7": 59, "NET_M8": 81, "PPD2": 44, "PPD3": 37 },
            total: 334,
            percentage: 66.8,
            result: "PASS"
        },
        combined: { total: 740, percentage: 74.00, rank: 16, finalStatus: "PASS" }
    },
    // ===== RANK 17 =====
    {
        id: "SSRGSP/NET/2025/1/036",
        name: "OM USRETHE",
        semester1: {
            subjects: { "NET_M1": 71, "NET_M2": 83, "NET_M3": 82, "NET_M4": 70, "PPD1": 79 },
            total: 385,
            percentage: 77.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 73, "NET_M6": 64, "NET_M7": 65, "NET_M8": 77, "PPD2": 38, "PPD3": 34 },
            total: 351,
            percentage: 70.2,
            result: "PASS"
        },
        combined: { total: 736, percentage: 73.60, rank: 17, finalStatus: "PASS" }
    },
    // ===== RANK 18 =====
    {
        id: "SSRGSP/NET/2025/1/027",
        name: "KAMAL CHOUHAN",
        semester1: {
            subjects: { "NET_M1": 72, "NET_M2": 58, "NET_M3": 86, "NET_M4": 82, "PPD1": 61 },
            total: 359,
            percentage: 71.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 72, "NET_M6": 58, "NET_M7": 86, "NET_M8": 82, "PPD2": 39, "PPD3": 37 },
            total: 374,
            percentage: 74.8,
            result: "PASS"
        },
        combined: { total: 733, percentage: 73.30, rank: 18, finalStatus: "PASS" }
    },
    // ===== RANK 19 =====
    {
        id: "SSRGSP/NET/2025/1/032",
        name: "MUSKAN MEHRA",
        semester1: {
            subjects: { "NET_M1": 69, "NET_M2": 68, "NET_M3": 68, "NET_M4": 66, "PPD1": 75 },
            total: 346,
            percentage: 69.2,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 72, "NET_M6": 66, "NET_M7": 73, "NET_M8": 80, "PPD2": 47, "PPD3": 41 },
            total: 379,
            percentage: 75.8,
            result: "PASS"
        },
        combined: { total: 725, percentage: 72.50, rank: 19, finalStatus: "PASS" }
    },
    // ===== RANK 20 =====
    {
        id: "SSRGSP/NET/2025/1/058",
        name: "SHYAM TANWAR",
        semester1: {
            subjects: { "NET_M1": 82, "NET_M2": 70, "NET_M3": 83, "NET_M4": 78, "PPD1": 78 },
            total: 391,
            percentage: 78.2,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 53, "NET_M6": 50, "NET_M7": 72, "NET_M8": 85, "PPD2": 38, "PPD3": 32 },
            total: 330,
            percentage: 66.0,
            result: "PASS"
        },
        combined: { total: 721, percentage: 72.10, rank: 20, finalStatus: "PASS" }
    },
    // ===== RANK 21 =====
    {
        id: "SSRGSP/NET/2025/1/042",
        name: "PURAB CHAMAN",
        semester1: {
            subjects: { "NET_M1": 57, "NET_M2": 86, "NET_M3": 81, "NET_M4": 85, "PPD1": 80 },
            total: 389,
            percentage: 77.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 61, "NET_M6": 51, "NET_M7": 76, "NET_M8": 71, "PPD2": 32, "PPD3": 40 },
            total: 331,
            percentage: 66.2,
            result: "PASS"
        },
        combined: { total: 720, percentage: 72.00, rank: 21, finalStatus: "PASS" }
    },
    // ===== RANK 22 =====
    {
        id: "SSRGSP/NET/2025/1/044",
        name: "RATIBHAN KUSHWAHA",
        semester1: {
            subjects: { "NET_M1": 81, "NET_M2": 88, "NET_M3": 79, "NET_M4": 79, "PPD1": 75 },
            total: 402,
            percentage: 80.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 67, "NET_M6": 51, "NET_M7": 59, "NET_M8": 71, "PPD2": 38, "PPD3": 30 },
            total: 316,
            percentage: 63.2,
            result: "PASS"
        },
        combined: { total: 718, percentage: 71.80, rank: 22, finalStatus: "PASS" }
    },
    // ===== RANK 23 =====
    {
        id: "SSRGSP/NET/2025/1/021",
        name: "HIMANSHU PARIHAR",
        semester1: {
            subjects: { "NET_M1": 78, "NET_M2": 54, "NET_M3": 52, "NET_M4": 74, "PPD1": 109 },
            total: 367,
            percentage: 73.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 78, "NET_M6": 54, "NET_M7": 52, "NET_M8": 74, "PPD2": 38, "PPD3": 35 },
            total: 331,
            percentage: 66.2,
            result: "PASS"
        },
        combined: { total: 698, percentage: 69.80, rank: 23, finalStatus: "PASS" }
    },
    // ===== RANK 24 =====
    {
        id: "SSRGSP/NET/2025/1/045",
        name: "RIMJHIM AHIRWAR",
        semester1: {
            subjects: { "NET_M1": 65, "NET_M2": 55, "NET_M3": 53, "NET_M4": 75, "PPD1": 109 },
            total: 357,
            percentage: 71.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 65, "NET_M6": 55, "NET_M7": 53, "NET_M8": 75, "PPD2": 38, "PPD3": 31 },
            total: 317,
            percentage: 63.4,
            result: "PASS"
        },
        combined: { total: 674, percentage: 67.40, rank: 24, finalStatus: "PASS" }
    },
    // ===== RANK 25 =====
    {
        id: "SSRGSP/NET/2025/1/037",
        name: "PARVATI",
        semester1: {
            subjects: { "NET_M1": 70, "NET_M2": 62, "NET_M3": 55, "NET_M4": 70, "PPD1": 83 },
            total: 340,
            percentage: 68.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 70, "NET_M6": 62, "NET_M7": 55, "NET_M8": 70, "PPD2": 38, "PPD3": 34 },
            total: 329,
            percentage: 65.8,
            result: "PASS"
        },
        combined: { total: 669, percentage: 66.90, rank: 25, finalStatus: "PASS" }
    },
    // ===== RANK 26 =====
    {
        id: "SSRGSP/NET/2025/1/029",
        name: "KRISHNA KUMAR AHIRWAR",
        semester1: {
            subjects: { "NET_M1": 76, "NET_M2": 57, "NET_M3": 52, "NET_M4": 70, "PPD1": 87 },
            total: 342,
            percentage: 68.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 76, "NET_M6": 57, "NET_M7": 52, "NET_M8": 70, "PPD2": 39, "PPD3": 31 },
            total: 325,
            percentage: 65.0,
            result: "PASS"
        },
        combined: { total: 667, percentage: 66.70, rank: 26, finalStatus: "PASS" }
    },
    // ===== RANK 27 =====
    {
        id: "SSRGSP/NET/2025/1/028",
        name: "KANHA KUMAWAT",
        semester1: {
            subjects: { "NET_M1": 48, "NET_M2": 64, "NET_M3": 79, "NET_M4": 60, "PPD1": 57 },
            total: 308,
            percentage: 61.6,
            result: "PASS WITH GRACE"
        },
        semester2: {
            subjects: { "NET_M5": 48, "NET_M6": 64, "NET_M7": 79, "NET_M8": 60, "PPD2": 38, "PPD3": 32 },
            total: 321,
            percentage: 64.2,
            result: "PASS WITH GRACE"
        },
        combined: { total: 629, percentage: 62.90, rank: 27, finalStatus: "PASS WITH GRACE" }
    },
    // ===== RANK 28 =====
    {
        id: "SSRGSP/NET/2025/1/047",
        name: "RISHABH KUMAR JHARIYA",
        semester1: {
            subjects: { "NET_M1": 25, "NET_M2": 50, "NET_M3": 52, "NET_M4": 0, "PPD1": 0 },
            total: 127,
            percentage: 25.4,
            result: "FAIL"
        },
        semester2: {
            subjects: { "NET_M5": 25, "NET_M6": 50, "NET_M7": 52, "NET_M8": 0, "PPD2": 0, "PPD3": 36 },
            total: 163,
            percentage: 32.6,
            result: "FAIL"
        },
        combined: { total: 290, percentage: 29.00, rank: 28, finalStatus: "FAIL" }
    },
    // ===== RANK 29 =====
    {
        id: "SSRGSP/NET/2025/1/010",
        name: "CHIKKU MERIYA",
        semester1: {
            subjects: { "NET_M1": 93, "NET_M2": 98, "NET_M3": 97, "NET_M4": 92, "PPD1": 92 },
            total: 472,
            percentage: 94.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 0, "NET_M6": 0, "NET_M7": 0, "NET_M8": 0, "PPD2": 0, "PPD3": 0 },
            total: 0,
            percentage: 0.0,
            result: "FAIL"
        },
        combined: { total: 472, percentage: 47.20, rank: 29, finalStatus: "FAIL" }
    },
    // ===== RANK 30 =====
    {
        id: "SSRGSP/NET/2025/1/046",
        name: "RISHABH JAIN",
        semester1: {
            subjects: { "NET_M1": 95, "NET_M2": 97, "NET_M3": 92, "NET_M4": 89, "PPD1": 81 },
            total: 454,
            percentage: 90.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 8, "NET_M6": 8, "NET_M7": 0, "NET_M8": 0, "PPD2": 0, "PPD3": 0 },
            total: 16,
            percentage: 3.2,
            result: "FAIL"
        },
        combined: { total: 470, percentage: 47.00, rank: 30, finalStatus: "FAIL" }
    },
    // ===== RANK 31 =====
    {
        id: "SSRGSP/NET/2025/1/003",
        name: "ALOK TIWARI",
        semester1: {
            subjects: { "NET_M1": 96, "NET_M2": 98, "NET_M3": 97, "NET_M4": 96, "PPD1": 78 },
            total: 465,
            percentage: 93.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 0, "NET_M6": 0, "NET_M7": 0, "NET_M8": 0, "PPD2": 0, "PPD3": 0 },
            total: 0,
            percentage: 0.0,
            result: "FAIL"
        },
        combined: { total: 465, percentage: 46.50, rank: 31, finalStatus: "FAIL" }
    },
    // ===== RANK 32 =====
    {
        id: "SSRGSP/NET/2025/1/050",
        name: "SANDEEP KUMAR BAIS",
        semester1: {
            subjects: { "NET_M1": 87, "NET_M2": 95, "NET_M3": 87, "NET_M4": 85, "PPD1": 76 },
            total: 430,
            percentage: 86.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 72, "NET_M6": 76, "NET_M7": 70, "NET_M8": 83, "PPD2": 40, "PPD3": 33 },
            total: 374,
            percentage: 74.8,
            result: "PASS"
        },
        combined: { total: 804, percentage: 80.40, rank: 32, finalStatus: "PASS" }
    },
    // ===== RANK 33 =====
    {
        id: "SSRGSP/NET/2025/1/052",
        name: "SANIYA KHAN PATHAN",
        semester1: {
            subjects: { "NET_M1": 85, "NET_M2": 91, "NET_M3": 86, "NET_M4": 74, "PPD1": 73 },
            total: 409,
            percentage: 81.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 74, "NET_M6": 74, "NET_M7": 77, "NET_M8": 73, "PPD2": 42, "PPD3": 35 },
            total: 375,
            percentage: 75.0,
            result: "PASS"
        },
        combined: { total: 784, percentage: 78.40, rank: 33, finalStatus: "PASS" }
    },
    // ===== RANK 34 =====
    {
        id: "SSRGSP/NET/2025/1/051",
        name: "SANGEETA KUMARI",
        semester1: {
            subjects: { "NET_M1": 91, "NET_M2": 87, "NET_M3": 74, "NET_M4": 77, "PPD1": 74 },
            total: 403,
            percentage: 80.6,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 72, "NET_M6": 68, "NET_M7": 79, "NET_M8": 81, "PPD2": 39, "PPD3": 35 },
            total: 374,
            percentage: 74.8,
            result: "PASS"
        },
        combined: { total: 777, percentage: 77.70, rank: 34, finalStatus: "PASS" }
    },
    // ===== RANK 35 =====
    {
        id: "SSRGSP/NET/2025/1/012",
        name: "DEEPESH CHOUDHARI",
        semester1: {
            subjects: { "NET_M1": 91, "NET_M2": 98, "NET_M3": 86, "NET_M4": 80, "PPD1": 72 },
            total: 427,
            percentage: 85.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 74, "NET_M6": 73, "NET_M7": 67, "NET_M8": 87, "PPD2": 39, "PPD3": 31 },
            total: 371,
            percentage: 74.2,
            result: "PASS"
        },
        combined: { total: 798, percentage: 79.80, rank: 35, finalStatus: "PASS" }
    },
    // ===== RANK 36 =====
    {
        id: "SSRGSP/NET/2025/1/063",
        name: "SURESH KUMAR",
        semester1: {
            subjects: { "NET_M1": 85, "NET_M2": 89, "NET_M3": 80, "NET_M4": 78, "PPD1": 86 },
            total: 418,
            percentage: 83.6,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 68, "NET_M6": 69, "NET_M7": 76, "NET_M8": 76, "PPD2": 43, "PPD3": 33 },
            total: 365,
            percentage: 73.0,
            result: "PASS"
        },
        combined: { total: 783, percentage: 78.30, rank: 36, finalStatus: "PASS" }
    },
    // ===== RANK 37 =====
    {
        id: "SSRGSP/NET/2025/1/070",
        name: "YASHPAL",
        semester1: {
            subjects: { "NET_M1": 79, "NET_M2": 87, "NET_M3": 82, "NET_M4": 81, "PPD1": 79 },
            total: 408,
            percentage: 81.6,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 73, "NET_M6": 54, "NET_M7": 78, "NET_M8": 80, "PPD2": 38, "PPD3": 37 },
            total: 360,
            percentage: 72.0,
            result: "PASS"
        },
        combined: { total: 768, percentage: 76.80, rank: 37, finalStatus: "PASS" }
    },
    // ===== RANK 38 =====
    {
        id: "SSRGSP/NET/2025/1/057",
        name: "SHUBHAM JANGHELA",
        semester1: {
            subjects: { "NET_M1": 84, "NET_M2": 98, "NET_M3": 96, "NET_M4": 82, "PPD1": 81 },
            total: 441,
            percentage: 88.2,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 72, "NET_M6": 63, "NET_M7": 74, "NET_M8": 70, "PPD2": 41, "PPD3": 39 },
            total: 359,
            percentage: 71.8,
            result: "PASS"
        },
        combined: { total: 800, percentage: 80.00, rank: 38, finalStatus: "PASS" }
    },
    // ===== RANK 39 =====
    {
        id: "SSRGSP/NET/2025/1/049",
        name: "ROHIT NAGARDHANE",
        semester1: {
            subjects: { "NET_M1": 84, "NET_M2": 91, "NET_M3": 76, "NET_M4": 78, "PPD1": 70 },
            total: 399,
            percentage: 79.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 72, "NET_M6": 52, "NET_M7": 82, "NET_M8": 67, "PPD2": 38, "PPD3": 34 },
            total: 345,
            percentage: 69.0,
            result: "PASS"
        },
        combined: { total: 744, percentage: 74.40, rank: 39, finalStatus: "PASS" }
    },
    // ===== RANK 40 =====
    {
        id: "SSRGSP/NET/2025/1/011",
        name: "DEEPA TIWARI",
        semester1: {
            subjects: { "NET_M1": 88, "NET_M2": 84, "NET_M3": 70, "NET_M4": 89, "PPD1": 74 },
            total: 405,
            percentage: 81.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 76, "NET_M6": 68, "NET_M7": 88, "NET_M8": 85, "PPD2": 39, "PPD3": 35 },
            total: 391,
            percentage: 78.2,
            result: "PASS"
        },
        combined: { total: 796, percentage: 79.60, rank: 40, finalStatus: "PASS" }
    },
    // ===== RANK 41 =====
    {
        id: "SSRGSP/NET/2025/1/069",
        name: "YASH RAJAK",
        semester1: {
            subjects: { "NET_M1": 82, "NET_M2": 70, "NET_M3": 83, "NET_M4": 77, "PPD1": 81 },
            total: 393,
            percentage: 78.6,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 76, "NET_M6": 74, "NET_M7": 78, "NET_M8": 75, "PPD2": 39, "PPD3": 39 },
            total: 381,
            percentage: 76.2,
            result: "PASS"
        },
        combined: { total: 774, percentage: 77.40, rank: 41, finalStatus: "PASS" }
    },
    // ===== RANK 42 =====
    {
        id: "SSRGSP/NET/2025/1/038",
        name: "PRACHI DAHARE",
        semester1: {
            subjects: { "NET_M1": 84, "NET_M2": 68, "NET_M3": 89, "NET_M4": 77, "PPD1": 68 },
            total: 386,
            percentage: 77.2,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 70, "NET_M6": 75, "NET_M7": 66, "NET_M8": 84, "PPD2": 39, "PPD3": 46 },
            total: 380,
            percentage: 76.0,
            result: "PASS"
        },
        combined: { total: 766, percentage: 76.60, rank: 42, finalStatus: "PASS" }
    },
    // ===== RANK 43 =====
    {
        id: "SSRGSP/NET/2025/1/054",
        name: "SAROJ KUMARI",
        semester1: {
            subjects: { "NET_M1": 75, "NET_M2": 76, "NET_M3": 74, "NET_M4": 69, "PPD1": 78 },
            total: 372,
            percentage: 74.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 75, "NET_M6": 72, "NET_M7": 81, "NET_M8": 80, "PPD2": 38, "PPD3": 34 },
            total: 380,
            percentage: 76.0,
            result: "PASS"
        },
        combined: { total: 752, percentage: 75.20, rank: 43, finalStatus: "PASS" }
    },
    // ===== RANK 44 =====
    {
        id: "SSRGSP/NET/2025/1/024",
        name: "JAYA OJHA",
        semester1: {
            subjects: { "NET_M1": 90, "NET_M2": 94, "NET_M3": 81, "NET_M4": 79, "PPD1": 68 },
            total: 412,
            percentage: 82.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 75, "NET_M6": 78, "NET_M7": 81, "NET_M8": 82, "PPD2": 45, "PPD3": 40 },
            total: 406,
            percentage: 81.2,
            result: "PASS"
        },
        combined: { total: 818, percentage: 81.80, rank: 44, finalStatus: "PASS" }
    },
    // ===== RANK 45 =====
    {
        id: "SSRGSP/NET/2025/1/066",
        name: "VANSHRAJ KUSHWAH",
        semester1: {
            subjects: { "NET_M1": 77, "NET_M2": 100, "NET_M3": 82, "NET_M4": 79, "PPD1": 84 },
            total: 422,
            percentage: 84.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 77, "NET_M6": 75, "NET_M7": 85, "NET_M8": 74, "PPD2": 41, "PPD3": 41 },
            total: 393,
            percentage: 78.6,
            result: "PASS"
        },
        combined: { total: 815, percentage: 81.50, rank: 45, finalStatus: "PASS" }
    },
    // ===== RANK 46 =====
    {
        id: "SSRGSP/NET/2025/1/048",
        name: "RITIK RAJPUT",
        semester1: {
            subjects: { "NET_M1": 86, "NET_M2": 74, "NET_M3": 88, "NET_M4": 81, "PPD1": 71 },
            total: 400,
            percentage: 80.0,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 77, "NET_M6": 79, "NET_M7": 92, "NET_M8": 99, "PPD2": 38, "PPD3": 42 },
            total: 422,
            percentage: 84.4,
            result: "PASS"
        },
        combined: { total: 822, percentage: 82.20, rank: 46, finalStatus: "PASS" }
    },
    // ===== RANK 47 =====
    {
        id: "SSRGSP/NET/2025/1/018",
        name: "GIRRAJ SINGH SENGAR",
        semester1: {
            subjects: { "NET_M1": 86, "NET_M2": 88, "NET_M3": 85, "NET_M4": 79, "PPD1": 64 },
            total: 402,
            percentage: 80.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 86, "NET_M6": 71, "NET_M7": 85, "NET_M8": 95, "PPD2": 42, "PPD3": 42 },
            total: 424,
            percentage: 84.8,
            result: "PASS"
        },
        combined: { total: 826, percentage: 82.60, rank: 47, finalStatus: "PASS" }
    },
    // ===== RANK 48 =====
    {
        id: "SSRGSP/NET/2025/1/033",
        name: "NANDINI MAKWANA",
        semester1: {
            subjects: { "NET_M1": 78, "NET_M2": 76, "NET_M3": 77, "NET_M4": 76, "PPD1": 72 },
            total: 379,
            percentage: 75.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 79, "NET_M6": 94, "NET_M7": 88, "NET_M8": 91, "PPD2": 44, "PPD3": 42 },
            total: 438,
            percentage: 87.6,
            result: "PASS"
        },
        combined: { total: 817, percentage: 81.70, rank: 48, finalStatus: "PASS" }
    },
    // ===== RANK 49 =====
    {
        id: "SSRGSP/NET/2025/1/034",
        name: "NIHARIKA LOUSAREY",
        semester1: {
            subjects: { "NET_M1": 78, "NET_M2": 74, "NET_M3": 80, "NET_M4": 86, "PPD1": 74 },
            total: 392,
            percentage: 78.4,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 78, "NET_M6": 74, "NET_M7": 80, "NET_M8": 86, "PPD2": 40, "PPD3": 40 },
            total: 398,
            percentage: 79.6,
            result: "PASS"
        },
        combined: { total: 790, percentage: 79.00, rank: 49, finalStatus: "PASS" }
    },
    // ===== RANK 50 =====
    {
        id: "SSRGSP/NET/2025/1/053",
        name: "KAMAL CHOUHAN (Duplicate)",
        semester1: {
            subjects: { "NET_M1": 72, "NET_M2": 58, "NET_M3": 86, "NET_M4": 82, "PPD1": 61 },
            total: 359,
            percentage: 71.8,
            result: "PASS"
        },
        semester2: {
            subjects: { "NET_M5": 72, "NET_M6": 58, "NET_M7": 86, "NET_M8": 82, "PPD2": 39, "PPD3": 37 },
            total: 374,
            percentage: 74.8,
            result: "PASS"
        },
        combined: { total: 733, percentage: 73.30, rank: 50, finalStatus: "PASS" }
    },
    // ===== RANK 51 =====
    {
        id: "SSRGSP/NET/2025/1/001",
        name: "DEMO STUDENT",
        semester1: {
            subjects: { "NET_M1": 0, "NET_M2": 0, "NET_M3": 0, "NET_M4": 0, "PPD1": 0 },
            total: 0,
            percentage: 0.0,
            result: "FAIL"
        },
        semester2: {
            subjects: { "NET_M5": 0, "NET_M6": 0, "NET_M7": 0, "NET_M8": 0, "PPD2": 0, "PPD3": 0 },
            total: 0,
            percentage: 0.0,
            result: "FAIL"
        },
        combined: { total: 0, percentage: 0.00, rank: 51, finalStatus: "FAIL" }
    }
];

// ============================================================
// DOM ELEMENTS
// ============================================================
const resultContainer = document.getElementById('resultContainer');
const toppersGrid = document.getElementById('toppersGrid');
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

// ============================================================
// THEME TOGGLE
// ============================================================
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// ============================================================
// MOBILE HAMBURGER MENU
// ============================================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================================
// RESULT SECTION SEARCH
// ============================================================
const resultSearchInput = document.getElementById('resultSearchInput');
const resultSearchBtn = document.getElementById('resultSearchBtn');
const resultSuggestions = document.getElementById('resultSuggestions');

let resultSearchTimeout;

resultSearchInput.addEventListener('input', function() {
    clearTimeout(resultSearchTimeout);
    const query = this.value.trim().toLowerCase();
    
    if (query.length === 0) {
        resultSuggestions.classList.remove('active');
        showResultPlaceholder('Search for a Student', 'Enter name or enrollment number to view results');
        return;
    }
    
    resultSearchTimeout = setTimeout(() => {
        const results = studentData.filter(student => 
            student.name.toLowerCase().includes(query) ||
            student.id.toLowerCase().includes(query)
        );
        
        showResultSuggestions(results, query);
    }, 200);
});

resultSearchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const query = this.value.trim().toLowerCase();
        if (query) {
            performResultSearch(query);
            resultSuggestions.classList.remove('active');
        }
    }
});

resultSearchBtn.addEventListener('click', function() {
    const query = resultSearchInput.value.trim().toLowerCase();
    if (query) {
        performResultSearch(query);
        resultSuggestions.classList.remove('active');
    }
});

function showResultSuggestions(results, query) {
    if (results.length === 0) {
        resultSuggestions.classList.remove('active');
        showResultPlaceholder('No Student Found', 'Please check the name or enrollment number');
        return;
    }
    
    resultSuggestions.innerHTML = results.slice(0, 8).map(student => `
        <div class="suggestion-item" data-id="${student.id}">
            <div>
                <div class="s-name">${highlightMatch(student.name, query)}</div>
                <div class="s-id">${student.id}</div>
            </div>
            <span class="s-percentage">${student.combined.percentage}%</span>
        </div>
    `).join('');
    
    resultSuggestions.classList.add('active');
    
    document.querySelectorAll('.result-search-suggestions .suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.dataset.id;
            resultSearchInput.value = id;
            performResultSearch(id);
            resultSuggestions.classList.remove('active');
        });
    });
}

function performResultSearch(query) {
    const results = studentData.filter(student => 
        student.name.toLowerCase().includes(query) ||
        student.id.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        showResultPlaceholder('No Student Found', 'Please check the name or enrollment number and try again');
        return;
    }
    
    if (results.length === 1) {
        displayResult(results[0]);
    } else {
        displayMultipleResults(results);
    }
}

function showResultPlaceholder(title, message) {
    resultContainer.innerHTML = `
        <div class="result-placeholder">
            <i class="fas fa-search fa-3x"></i>
            <h3>${title}</h3>
            <p>${message}</p>
        </div>
    `;
}

function highlightMatch(text, query) {
    const index = text.toLowerCase().indexOf(query);
    if (index === -1) return text;
    return text.slice(0, index) + 
           '<strong style="color: var(--accent-color);">' + 
           text.slice(index, index + query.length) + 
           '</strong>' + 
           text.slice(index + query.length);
}

function displayMultipleResults(results) {
    resultContainer.innerHTML = results.map(student => createResultCard(student)).join('');
}

// ============================================================
// RESULT CARD GENERATOR - MARKSHEET + QR CODE
// ============================================================
function displayResult(student) {
    resultContainer.innerHTML = createResultCard(student);
    
    // Generate QR Code after card is rendered
    setTimeout(function() {
        generateQRCode(student.id);
    }, 100);
}

function createResultCard(student) {
    const rankClass = student.combined.rank <= 3 ? `rank-${student.combined.rank}` : 'rank-other';
    const statusClass = student.combined.finalStatus.includes('PASS') ? 'status-pass' : 'status-fail';
    
    return `
        <div class="result-card marksheet-card fade-in">
            <!-- PRINT ELEMENTS -->
            <div class="print-watermark-logo"></div>
            <div class="print-shadow-blue"></div>
            <div class="print-shadow-orange"></div>
            
            <!-- HEADER -->
            <div class="marksheet-header">
                <div class="marksheet-institute">
                    <h2>SANT SHIROMANI RAVIDAS GLOBAL SKILLS PARK</h2>
                    <p>Bhopal, Madhya Pradesh</p>
                </div>
                <div class="marksheet-title">
                    <h3>Student Marksheet</h3>
                    <span class="marksheet-status ${statusClass}">
                        <i class="fas ${student.combined.finalStatus.includes('PASS') ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                        ${student.combined.finalStatus}
                    </span>
                </div>
            </div>

            <!-- STUDENT INFO - Single Line (Name Left | Enrollment Right) -->
            <div class="marksheet-student-info">
                <div class="student-detail">
                    <span class="label">Student Name</span>
                    <span class="value">${student.name}</span>
                </div>
                <div class="student-detail">
                    <span class="label">Enrollment No.</span>
                    <span class="value">${student.id}</span>
                </div>
                <div class="student-detail">
                    <span class="label">Rank</span>
                    <span class="value rank-badge ${rankClass}">
                        <i class="fas fa-trophy"></i> #${student.combined.rank}
                    </span>
                </div>
            </div>

            <!-- ACADEMIC RECORDS -->
            <div class="marksheet-academic">
                <!-- Semester 1 -->
                <div class="marksheet-semester">
                    <div class="semester-header">
                        <h4>Term - I</h4>
                        <span class="semester-status">Status: Regular</span>
                    </div>
                    <table class="marksheet-table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Paper Name</th>
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(student.semester1.subjects).map(([key, value]) => `
                                <tr>
                                    <td>${key}</td>
                                    <td>${getSubjectName(key)}</td>
                                    <td><strong>${value}</strong></td>
                                </tr>
                            `).join('')}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"><strong>Total</strong></td>
                                <td><strong>${student.semester1.total}</strong></td>
                            </tr>
                            <tr>
                                <td colspan="2"><strong>Result</strong></td>
                                <td><span class="status-pass">${student.semester1.result}</span></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <!-- Semester 2 -->
                <div class="marksheet-semester">
                    <div class="semester-header">
                        <h4>Term - II</h4>
                        <span class="semester-status">Status: Regular</span>
                    </div>
                    <table class="marksheet-table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Paper Name</th>
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(student.semester2.subjects).map(([key, value]) => `
                                <tr>
                                    <td>${key}</td>
                                    <td>${getSubjectName(key)}</td>
                                    <td><strong>${value}</strong></td>
                                </tr>
                            `).join('')}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"><strong>Total</strong></td>
                                <td><strong>${student.semester2.total}</strong></td>
                            </tr>
                            <tr>
                                <td colspan="2"><strong>Result</strong></td>
                                <td><span class="status-pass">${student.semester2.result}</span></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <!-- GRAND TOTAL - Single Line (Total Left | Percentage Right) -->
            <div class="marksheet-grand-total">
                <div class="grand-total-left">
                    <span class="grand-label">Grand Total</span>
                    <span class="grand-value">${student.combined.total}</span>
                </div>
                <div class="grand-total-right">
                    <span class="grand-label">Percentage</span>
                    <span class="grand-percentage">${student.combined.percentage}%</span>
                </div>
            </div>

            <!-- FOOTER - QR Code in Center -->
            <div class="marksheet-footer">
                <div class="footer-left">
                    <div class="sign-line">
                        <span>Controller of Examinations</span>
                        <span>SSRGSP, Bhopal</span>
                    </div>
                </div>
                <div class="footer-center">
                    <div class="footer-qr">
                        <div id="qrCodeContainer"></div>
                        <span class="qr-label">Scan to verify</span>
                    </div>
                </div>
                <div class="footer-right">
                    <div class="footer-date">
                        <span>${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    </div>
                </div>
            </div>

            <!-- ACTION BUTTONS (Hidden in Print) -->
            <div class="marksheet-actions">
                <button onclick="printResult()" class="action-btn print-btn" title="Print Marksheet">
                    <i class="fas fa-print"></i> Print
                </button>
                <button onclick="downloadPDF()" class="action-btn pdf-btn" title="Download PDF">
                    <i class="fas fa-file-pdf"></i> PDF
                </button>
                
            </div>
        </div>
    `;
}

// ============================================================
// QR CODE GENERATOR - LIVE WEBSITE (FIXED)
// ============================================================
function generateQRCode(studentId) {
    const container = document.getElementById('qrCodeContainer');
    if (!container) return;
    
    // Clear previous QR
    container.innerHTML = '';
    
    // === LIVE WEBSITE URL ===
    const baseUrl = 'https://iyaramahirwar.github.io/ICTRESULT2026/index.html';
    const qrUrl = baseUrl + '?id=' + encodeURIComponent(studentId);
    
    console.log('✅ QR URL:', qrUrl);
    
    // Generate QR Code
    try {
        new QRCode(container, {
            text: qrUrl,
            width: 80,
            height: 80,
            colorDark: "#1a1a2e",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch (e) {
        container.innerHTML = `<span style="font-size: 0.6rem; color: #999;">QR</span>`;
        console.error('QR Error:', e);
    }
}

// ============================================================
// AUTO-LOAD MARKSHEET FROM URL PARAMETER
// ============================================================
function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const studentId = params.get('id');
    
    if (studentId) {
        const student = studentData.find(s => 
            s.id === studentId || 
            s.id.includes(studentId) ||
            studentId.includes(s.id)
        );
        
        if (student) {
            // Show result
            displayResult(student);
            
            // Update search input
            const searchInput = document.getElementById('resultSearchInput');
            if (searchInput) {
                searchInput.value = student.id;
            }
            
            // Scroll to results
            setTimeout(function() {
                document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
            }, 500);
            
            return true;
        }
    }
    return false;
}

// ============================================================
// SUBJECT NAME HELPER
// ============================================================
function getSubjectName(code) {
    const names = {
        'NET_M1': 'IT Essentials & PC Support',
        'NET_M2': 'Network Essentials',
        'NET_M3': 'Internetworking Technology',
        'NET_M4': 'Server Essentials',
        'NET_M5': 'Internet Applications',
        'NET_M6': 'Software Applications',
        'NET_M7': 'Infocomm Project',
        'NET_M8': 'Virtualization Technology',
        'PPD1': 'Personal and Professional Development-1',
        'PPD2': 'Personal & Professional Development-2',
        'PPD3': 'Speaking with Confidence'
    };
    return names[code] || code;
}

// ============================================================
// TOPPERS SECTION
// ============================================================
function displayToppers() {
    const sorted = [...studentData].sort((a, b) => b.combined.percentage - a.combined.percentage);
    const toppers = sorted.slice(0, 10);
    
    const rankEmojis = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    const rankClasses = ['gold', 'silver', 'bronze', '', '', '', '', '', '', ''];
    
    toppersGrid.innerHTML = toppers.map((student, index) => {
        const rank = index + 1;
        const isTop3 = rank <= 3;
        
        return `
            <div class="topper-card ${rankClasses[index]} fade-in" onclick="performResultSearch('${student.id}')" style="cursor: pointer;">
                <div class="rank-badge">#${rank}</div>
                <div class="rank-icon">${rankEmojis[index]}</div>
                <h4>${student.name}</h4>
                <div class="topper-enroll">${student.id}</div>
                <div class="topper-percentage">${student.combined.percentage}%</div>
                <div class="topper-detail">
                    <span style="color: var(--text-muted);">Total: ${student.combined.total}</span>
                    ${isTop3 ? ` | <span style="color: var(--accent-color);">🏆 Top ${rank}</span>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// ============================================================
// STATISTICS
// ============================================================
function updateStatistics() {
    const total = studentData.length;
    const passed = studentData.filter(s => s.combined.finalStatus.includes('PASS')).length;
    const failed = total - passed;
    const percentages = studentData.map(s => s.combined.percentage);
    const avg = (percentages.reduce((a, b) => a + b, 0) / total);
    const highest = Math.max(...percentages);
    const lowest = Math.min(...percentages);
    
    document.getElementById('totalStudents').textContent = total;
    document.getElementById('passCount').textContent = passed;
    document.getElementById('failCount').textContent = failed;
    document.getElementById('avgPercentage').textContent = avg.toFixed(1) + '%';
    
    document.getElementById('statTotal').textContent = total;
    document.getElementById('statPass').textContent = passed;
    document.getElementById('statFail').textContent = failed;
    document.getElementById('statAvg').textContent = avg.toFixed(1) + '%';
    document.getElementById('statHighest').textContent = highest.toFixed(1) + '%';
    document.getElementById('statLowest').textContent = lowest.toFixed(1) + '%';
}

// ============================================================
// NAVIGATION ACTIVE LINK
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', (e) => {
    // Ctrl + K to focus result search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        resultSearchInput.focus();
        resultSearchInput.select();
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        resultSearchInput.value = '';
        resultSearchInput.blur();
        resultSuggestions.classList.remove('active');
    }
});

// ============================================================
// INITIALIZE
// ============================================================
function init() {
    // Check if student ID in URL
    const loaded = loadFromURL();
    
    if (!loaded) {
        displayToppers();
        updateStatistics();
    }
}

document.addEventListener('DOMContentLoaded', init);
// ============================================================
// CONSOLE HELP
// ============================================================
console.log('%c🎓 SSR-GSP Result Portal Loaded!', 'font-size: 20px; font-weight: bold; color: #6c63ff;');
console.log(`%c📊 Total Students: ${studentData.length}`, 'font-size: 14px; color: #4a4a6a;');
console.log('%c🔍 Search: Type name or enrollment number in Result Section', 'font-size: 12px; color: #888;');
console.log('%c⌨️ Shortcut: Ctrl+K to focus search', 'font-size: 12px; color: #888;');

// ============================================================
// QR SCANNER - DIRECT URL REDIRECT
// ============================================================

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scannerLine = document.getElementById('scannerLine');
const scannerOverlay = document.querySelector('.scanner-overlay');
const scannerPlaceholder = document.getElementById('scannerPlaceholder');
const scannerStatus = document.getElementById('scannerStatus');
const startBtn = document.getElementById('startScanner');
const stopBtn = document.getElementById('stopScanner');
const uploadBtn = document.getElementById('uploadQR');
const qrImageInput = document.getElementById('qrImageInput');

let scanning = false;
let stream = null;
let animationId = null;

function updateStatus(message, type = 'info') {
    const icons = {
        info: 'fa-info-circle',
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        loading: 'fa-spinner'
    };
    
    const classes = {
        info: 'status-info',
        success: 'status-success',
        error: 'status-error',
        loading: 'status-loading'
    };
    
    scannerStatus.innerHTML = `
        <div class="${classes[type]}">
            <i class="fas ${icons[type]} ${type === 'loading' ? 'fa-spin' : ''}"></i>
            <span>${message}</span>
        </div>
    `;
}

startBtn.addEventListener('click', async () => {
    try {
        updateStatus('Requesting camera access...', 'loading');
        
        stream = await navigator.mediaDevices.getUserMedia({
            video: { 
                facingMode: 'environment',
                width: { ideal: 640 },
                height: { ideal: 480 }
            }
        });
        
        video.srcObject = stream;
        video.classList.add('active');
        scannerLine.classList.add('active');
        scannerOverlay.classList.add('active');
        scannerPlaceholder.classList.add('hidden');
        
        scanning = true;
        startBtn.disabled = true;
        startBtn.style.display = 'none';
        stopBtn.style.display = 'flex';
        
        updateStatus('Scanning QR Code... Hold certificate steady', 'loading');
        
        scanQRCode();
        
    } catch (error) {
        console.error('Camera error:', error);
        updateStatus(
            'Camera access denied. Please allow camera permissions or upload QR image.', 
            'error'
        );
        startBtn.disabled = false;
    }
});

function scanQRCode() {
    if (!scanning) return;
    
    try {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth || 640;
            canvas.height = video.videoHeight || 480;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: "dontInvert",
            });
            
            if (code && code.data) {
                handleQRCodeData(code.data);
                stopScanner();
                return;
            }
        }
    } catch (e) {}
    
    animationId = requestAnimationFrame(scanQRCode);
}

function handleQRCodeData(data) {
    console.log('QR Code Data:', data);
    updateStatus('QR Code detected! Processing...', 'loading');
    
    const urlPattern = /^https?:\/\/[^\s]+/;
    const match = data.match(urlPattern);
    
    if (match) {
        const redirectUrl = match[0];
        console.log('Redirecting to:', redirectUrl);
        
        scannerStatus.innerHTML = `
            <div class="status-success">
                <i class="fas fa-check-circle"></i>
                <span>✅ URL Found: <strong style="word-break: break-all;">${redirectUrl.substring(0, 60)}${redirectUrl.length > 60 ? '...' : ''}</strong></span>
            </div>
            <div style="margin-top: 8px; color: var(--text-secondary); font-size: 0.9rem;">
                <i class="fas fa-external-link-alt"></i> 
                Redirecting to marksheet...
            </div>
        `;
        
        setTimeout(() => {
            window.open(redirectUrl, '_blank');
            updateStatus('✅ Marksheet opened in new tab.', 'success');
        }, 1000);
        
    } else {
        updateStatus('❌ Invalid QR Code. Please scan a valid certificate QR code.', 'error');
        
        scannerStatus.innerHTML += `
            <div style="margin-top: 12px; padding: 12px; background: var(--bg-secondary); border-radius: 8px; font-size: 0.8rem; word-break: break-all; color: var(--text-muted);">
                <strong>Raw Data:</strong> ${data.substring(0, 150)}${data.length > 150 ? '...' : ''}
            </div>
        `;
    }
}

function stopScanner() {
    scanning = false;
    
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
    
    video.classList.remove('active');
    scannerLine.classList.remove('active');
    scannerOverlay.classList.remove('active');
    scannerPlaceholder.classList.remove('hidden');
    video.srcObject = null;
    
    startBtn.disabled = false;
    startBtn.style.display = 'flex';
    stopBtn.style.display = 'none';
    
    updateStatus('Scanner stopped. Ready to scan again.', 'info');
}

stopBtn.addEventListener('click', stopScanner);

uploadBtn.addEventListener('click', () => {
    qrImageInput.click();
});

qrImageInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    updateStatus('Reading image...', 'loading');
    
    try {
        const image = new Image();
        const reader = new FileReader();
        
        reader.onload = async (event) => {
            image.src = event.target.result;
            await image.decode();
            
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: "dontInvert",
            });
            
            if (code && code.data) {
                updateStatus('QR Code found in image!', 'success');
                handleQRCodeData(code.data);
            } else {
                updateStatus('No QR code found in image. Please upload a clear QR code image.', 'error');
            }
        };
        
        reader.readAsDataURL(file);
        
    } catch (error) {
        console.error('Error reading image:', error);
        updateStatus('Error reading image. Please try again.', 'error');
    }
    
    qrImageInput.value = '';
});

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'q') {
        e.preventDefault();
        if (!scanning) {
            startBtn.click();
        } else {
            stopBtn.click();
        }
    }
});

console.log('%c📷 QR Scanner Ready!', 'font-size: 16px; font-weight: bold; color: #4285f4;');
console.log('%c📌 QR Code will redirect to the URL found in the QR', 'font-size: 12px; color: #888;');
console.log('%c⌨️ Shortcut: Ctrl+Q to start/stop scanner', 'font-size: 12px; color: #888;');


// ============================================================
// FEATURE 2: BACK TO TOP BUTTON
// ============================================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// FEATURE 3: LIVE CLOCK
// ============================================================
function updateClock() {
    const clock = document.getElementById('liveClock');
    if (clock) {
        const now = new Date();
        const time = now.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        clock.textContent = '🕐 ' + time;
    }
}

setInterval(updateClock, 1000);
updateClock();

// ============================================================
// FEATURE: PRINT RESULT - FIXED
// ============================================================
function printResult() {
    // Check if marksheet exists
    const marksheet = document.querySelector('.marksheet-card');
    if (!marksheet) {
        alert('⚠️ Please search for a student first to print marksheet!');
        return;
    }
    
    // Small delay to ensure everything is rendered
    setTimeout(function() {
        window.print();
    }, 300);
}

// ============================================================
// FEATURE 5: DOWNLOAD PDF (using window.print save as PDF)
// ============================================================
function downloadPDF() {
    // This uses browser's print to PDF functionality
    window.print();
    // User can select "Save as PDF" in print dialog
}

// ============================================================
// FEATURE 6: COUNT ANIMATION
// ============================================================
function animateCount(element, target, duration = 1500) {
    if (!element) return;
    
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// ============================================================
// FEATURE 10: SHARE RESULT - FIXED
// ============================================================
function shareResult() {
    // Check if result is displayed
    const studentName = document.querySelector('.result-student-info h3');
    const enrollment = document.querySelector('.result-student-info .enrollment');
    const percentage = document.querySelector('.result-combined .total-value');
    
    if (!studentName || !enrollment || !percentage) {
        // Show friendly message
        alert('⚠️ Please search for a student first to share their result!');
        return;
    }
    
    // Extract data
    const name = studentName.textContent || 'Student';
    const enrollText = enrollment.textContent.replace('📋 ', '').trim();
    const percentText = percentage.textContent || 'N/A';
    
    const shareText = `🎓 SSR-GSP Result\n\n👤 Student: ${name}\n📋 Enrollment: ${enrollText}\n📊 Percentage: ${percentText}\n\n🔗 Check your result at SSR-GSP Result Portal`;
    
    // Try native share first (mobile)
    if (navigator.share) {
        navigator.share({
            title: 'SSR-GSP Result',
            text: shareText,
            url: window.location.href
        }).catch(function(err) {
            // User cancelled or error
            console.log('Share cancelled:', err);
        });
        return;
    }
    
    // Fallback: Copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareText).then(function() {
            showToast('✅ Result copied to clipboard! Share it anywhere.');
        }).catch(function() {
            fallbackCopy(shareText);
        });
    } else {
        fallbackCopy(shareText);
    }
}

// ============================================================
// FALLBACK COPY METHOD
// ============================================================
function fallbackCopy(text) {
    // Create temporary input
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    
    try {
        textarea.select();
        document.execCommand('copy');
        showToast('✅ Result copied to clipboard! Share it anywhere.');
    } catch (err) {
        // Final fallback - show in prompt
        prompt('Copy this text to share:', text);
    }
    
    document.body.removeChild(textarea);
}

// ============================================================
// TOAST NOTIFICATION - For Share/Other Messages
// ============================================================
function showToast(message) {
    // Check if toast already exists
    let toast = document.getElementById('toastNotification');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotification';
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--bg-glass);
            backdrop-filter: var(--glass-blur);
            -webkit-backdrop-filter: var(--glass-blur);
            padding: 14px 28px;
            border-radius: 12px;
            border: 1px solid var(--bg-glass-border);
            box-shadow: var(--card-hover-shadow);
            color: var(--text-primary);
            font-size: 0.95rem;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.4s ease, transform 0.4s ease;
            transform: translateX(-50%) translateY(20px);
            pointer-events: none;
            max-width: 90%;
            text-align: center;
        `;
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.pointerEvents = 'none';
    
    // Hide after 3 seconds
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 3000);
}