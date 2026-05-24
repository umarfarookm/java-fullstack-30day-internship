# Day 23 – Relationships & Queries

## Learning Objectives

- Map entity relationships using JPA annotations
- Understand OneToMany, ManyToOne, and ManyToMany relationships
- Write custom JPQL and native SQL queries
- Use join fetch to solve N+1 query problems
- Implement cascading and lazy/eager loading strategies

## Topics Covered

- `@OneToMany` and `@ManyToOne` mappings
- `@ManyToMany` with join tables
- `@JoinColumn` and `mappedBy`
- Cascade types (PERSIST, MERGE, REMOVE, ALL)
- Fetch types (LAZY vs EAGER)
- JPQL queries with `@Query` annotation
- Native queries and projections
- N+1 problem and solutions (JOIN FETCH, EntityGraph)

## Hands-On Task

Extend your blog application entities with proper JPA relationships:
1. Map User → Posts as OneToMany
2. Map Post → Comments as OneToMany
3. Add a ManyToMany relationship for Post ↔ Tags
4. Write custom repository methods:
   - Find posts by author username
   - Find posts with more than N comments
   - Get all tags with their post counts
5. Use `@EntityGraph` or JOIN FETCH to optimize queries

## Practice / Homework

Write a custom query that fetches a "feed" — the 10 most recent posts with their authors and comment counts, ordered by creation date. Ensure it executes in a single SQL query (no N+1).

## References

- [JPA Entity Relationships – Baeldung](https://www.baeldung.com/jpa-entity-relationships)
- [Spring Data JPA Custom Queries](https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html)
- [Hibernate Fetching Strategies](https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html#fetching)
