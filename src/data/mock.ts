import type { BloodGroup } from "./districts";

export type Role = "superadmin" | "admin" | "manager" | "user";

export type Donor = {
  id: string;
  firstName: string;
  lastName: string;
  bloodGroup: BloodGroup;
  gender: "Male" | "Female" | "Other";
  birthdate: string;
  phone: string;
  email: string;
  district: string;
  area: string;
  lastDonationDate: string;
  availability: "Available" | "Not Available";
  flowCount: number;
  hidePhone: boolean;
};

export const notices = [
  "Urgent O- blood needed at Dhaka Medical College today.",
  "Donate every 3 months and save more lives.",
  "Superadmin/Admin/Manager can publish verified notices."
];

export const donors: Donor[] = [
  {
    id: "d1",
    firstName: "Rahim",
    lastName: "Hasan",
    bloodGroup: "O+",
    gender: "Male",
    birthdate: "1996-08-12",
    phone: "+8801712345678",
    email: "rahim@example.com",
    district: "Dhaka",
    area: "Mirpur DOHS",
    lastDonationDate: "2024-11-13",
    availability: "Available",
    flowCount: 132,
    hidePhone: false
  },
  {
    id: "d2",
    firstName: "Nusrat",
    lastName: "Jahan",
    bloodGroup: "A-",
    gender: "Female",
    birthdate: "1998-03-18",
    phone: "+8801812345678",
    email: "nusrat@example.com",
    district: "Cumilla",
    area: "Kotbari",
    lastDonationDate: "2025-01-08",
    availability: "Not Available",
    flowCount: 88,
    hidePhone: true
  },
  {
    id: "d3",
    firstName: "Mahin",
    lastName: "Kabir",
    bloodGroup: "AB+",
    gender: "Male",
    birthdate: "1994-12-22",
    phone: "+8801912345678",
    email: "mahin@example.com",
    district: "Sylhet",
    area: "Zindabazar",
    lastDonationDate: "2024-10-01",
    availability: "Available",
    flowCount: 61,
    hidePhone: false
  }
];
