# Day 25 – Authentication & Security

## Learning Objectives

- Understand authentication vs authorization
- Implement Spring Security with JWT tokens
- Hash passwords securely with BCrypt
- Protect API endpoints with role-based access control
- Store and send JWT tokens from React

## Topics Covered

- Spring Security filter chain
- `SecurityFilterChain` bean configuration
- BCrypt password hashing
- JWT (JSON Web Tokens): structure, signing, validation
- `@PreAuthorize` and role-based access
- Login/register API endpoints
- Storing JWT in localStorage/sessionStorage
- Axios interceptors for attaching auth headers
- Protected routes in React

## Hands-On Task

Add authentication to your full-stack application:
1. Create User entity with username, password (hashed), and roles
2. Build `/api/auth/register` and `/api/auth/login` endpoints
3. Generate JWT on successful login, validate on subsequent requests
4. Protect CRUD endpoints — only authenticated users can create/edit/delete
5. Add admin role that can manage all resources
6. Build login/register forms in React with JWT storage and axios interceptors

## Practice / Homework

Implement a "remember me" feature that uses refresh tokens. When the access token expires, automatically request a new one using the refresh token without forcing the user to log in again.

## References

- [Spring Security Reference](https://docs.spring.io/spring-security/reference/)
- [JWT.io Introduction](https://jwt.io/introduction)
- [Baeldung – Spring Security JWT](https://www.baeldung.com/spring-security-oauth-jwt)
