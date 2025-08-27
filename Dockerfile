# Simple Dockerfile to run Maven tests
FROM maven:3.9.8-eclipse-temurin-17 as build
WORKDIR /app
COPY . .
RUN mvn -q -DskipTests=false test

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target /app/target
CMD ["bash","-lc","echo 'Artifacts copied. Use Jenkins to run the pipeline.' && sleep infinity"]
