# Shopping on Wheels 🚚

Shopping on Wheels is a simple fashion website built with HTML, CSS, and JavaScript.  
This project demonstrates how to containerize a web application using Docker and store the Docker image in AWS Elastic Container Registry (ECR).

---

## 📌 Project Overview

This project shows a basic DevOps workflow:

Website Code → Docker Image → AWS ECR

The website is containerized using Docker and pushed to AWS ECR for cloud storage and deployment practice.

---

## 🛠 Tech Stack

- HTML
- CSS
- JavaScript
- Docker
- AWS ECR
- Git & GitHub

---

## 📂 Project Structure

shoppingonwheels

├── index.html  
├── style.css  
├── script.js  
├── Dockerfile  
└── README.md  

---

## 🐳 Docker Setup

### Build Docker Image

docker build -t shopping-on-wheels .

### Run Docker Container

docker run -p 8080:80 shopping-on-wheels

Open in browser:

http://localhost:8080

---

## ☁️ AWS ECR Workflow

### Step 1 – Create ECR Repository

Create a repository in AWS ECR.

Example repository URI:

905491970245.dkr.ecr.us-east-1.amazonaws.com/shopping-on-wheels

---

### Step 2 – Login to ECR

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 905491970245.dkr.ecr.us-east-1.amazonaws.com

---

### Step 3 – Tag Docker Image

docker tag shopping-on-wheels:latest 905491970245.dkr.ecr.us-east-1.amazonaws.com/shopping-on-wheels:latest

---

### Step 4 – Push Image to ECR

docker push 905491970245.dkr.ecr.us-east-1.amazonaws.com/shopping-on-wheels:latest

---

## 🌐 Live Website

The website is hosted using GitHub Pages.

Live Demo:  
https://priyanshisaugat01.github.io/sow/

---

## 🎯 Purpose

This project was created to practice:

- Docker containerization
- AWS Elastic Container Registry (ECR)
- Basic DevOps workflow
- GitHub project management

---

## 👩‍💻 Author

Priyanshi Saugat
