CREATE TABLE IF NOT EXISTS modules_gps (
  id_module UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  identifiant_module VARCHAR(100) UNIQUE NOT NULL,
  nom_module VARCHAR(150) NOT NULL,
  id_bus UUID UNIQUE REFERENCES bus(id_bus) ON DELETE SET NULL,
  actif BOOLEAN NOT NULL DEFAULT true,
  date_affectation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE modules_gps
  ADD COLUMN IF NOT EXISTS nom_module VARCHAR(150),
  ADD COLUMN IF NOT EXISTS actif BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS date_affectation TIMESTAMP,
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

UPDATE modules_gps
SET nom_module = COALESCE(nom_module, identifiant_module)
WHERE nom_module IS NULL;

ALTER TABLE modules_gps
  ALTER COLUMN nom_module SET NOT NULL;

CREATE INDEX IF NOT EXISTS idx_modules_gps_bus ON modules_gps(id_bus);
