# Software Testing Types in SDLC

This document provides a brief overview of different types of software testing used in the Software Development Life Cycle (SDLC).

## Types of Testing

### 1. Unit Testing
- **Purpose**: Tests individual components (units) like functions, methods, or classes.
- **Performed by**: Developers.
- **Tools**: JUnit (Java), NUnit (.NET), PyTest (Python).
- **Key Benefit**: Catches bugs early in development.

### 2. Integration Testing
- **Purpose**: Checks if different modules/services work together.
- **Approaches**:
  - *Big Bang*: Tests all components at once.
  - *Incremental*: Tests components step-by-step (Top-down/Bottom-up).
- **Tools**: TestNG, Postman (for API testing).

### 3. System Testing
- **Purpose**: Validates the fully integrated system against requirements.
- **Includes**: Functional, performance, security testing, etc.
- **Performed by**: QA team.
- **Environment**: Matches production.

### 4. User Acceptance Testing (UAT)
- **Purpose**: Confirms the software meets business needs before release.
- **Types**:
  - *Alpha Testing*: Internal team testing.
  - *Beta Testing*: Real-world testing by end-users.
- **Performed by**: End-users/clients.

## Why Testing Matters
- Ensures software reliability and quality.
- Reduces risks before deployment.
- Improves user satisfaction.

---
**Note**: Each testing phase is critical in SDLC for delivering a robust product.
