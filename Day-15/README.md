# Day 15 – Java Refresher

## Learning Objectives

- Review core OOP concepts in Java (classes, inheritance, polymorphism)
- Work with Java Collections framework effectively
- Use Streams API for functional-style data processing
- Understand Maven/Gradle project structure and dependency management
- Write clean, modern Java code

## Topics Covered

- OOP: classes, objects, inheritance, interfaces, abstract classes
- Encapsulation, polymorphism, and composition over inheritance
- Collections: List, Set, Map, Queue and their implementations
- Generics and type safety
- Streams API: `filter`, `map`, `reduce`, `collect`, `flatMap`
- Optional for null safety
- Maven: `pom.xml`, dependencies, lifecycle, plugins
- Gradle: `build.gradle`, tasks, dependencies
- Java records, sealed classes (modern Java features)

## Hands-On Task

Build a Library Management System (console app):
1. Create classes: `Book`, `Member`, `Library`
2. `Book` has: title, author, ISBN, genre, availability status
3. `Member` has: name, ID, list of borrowed books
4. `Library` manages books and members with:
   - Add/remove books
   - Register members
   - Borrow/return books
   - Search by title, author, or genre (using Streams)
   - List most popular genres (using `Collectors.groupingBy`)
5. Use Maven for project setup with proper package structure

## Practice / Homework

Rewrite the search functionality using the Streams API. Implement a method that takes a `Predicate<Book>` and returns filtered results — practice composing predicates with `.and()` and `.or()`.

## References

- [Java SE Documentation](https://docs.oracle.com/en/java/javase/17/docs/api/)
- [Java Streams – Baeldung](https://www.baeldung.com/java-streams)
- [Maven Getting Started](https://maven.apache.org/guides/getting-started/)
