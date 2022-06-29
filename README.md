# Spendex App (Capstone Project)

> Spendex App is an app for keeping tracks of all your expenses built for the Decisiv Inc & LaserAnts Ruby on Rails/React Bootcamp. 

## Table of contents
- [Spendex App (Capstone Project)](#spendex-app-capstone-project)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Built with](#built-with)
  - [Features](#features)
  - [Status](#status)
  - [Contact](#contact)

## Getting Started

To get a local copy follow these steps:

### Prerequisites

- Ruby 2.7.6
- Rails 6.1.6
- PostgreSQL 14.3

- Clone the repo `https://github.com/AlexRFarnes/expense-tracker.git`
- Once you have the copy, run the following commands inside the directory:
  1. Run `bundle install` in order to install all the project gems
  2. Set up the username and password in the `config/database.yml` 
  3. Run the following commands to create the databases, run the initial migrations and run the the seeds `rails db:create && rails db:migrate && rails db:seed`
  4. Start the application with the command `rails server` or the shortcut `rails s`
  5. Run the following command `bin/webpack-dev-server` to enable live reloadig.
  6. Go to your local host `http://127.0.0.1:3000`

## General info

The app is the capstone project of the bootcamp to put all the knowledge we acquire through it into a practical project. My project is an expense tracker for keeping track of expenses by categories. The app allows to create categories, edit them and delete them. Each category consists of a title and a description. Also, each category displays the total amount of expenses. Inside each category, all the expenses for that category are displayed grouped by month. As with categories, expenses can be created, edited and deleted. 

## Screenshots

![]()
<!-- [Demo]() -->

## Built with

- Frontend
  - ReactJS with Hooks
  - Axios for handling HTTP requests
  - React Router v6
  - Styled Components
  - Font Awesome
- Backend
  - Ruby 2.7.6
  - Rails 6.1.6
  - PostgreSQL 14.3
- DevOps
  - Heroku

## Features

List of features ready and TODOs for future development

- Create, edit and delete categories
- Display total amount of expenses for each category
- Create, edit and delete expenses for each category
- Group expenses by month

Future work

- Create new Users
- Sign in and sign up functionality
- JWT Auth token
- Implement date field on the expenses instead of using the created_at field
- Deploy with Docker

## Status

Project is: _in-progress_.

## Contact

- GitHub [@AlexRFarnes](https://github.com/AlexRFarnes)
- Twitter [@AlexRFarnes](https://twitter.com/alexrfarnes)
- Linkedin [@AlexRFarnes](https://www.linkedin.com/in/alexrfarnes/)
