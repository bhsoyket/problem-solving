-- // Combine Two Tables 
/*
Problem: Write an SQL query to report the first name, last name, city, and state of each person in the Person table.
         If the address of a personId is not present in the Address table, report null instead.

*/

-- // SQL

SELECT 
    Person.firstname,
    Person.lastname,
    Address.city,
    Address.state
FROM
    Person
LEFT JOIN Address ON 
    Address.personId = Person.personId;

    