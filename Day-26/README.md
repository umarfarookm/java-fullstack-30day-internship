# Day 26 – Config & Robustness

## Learning Objectives

- Use Spring profiles for environment-specific configuration
- Apply input validation across the application
- Implement comprehensive global error handling
- Externalize configuration with properties and environment variables
- Harden the application for production readiness

## Topics Covered

- Spring profiles (`dev`, `prod`, `test`)
- `application-{profile}.properties` files
- `@Value` and `@ConfigurationProperties`
- Environment variables and `.env` files
- Bean validation annotations (`@NotNull`, `@Size`, `@Email`, etc.)
- `@Valid` and `@Validated` in controllers
- `BindingResult` and field-level error messages
- Global exception handling improvements
- CORS hardening for production

## Hands-On Task

1. Create separate config profiles:
   - `dev`: H2 in-memory database, debug logging, permissive CORS
   - `prod`: MySQL, info logging, strict CORS with specific origins
2. Add validation to all DTOs with descriptive error messages
3. Enhance your global exception handler to return structured validation errors
4. Externalize all sensitive config (DB credentials, JWT secret) to environment variables
5. Add a health check endpoint

## Practice / Homework

Create a `test` profile that uses an H2 database and write an integration test that runs against it. Verify that switching profiles correctly changes the database connection.

## References

- [Spring Boot Profiles](https://docs.spring.io/spring-boot/reference/features/profiles.html)
- [Bean Validation with Spring Boot](https://www.baeldung.com/spring-boot-bean-validation)
- [Spring Boot Externalized Configuration](https://docs.spring.io/spring-boot/reference/features/external-config.html)
