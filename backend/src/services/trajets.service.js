import { pool, query } from '../db.js';

const tableName = "trajets";
const columns = [
  {
    "name": "id_trajet",
    "propertyName": "idTrajet"
  },
  {
    "name": "id_bus",
    "propertyName": "idBus"
  },
  {
    "name": "id_ligne",
    "propertyName": "idLigne"
  },
  {
    "name": "date_depart",
    "propertyName": "dateDepart"
  },
  {
    "name": "date_arrivee",
    "propertyName": "dateArrivee"
  },
  {
    "name": "statut_trajet",
    "propertyName": "statutTrajet"
  },
  {
    "name": "created_at",
    "propertyName": "createdAt"
  }
];
const editableColumns = [
  {
    "name": "id_bus",
    "propertyName": "idBus"
  },
  {
    "name": "id_ligne",
    "propertyName": "idLigne"
  },
  {
    "name": "date_depart",
    "propertyName": "dateDepart"
  },
  {
    "name": "date_arrivee",
    "propertyName": "dateArrivee"
  },
  {
    "name": "statut_trajet",
    "propertyName": "statutTrajet"
  },
  {
    "name": "created_at",
    "propertyName": "createdAt"
  }
];
const primaryKey = "id_trajet";
const primaryKeyProperty = "idTrajet";

function q(identifier) {
  return '"' + identifier.replaceAll('"', '""') + '"';
}

function pickPayload(payload) {
  const data = {};
  for (const column of editableColumns) {
    if (Object.prototype.hasOwnProperty.call(payload, column.propertyName)) {
      data[column.name] = payload[column.propertyName];
    }
  }
  return data;
}

function selectColumns() {
  return columns.map((column) => `${q(column.name)} AS ${q(column.propertyName)}`).join(', ');
}

export async function findAll() {
  return query(`SELECT ${selectColumns()} FROM ${q(tableName)} ORDER BY ${q(primaryKey)} DESC`);
}

export async function findById(id) {
  const rows = await query(`SELECT ${selectColumns()} FROM ${q(tableName)} WHERE ${q(primaryKey)} = $1 LIMIT 1`, [id]);
  return rows[0] || null;
}

export async function create(payload) {
  const data = pickPayload(payload);
  const keys = Object.keys(data);
  if (!keys.length) {
    throw new Error('Aucune donnee a enregistrer.');
  }
  const placeholders = keys.map((_, index) => `$${index + 1}`).join(', ');
  const sql = `INSERT INTO ${q(tableName)} (${keys.map(q).join(', ')}) VALUES (${placeholders}) RETURNING ${selectColumns()}`;
  const rows = await query(sql, keys.map((key) => data[key]));
  return rows[0];
}

export async function update(id, payload) {
  const data = pickPayload(payload);
  const keys = Object.keys(data);
  if (!keys.length) {
    return findById(id);
  }
  const assignments = keys.map((key, index) => `${q(key)} = $${index + 1}`).join(', ');
  const sql = `UPDATE ${q(tableName)} SET ${assignments} WHERE ${q(primaryKey)} = $${keys.length + 1} RETURNING ${selectColumns()}`;
  const rows = await query(sql, [...keys.map((key) => data[key]), id]);
  return rows[0] || null;
}

export async function remove(id) {
  await query(`DELETE FROM ${q(tableName)} WHERE ${q(primaryKey)} = $1`, [id]);
  return { deleted: true };
}

export async function findActiveAssignments() {
  return query(
    `SELECT t.id_trajet AS "idTrajet", t.id_bus AS "idBus", b.numero_bus AS "numeroBus",
            b.immatriculation, t.id_ligne AS "idLigne", l.numero_ligne AS "numeroLigne",
            l.nom_ligne AS "nomLigne", t.date_depart AS "dateDepart", t.statut_trajet AS "statutTrajet"
     FROM trajets t
     JOIN bus b ON b.id_bus = t.id_bus
     JOIN lignes l ON l.id_ligne = t.id_ligne
     WHERE LOWER(COALESCE(t.statut_trajet, '')) IN ('en cours', 'actif', 'en route')
     ORDER BY b.numero_bus`
  );
}

export async function assignBusToLine(idBus, idLigne) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query(
      `UPDATE trajets SET statut_trajet = 'Terminé', date_arrivee = COALESCE(date_arrivee, CURRENT_TIMESTAMP)
       WHERE id_bus = $1 AND LOWER(COALESCE(statut_trajet, '')) IN ('en cours', 'actif', 'en route')`,
      [idBus]
    );
    const result = await client.query(
      `INSERT INTO trajets (id_bus, id_ligne, date_depart, statut_trajet)
       VALUES ($1, $2, CURRENT_TIMESTAMP, 'En cours')
       RETURNING id_trajet AS "idTrajet", id_bus AS "idBus", id_ligne AS "idLigne",
                 date_depart AS "dateDepart", statut_trajet AS "statutTrajet"`,
      [idBus, idLigne]
    );
    await client.query('COMMIT');
    return result.rows[0];
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}
