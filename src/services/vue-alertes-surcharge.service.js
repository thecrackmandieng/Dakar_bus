import { query } from '../db.js';

const tableName = "vue_alertes_surcharge";
const columns = [
  {
    "name": "id_alerte",
    "propertyName": "idAlerte"
  },
  {
    "name": "numero_bus",
    "propertyName": "numeroBus"
  },
  {
    "name": "immatriculation",
    "propertyName": "immatriculation"
  },
  {
    "name": "nom_type",
    "propertyName": "nomType"
  },
  {
    "name": "nom_statut",
    "propertyName": "nomStatut"
  },
  {
    "name": "message",
    "propertyName": "message"
  },
  {
    "name": "niveau",
    "propertyName": "niveau"
  },
  {
    "name": "nombre_passagers",
    "propertyName": "nombrePassagers"
  },
  {
    "name": "capacite_max",
    "propertyName": "capaciteMax"
  },
  {
    "name": "date_alerte",
    "propertyName": "dateAlerte"
  }
];
const editableColumns = [
  {
    "name": "numero_bus",
    "propertyName": "numeroBus"
  },
  {
    "name": "immatriculation",
    "propertyName": "immatriculation"
  },
  {
    "name": "nom_type",
    "propertyName": "nomType"
  },
  {
    "name": "nom_statut",
    "propertyName": "nomStatut"
  },
  {
    "name": "message",
    "propertyName": "message"
  },
  {
    "name": "niveau",
    "propertyName": "niveau"
  },
  {
    "name": "nombre_passagers",
    "propertyName": "nombrePassagers"
  },
  {
    "name": "capacite_max",
    "propertyName": "capaciteMax"
  },
  {
    "name": "date_alerte",
    "propertyName": "dateAlerte"
  }
];
const primaryKey = "id_alerte";
const primaryKeyProperty = "idAlerte";

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
