require('dotenv/config');

const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is missing. Set it in backend/.env');
  }

  const pool = new Pool({ connectionString: databaseUrl });
  const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

  try {
    const passwordHash = await bcrypt.hash('admin123', 10);

    const admin = await prisma.admin.upsert({
      where: { email: 'admin@portfolio.com' },
      update: {
        name: 'Admin',
        password: passwordHash,
      },
      create: {
        name: 'Admin',
        email: 'admin@portfolio.com',
        password: passwordHash,
      },
      select: { id: true, email: true, name: true },
    });

    console.log('OK: admin ready');
    console.log(admin);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main().catch((e) => {
  console.error('ERR:', e);
  process.exitCode = 1;
});
