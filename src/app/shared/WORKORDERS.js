export const WORKORDERS = [
  {
    id: 0,
    workOrderName: "Boiler Check",
    workType: "Preventive",
    siteId: 0,
    workOrderStatus: "New",
    priority: "Medium",
    description: "Preventive maintenance on boiler",
    materialCost: 0,
    laborCost: 25,
    totalCost: 25,
    workDate: "2022-11-25T16:30Z",
    contactName: "Han Solo",
    contactEmail: "milleniumfalcon@gmail.com",
    contactPhone: "123-321-1234",
  },
  {
    id: 1,
    workOrderName: "Clogged Sink",
    workType: "Repair",
    siteId: 1,
    workOrderStatus: "In Progress",
    priority: "Urgent",
    description: "Sink clogged - waste backing up",
    materialCost: 100,
    laborCost: 150,
    totalCost: 250,
    workDate: "2022-08-19T16:30Z",
    contactName: "Rick Deckard",
    contactEmail: "brunner@yahoo.com",
    contactPhone: "123-321-1234",
  },
  {
    id: 2,
    workOrderName: "Machine Wellness",
    workType: "Preventive",
    siteId: 2,
    workOrderStatus: "Complete",
    priority: "Low",
    description: "Lubricate rotating parts on the machine",
    materialCost: 0,
    laborCost: 100,
    totalCost: 100,
    workDate: "2022-05-20T16:30Z",
    contactName: "Bruce Wayne",
    contactEmail: "darkknight@aol.com",
    contactPhone: "123-321-1234",
  },
];

// TYPES ----
// Preventive
// Repair
//

// STATUS ----
// New
// In Progress
// On Hold
// Complete

// PRIORITY ----
// Urgent
// High
// Medium
// Low
