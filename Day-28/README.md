# Day 28 – Deployment

## Learning Objectives

- Build a production-ready React application
- Package a Spring Boot application as a JAR
- Deploy a full-stack application to a cloud platform
- Set up a hosted MySQL database
- Configure environment variables for production

## Topics Covered

- `npm run build` — optimized React production build
- Serving React static files from Spring Boot
- Maven `mvn clean package` — creating executable JAR
- Deployment platforms (Railway, Render, AWS, Heroku)
- Hosted MySQL (PlanetScale, Railway MySQL, AWS RDS)
- Environment variables in production
- HTTPS and domain configuration
- CI/CD basics with GitHub Actions

## Hands-On Task

Deploy your full-stack application:
1. Build the React app for production (`npm run build`)
2. Copy the build output to Spring Boot's `src/main/resources/static/`
3. Package the Spring Boot app as a single JAR: `mvn clean package`
4. Set up a hosted MySQL database and configure the connection
5. Deploy the JAR to a platform of your choice (Railway or Render recommended)
6. Verify the application works end-to-end in production

## Practice / Homework

Set up a basic GitHub Actions workflow that automatically builds and tests your application on every push to `main`. The workflow should run `mvn test` and `npm test`.

## References

- [Spring Boot Deployment Guide](https://docs.spring.io/spring-boot/reference/deployment/index.html)
- [Vite Build for Production](https://vite.dev/guide/build.html)
- [Railway Deployment](https://docs.railway.com/)
