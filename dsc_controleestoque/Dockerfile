FROM maven:4.0.0 as builder
WORKDIR /backend
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

FROM openjdk:17-jdk-alpine
WORKDIR /backend
COPY --from=builder /backend/target/dsc_controleestoque-0.0.1-SNAPSHOT.jar /backend/app.jar
EXPOSE 8080
