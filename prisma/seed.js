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
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
