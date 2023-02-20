# Chart-app

Chart-app is a web application that allows CRUD customer acquisition channels and presents them to based on a pie chart.

## Technologies Used

-   React
-   Typescript
-   TailwindCss
-   Laravel
-   Inertia.js
-   MySQL

## Installation

1. Clone repository from GitHub onto your local computer.

```bash
git clone https://github.com/Margo1212/chart-app.git
```

2. Install Composer Dependencies

    Whenever you clone a new Laravel project you must now install all of the project dependencies. This is what actually installs Laravel itself, among other necessary packages to get started.

```bash
 composer install
```

3. Run to install all the dependencies

    Just like how we must install composer packages to move forward, we must also install necessary NPM packages to move forward.
    This is just like step 2, where we installed the composer PHP packages, but this is installing the Javascript (or Node) packages required.

```bash
 npm install
```

4. Create a copy of your .env file

    .env files are not generally committed to source control for security reasons. But there is a .env.example which is a template of the .env file that the project expects us to have. So we will make a copy of the .env.example file and create a .env file that we can start to fill out to do things like database configuration in the next few steps.

```bash
 cp .env.example .env
```

5. Generate an app encryption key

    Laravel requires you to have an app encryption key which is generally randomly generated and stored in your .env file. The app will use this encryption key to encode various elements of your application from cookies to password hashes and more.

```bash
 php artisan key:generate
```

6. Create an empty database for our application

7. In the .env file, add database information to allow Laravel to connect to the database

    In the .env file fill in the DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, and DB_PASSWORD options to match the credentials of the database you just created. This will allow us to run migrations and seed the database in the next step.

8. Migrate the database

    Once your credentials are in the .env file, now you can migrate your database.

```bash
 php artisan migrate
```
