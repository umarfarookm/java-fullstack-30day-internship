# Day 19 – Spring Data JPA

## Learning Objectives

- Configure Spring Data JPA with MySQL/H2
- Create JPA entities with proper annotations
- Use Spring Data repositories for CRUD operations
- Understand Hibernate as the JPA implementation
- Write derived query methods

## Topics Covered

- JPA vs Hibernate vs Spring Data JPA
- Entity annotations: `@Entity`, `@Table`, `@Id`, `@GeneratedValue`
- Column mapping: `@Column`, `nullable`, `unique`, `length`
- `JpaRepository` interface: built-in CRUD methods
- Derived query methods: `findByName`, `findByPriceGreaterThan`, etc.
- `application.properties` for database configuration
- H2 in-memory database for development
- `spring.jpa.hibernate.ddl-auto` options
- Database initialization with `data.sql` and `schema.sql`

## Hands-On Task

Convert your in-memory product storage to use JPA with a real database:
1. Add Spring Data JPA and H2 dependencies to `pom.xml`
2. Create a `Product` entity with JPA annotations
3. Create `ProductRepository` extending `JpaRepository<Product, Long>`
4. Add derived query methods: `findByCategory`, `findByNameContaining`, `findByPriceBetween`
5. Update `ProductService` to use the JPA repository
6. Configure H2 console and verify data persistence
7. Add a `data.sql` file to seed initial products

## Practice / Homework

Switch from H2 to MySQL: install MySQL locally, create a database, update `application.properties`, and verify everything works with a persistent database. Document the steps.

## References

- [Spring Data JPA Documentation](https://docs.spring.io/spring-data/jpa/reference/)
- [JPA Entity – Baeldung](https://www.baeldung.com/jpa-entities)
- [Spring Data Query Methods](https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html)
