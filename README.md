# CI/CD: Jenkins + Docker for Tests

- Declarative Jenkinsfile with **parallel** stages (API & UI)
- Dockerfile to containerize test execution
- Minimal JUnit test for pipeline sanity
- Architecture diagram in `/diagrams`

## Local build
```bash
mvn clean test
docker build -t qa-tests:latest .
```

## Jenkins
1. Create pipeline from Jenkinsfile (Multibranch or Pipeline job).
2. Ensure Docker is available on the Jenkins agent.
3. Observe parallel stages and archived test reports.

Add screenshots of Jenkins Blue Ocean and classic UI to `/diagrams` or `/screenshots` in your repo.
