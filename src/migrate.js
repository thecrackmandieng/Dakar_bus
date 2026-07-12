import 'dotenv/config';
import { readFile } from 'node:fs/promises';
import { pool } from './db.js';

const migrationPath = new URL('./migrations/001_modules_gps.sql', import.meta.url);

try {
  await pool.query(await readFile(migrationPath, 'utf8'));
  console.log('Migration modules_gps appliquée.');
} finally {
  await pool.end();
}
