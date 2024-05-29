SQL ____

Tables
Kids
- id (pk)
- Age
- Name
- Positions
- location
-- - id of Teams (fk)

Teams/Clubs
- id(pk)
- name
- founded

RelationTable

SELECT k.Name, T.name
FROM Kids K
INNER JOIN Teams T
ON k.id = T.id

