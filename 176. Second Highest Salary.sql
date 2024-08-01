/* Write your T-SQL query statement below */
SELECT CASE
           WHEN COUNT(DISTINCT salary) < 2 THEN NULL
           ELSE MIN(salary)
       END AS SecondHighestSalary
FROM (SELECT DISTINCT TOP 2 salary
      FROM Employee
      ORDER BY salary DESC) AS a;
