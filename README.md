# Zara Web Challenge SGH. Marvel Heroes Finder

**Marvel Heroes Finder** is a sleek and intuitive application that utilizes the official Marvel API to search for your favorite Marvel heroes. Simply enter the name of a hero in the search bar to find matching characters. Click on a hero to view detailed information, including the comics they've appeared in. Additionally, you can *select your favorite heroes* and see them displayed in a dedicated favorites list. This project showcases a seamless integration with Marvel's API, providing an engaging user experience for all Marvel fans.

## Project Description. Tools

This project is a React application built with Next.js, designed to provide a robust and modern web application framework. It utilizes several external tools to enhance functionality and development efficiency:

- **React:** Version 18
- **NextJS:** Version 14.2.3
- **Axios:** Used for making HTTP requests to interact with APIs seamlessly.
- **SWR:** Used for have the realtime data of favs heroes.
- **Prisma**: Created a SQLite DB for save the favs heroes.
- **md5:** Employed to hash passwords and other sensitive data, ensuring enhanced security.
- **Sass:** Utilized for styling, allowing for more flexible and maintainable CSS.
- **Jest** and **React Testing Library**: Utilized for testing the app.

## Scripts

- `npm run dev`: Used to runs the server in development mode. To test the application locally you must create the `.env.local` file based on the `.env.template` file.
- `npm run build`: Used to build a production bundle of the app.
- `npm run test`: Used to run the test of the app.

## Code Architecture

This section describes the project's code structure, detailing the key components and their organization. Below are the main elements of the code:

- `src/components`: Here are the individual components of the app (`FinderInput`, `HeroCard`, etc.)
- `src/pages`: Every page inside here have the full screen that we'll see on the screen. This pages will be used with the NextJS Router.
- `src/helpers`: This folder have helpers to use on the main project. The methods to get the API info are here.
- `src/types`: This folder have the types definition of the main app.

## Screenshots

#### Main Page
![image](https://github.com/SergioGDev/zara-web-challenge-sgh/assets/92792915/a384d3d2-7c26-4aad-85c0-5d2033f2e60f)

#### Hero Detail Page
![image](https://github.com/user-attachments/assets/2777a65c-df1f-46a0-80bb-53ac47d274c7)

## Deploy on Vercel (CI/CD)

You can test the desployed version of the app on the next link:

[Zara Web Challenge SGH](https://zara-web-challenge-sgh.vercel.app/)

The deploy is integrated with the **main** branch of this repository. When a commit is pushed to **main** branch, automatically it will be deployed on Vercel's site.
