# Day 18 – Layered Architecture

## Learning Objectives

- Understand the layered architecture pattern (controller/service/repository)
- Apply Dependency Injection effectively in Spring Boot
- Separate concerns between layers
- Write testable, maintainable service classes
- Use interfaces for loose coupling

## Topics Covered

- Three-tier architecture: Presentation → Business → Data
- Controller layer: HTTP handling, request/response mapping
- Service layer: business logic, validation, orchestration
- Repository layer: data access abstraction
- Dependency Injection: constructor injection (preferred), `@Autowired`
- Interface-based design for services and repositories
- `@Service`, `@Repository`, `@Controller` annotations
- Why layering matters: testability, maintainability, separation of concerns

## Hands-On Task

Refactor the Day 17 Product API into proper layers:
1. Create `Product` model class with fields: id, name, description, price, category
2. Create `ProductRepository` interface and `InMemoryProductRepository` implementation
3. Create `ProductService` interface and `ProductServiceImpl` with business logic
4. Refactor `ProductController` to delegate all logic to the service
5. Add validation in the service layer (e.g., price must be positive, name required)
6. Inject dependencies via constructor injection (no `@Autowired` on fields)

## Practice / Homework

Write unit tests for `ProductServiceImpl` by mocking the repository. Test at least: create with valid data, create with invalid data (throws exception), find by ID when exists, find by ID when not found.

## References

- [Spring Dependency Injection](https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html)
- [Layered Architecture – Baeldung](https://www.baeldung.com/spring-boot-clean-architecture)
- [Constructor Injection – Why?](https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html#beans-constructor-injection)
