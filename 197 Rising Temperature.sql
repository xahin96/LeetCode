SELECT w.id
FROM Weather w
JOIN Weather w_prev ON w_prev.recordDate = DATEADD(DAY, -1, w.recordDate)
WHERE w.temperature > w_prev.temperature;