require('dotenv/config');

const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is missing. Set it in backend/.env');
  }

  const pool = new Pool({ connectionString: databaseUrl });
  const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

  try {
    const result = await prisma.themeSettings.deleteMany();
    console.log('Theme settings reset successfully:', result);
  } catch (error) {
    console.error('Error resetting theme:', error.message);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
