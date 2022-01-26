-- // Employees Earning More Than Their Managers
/*
Problem: Write an SQL query to find the employees who earn more than their managers.
*/

-- // SQL

SELECT Employee.name as Employee
FROM
    Employee
JOIN Employee as manager ON 
    Employee.managerId = manager.id
WHERE Employee.salary > manager.salary;