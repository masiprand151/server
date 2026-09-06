const prisma = require("./prisma");

async function calculateTransaction(transactionId, includeTaxService = true) {
  const trx = await prisma.transaction.findUnique({
    where: { id: transactionId },
    include: {
      fnbOrder: { include: { item: true } },
      companionOrder: { include: { companion: true } },
    },
  });

  // Room billing
  let roomTotal = trx.roomTotal - trx.roomDiscount;

  // FNB billing
  let fnbTotal = trx.fnbOrder.reduce((sum, order) => {
    return sum + order.item.qty * order.item.price;
  }, 0);

  // Companion billing
  let companionTotal = trx.companionOrder.reduce((sum, order) => {
    return sum + (order.durationMinute / 60) * order.companion.hourlyRate;
  }, 0);

  // Subtotal
  let subTotal = roomTotal + fnbTotal + companionTotal;

  // Tax & service (opsional, hanya untuk room + fnb)
  let tax = 0;
  let service = 0;

  if (includeTaxService) {
    const setting = await prisma.setting.findFirst({
      where: { isActive: true },
    });
    if (setting) {
      const taxableBase = roomTotal + fnbTotal; // companion tidak kena pajak/service
      tax = (taxableBase * Number(setting.taxPercent)) / 100;
      service = (taxableBase * Number(setting.servicePercent)) / 100;
    }
  }

  // Grand total
  let grandTotal = subTotal + tax + service;

  // Update transaction
  return prisma.transaction.update({
    where: { id: transactionId },
    data: {
      roomTotal,
      fnbTotal,
      companionTotal,
      subTotal,
      tax,
      service,
      grandTotal,
    },
  });
}

module.exports = { calculateTransaction };
