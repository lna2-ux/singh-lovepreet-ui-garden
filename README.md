 # Singh Lovepreet UI Garden (`singh-lovepreet-ui-garden`)

A customized React Web Component Library built with **TypeScript**, **Styled Components**, **Storybook**, and **Docker**.

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Local Development Setup](#local-development-setup)
4. [Running Tests](#running-tests)
5. [Storybook UI Garden](#storybook-ui-garden)
6. [Docker Deployment](#docker-deployment)
7. [Full Git Workflow Commands](#full-git-workflow-commands)

---

## 🛠️ Project Overview

This component library contains 9 customizable and accessible UI components designed following clean code and modern React principles:
* **Button** (Active / Disabled states)
* **Label**
* **Text** (Multiple size variations)
* **Card** (Active / Disabled states)
* **Dropdown**
* **RadioButton**
* **Table** (Dynamic headers & data mapping)
* **Img**
* **HeroImage**

---

## ⚡ Prerequisites

Ensure you have the following installed on your system before proceeding:
* **Node.js**: `v18.x` or higher
* **npm**: `v9.x` or higher
* **Docker Desktop** (with WSL 2 integration enabled if using Windows/Debian)
* **Git**

---

## 🚀 Local Development Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/lna2-ux/singh-lovepreet-ui-garden.git](https://github.com/lna2-ux/singh-lovepreet-ui-garden.git)
cd singh-lovepreet-ui-garden
npm install

npm start
npm test -- --watchAll=false

npm run storybook
docker build -t singh-lovepreet-ui-garden .
docker rm -f Singh_Lovepreet_coding_assignment12
docker run -d -p 8083:80 --name Singh_Lovepreet_coding_assignment12 singh-lovepreet-ui-garden
git init
git add .
git commit -m "Complete Assignment 12: React TypeScript UI Component Library and Docker deployment"
git branch -M main
git remote add origin [https://github.com/lna2-ux/singh-lovepreet-ui-garden.git](https://github.com/lna2-ux/singh-lovepreet-ui-garden.git)
git push -u origin main

PORT=8083 npm start
git add .
git commit -m "Update project documentation and clean code"
git push