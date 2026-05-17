# Day 16 – Spring Boot Intro

## Learning Objectives

- Understand what Spring Boot is and its advantages over plain Spring
- Create a Spring Boot application from scratch
- Learn core annotations and auto-configuration
- Understand the project structure and conventions
- Run and test a basic Spring Boot application

## Topics Covered

- Spring vs Spring Boot: what Boot adds (auto-config, embedded server, starters)
- `@SpringBootApplication` (combines `@Configuration`, `@EnableAutoConfiguration`, `@ComponentScan`)
- Spring Initializr for project scaffolding
- Project structure: `src/main/java`, `src/main/resources`, `src/test`
- `application.properties` / `application.yml`
- Embedded Tomcat server
- Spring Boot starters (web, data-jpa, security, etc.)
- `@Component`, `@Service`, `@Repository`, `@Controller` stereotypes
- Dependency Injection basics: `@Autowired`, constructor injection

## Hands-On Task

Create your first Spring Boot application:
1. Generate a project using Spring Initializr (Web, DevTools dependencies)
2. Create a simple `HelloController` that returns "Hello, Spring Boot!"
3. Add a `/status` endpoint that returns app info as JSON
4. Configure server port and app name in `application.properties`
5. Run the application and test endpoints with curl or browser
6. Explore the auto-generated project structure

## Practice / Homework

Add a `@Service` class called `GreetingService` with a method that accepts a name and returns a personalized greeting. Inject it into your controller and use it. Experiment with different injection methods (constructor vs field).

## References

- [Spring Boot Documentation](https://docs.spring.io/spring-boot/reference/)
- [Spring Initializr](https://start.spring.io/)
- [Spring Boot Annotations – Baeldung](https://www.baeldung.com/spring-boot-annotations)
