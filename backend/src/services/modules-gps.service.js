import { query } from '../db.js';

const selectModule = `
  SELECT m.id_module AS "idModule",
         m.identifiant_module AS "identifiantModule",
         m.nom_module AS "nomModule",
         m.id_bus AS "idBus",
         m.actif,
         m.date_affectation AS "dateAffectation",
         m.created_at AS "createdAt",
         b.numero_bus AS "numeroBus",
         b.immatriculation,
         active_trip.id_ligne AS "idLigne",
         active_trip.numero_ligne AS "numeroLigne",
         active_trip.nom_ligne AS "nomLigne"
  FROM modules_gps m
  LEFT JOIN bus b ON b.id_bus = m.id_bus
  LEFT JOIN LATERAL (
    SELECT t.id_ligne, l.numero_ligne, l.nom_ligne
    FROM trajets t
    JOIN lignes l ON l.id_ligne = t.id_ligne
    WHERE t.id_bus = m.id_bus
    ORDER BY CASE WHEN LOWER(COALESCE(t.statut_trajet, '')) IN ('en cours', 'actif', 'en route') THEN 0 ELSE 1 END,
             t.date_depart DESC NULLS LAST,
             t.created_at DESC
    LIMIT 1
  ) active_trip ON true`;

export async function findAll() {
  return query(`${selectModule} ORDER BY m.created_at DESC`);
}

export async function findBusAssignmentByIdentifier(identifier) {
  const rows = await query(
    `SELECT m.id_bus AS "idBus",
            b.capacite_max AS "capaciteMax",
            active_trip.numero_ligne AS "numeroLigne"
     FROM modules_gps m
     JOIN bus b ON b.id_bus = m.id_bus AND b.actif = true
     LEFT JOIN LATERAL (
       SELECT l.numero_ligne
       FROM trajets t
       JOIN lignes l ON l.id_ligne = t.id_ligne
       WHERE t.id_bus = m.id_bus
       ORDER BY CASE WHEN LOWER(COALESCE(t.statut_trajet, '')) IN ('en cours', 'actif', 'en route') THEN 0 ELSE 1 END,
                t.date_depart DESC NULLS LAST,
                t.created_at DESC
       LIMIT 1
     ) active_trip ON true
     WHERE m.identifiant_module = $1 AND m.actif = true
     LIMIT 1`,
    [identifier]
  );
  return rows[0] ?? null;
}

export async function create(payload) {
  const rows = await query(
    `INSERT INTO modules_gps (identifiant_module, nom_module, id_bus, actif, date_affectation)
     VALUES ($1, $2, $3, $4, CASE WHEN $3::uuid IS NULL THEN NULL ELSE CURRENT_TIMESTAMP END)
     RETURNING id_module AS "idModule"`,
    [payload.identifiantModule?.trim(), payload.nomModule?.trim(), payload.idBus || null, payload.actif !== false]
  );
  return findById(rows[0].idModule);
}

export async function update(id, payload) {
  const rows = await query(
    `UPDATE modules_gps
     SET identifiant_module = $1,
         nom_module = $2,
         id_bus = $3,
         actif = $4,
         date_affectation = CASE WHEN id_bus IS DISTINCT FROM $3::uuid THEN CURRENT_TIMESTAMP ELSE date_affectation END
     WHERE id_module = $5
     RETURNING id_module AS "idModule"`,
    [payload.identifiantModule?.trim(), payload.nomModule?.trim(), payload.idBus || null, payload.actif !== false, id]
  );
  return rows.length ? findById(rows[0].idModule) : null;
}

export async function remove(id) {
  const rows = await query('DELETE FROM modules_gps WHERE id_module = $1 RETURNING id_module', [id]);
  return rows.length > 0;
}

async function findById(id) {
  const rows = await query(`${selectModule} WHERE m.id_module = $1 LIMIT 1`, [id]);
  return rows[0] ?? null;
}
