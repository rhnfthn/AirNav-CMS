const DATABASE_URL_ENV_KEYS = [
  'DATABASE_URL',
  'STORAGE_POSTGRES_PRISMA_URL',
  'STORAGE_DATABASE_URL',
  'STORAGE_POSTGRES_URL',
  'STORAGE_DATABASE_URL_UNPOOLED',
  'STORAGE_POSTGRES_URL_NON_POOLING',
] as const;

function isPlaceholderDatabaseUrl(value: string) {
  return /:\/\/(USER|USERNAME):/i.test(value) || /@(HOST|DB_HOST)(:|\/|\?)/i.test(value);
}

function isLocalDatabaseUrl(value: string) {
  return /localhost|127\.0\.0\.1/i.test(value);
}

function getDatabaseUrlCandidates() {
  return DATABASE_URL_ENV_KEYS.map((key) => {
    const value = process.env[key]?.trim();
    return value ? { key, value } : null;
  }).filter((entry): entry is { key: (typeof DATABASE_URL_ENV_KEYS)[number]; value: string } => Boolean(entry));
}

export function getDatabaseUrl() {
  const candidates = getDatabaseUrlCandidates();
  const isProduction = process.env.NODE_ENV === 'production';

  for (const candidate of candidates) {
    if (isPlaceholderDatabaseUrl(candidate.value)) {
      continue;
    }

    if (isProduction && isLocalDatabaseUrl(candidate.value)) {
      continue;
    }

    return candidate.value;
  }

  throw new Error(
    `DATABASE_URL is missing or invalid. Set one of: ${DATABASE_URL_ENV_KEYS.join(', ')}`,
  );
}