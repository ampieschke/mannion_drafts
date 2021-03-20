DROP DATABASE IF EXISTS player_pool;
CREATE database player_pool;

USE player_pool;

CREATE TABLE players (
  rank INT NOT NULL,
  player_name VARCHAR(100) NULL,
  team VARCHAR(100) NULL,
  position INT NULL,
  PRIMARY KEY (rank)
);
