# Spendex App (Capstone Project)

> Spendex App is a Full-Stack app for keeping tracks of all your expenses built for the Decisiv Inc & LaserAnts Ruby on Rails/React Bootcamp. It uses Ruby on Rails for the backend and React for the frontend.

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

The app is the capstone project of the bootcamp to put all the knowledge we acquire through it into a practical project. My project is an expense tracker for keeping track of expenses by categories. The app allows to create categories, edit them and delete them. Each category consists of a title and a description. Also, each category displays the total amount of expenses. Inside each category, all the expenses for that category are displayed grouped by month. As with categories, expenses can be created, edited and deleted. The app was styled with Styled Components and has a minimalist design.

## Screenshots

### View of all categories
![Screenshot 2022-06-29 at 07-58-03 ExpenseTracker](https://user-images.githubusercontent.com/57517804/176330229-fc51f5e2-3a25-4f4e-aa38-edc245b4b6e5.png)

### View for creating a new category
![Screenshot 2022-06-29 at 09-17-51 ExpenseTracker](https://user-images.githubusercontent.com/57517804/176330418-8c666a21-5d64-4472-83ea-b0b468526ce8.png)

### View for editing a category
![Screenshot 2022-06-29 at 08-07-46 ExpenseTracker](https://user-images.githubusercontent.com/57517804/176330248-bc8bffaa-b722-4621-a6d2-807f77859953.png)

### View of all expenses for that category
![Screenshot 2022-06-29 at 08-06-37 ExpenseTracker](https://user-images.githubusercontent.com/57517804/176330266-998181b9-2fed-4ab7-b4bb-3ad9ca4cd088.png)

### View for creating a new expense
![Screenshot 2022-06-29 at 09-19-50 ExpenseTracker](https://user-images.githubusercontent.com/57517804/176330615-8e764d6a-1caa-4de5-80b5-23c2b3cb77da.png)

### View for editing an expense
![Screenshot 2022-06-29 at 08-07-28 ExpenseTracker](https://user-images.githubusercontent.com/57517804/176330284-5b080165-8055-4245-9366-fe81f6fc7015.png)

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

- Add the current category name on the expenses show, create and update views
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
