const prisma = require("../src/helpers/prisma");
const bcrypt = require("bcrypt");

async function main() {
  // Buat default admin user
  const password = await bcrypt.hash("admin", 10);
  await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password,
      role: "ADMIN",
    },
  });
  console.log("✅ Default admin created");

  await prisma.setting.upsert({
    where: {
      isActive: true,
    },
    update: {},
    create: {
      isActive: true,
    },
  });
  console.log("✅ Default setting created");

  // Buat 20 room R01–R20
  const rooms = [];
  for (let i = 1; i <= 20; i++) {
    rooms.push({
      name: `R${String(i).padStart(2, "0")}`, // R01, R02, dst
      capacity: 4 + (i % 3), // variasi kapasitas
      hourlyRate: 100000, // default Rp100.000/jam
      status: "AVAILABLE",
    });
  }

  await prisma.room.createMany({
    data: rooms,
    skipDuplicates: true, // aman kalau seed dijalankan ulang
  });
  console.log("✅ 20 Rooms created");

  const fnbData = [
    { name: "Nasi Goreng", category: "FOOD", price: 25000 },
    { name: "Mie Goreng", category: "FOOD", price: 22000 },
    {
      name: "Kentang Goreng",
      category: "SNACK",
      price: 18000,
    },
    { name: "Chicken Wings", category: "FOOD", price: 30000 },
    { name: "Es Teh", category: "DRINK", price: 8000 },
    { name: "Coca Cola", category: "DRINK", price: 12000 },
    { name: "Air Mineral", category: "DRINK", price: 7000 },
    { name: "Kacang", category: "SNACK", price: 10000 },
  ];

  await prisma.fnb.createMany({
    data: fnbData,
    skipDuplicates: true,
  });

  console.log("✅ Ferst fnb data created");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
