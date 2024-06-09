# Zara Web Challenge SGH. Marvel Heroes Finder

**Marvel Heroes Finder** is a sleek and intuitive application that utilizes the official Marvel API to search for your favorite Marvel heroes. Simply enter the name of a hero in the search bar to find matching characters. Click on a hero to view detailed information, including the comics they've appeared in. Additionally, you can *select your favorite heroes* and see them displayed in a dedicated favorites list. This project showcases a seamless integration with Marvel's API, providing an engaging user experience for all Marvel fans.

## Screenshots

### Main Page
![image](https://github.com/SergioGDev/zara-web-challenge-sgh/assets/92792915/a384d3d2-7c26-4aad-85c0-5d2033f2e60f)

### Hero Detail Page
![image](https://github.com/SergioGDev/zara-web-challenge-sgh/assets/92792915/27ba3fb5-b737-4973-b28b-1ee5d3e2b2d7)

## Project Description. Tools

This project is a React application built with Next.js, designed to provide a robust and modern web application framework. It utilizes several external tools to enhance functionality and development efficiency:

- **React:** Version 18
- **NextJS:** Version 14.2.3
- **Axios:** Used for making HTTP requests to interact with APIs seamlessly.
- **md5:** Employed to hash passwords and other sensitive data, ensuring enhanced security.
- **Sass:** Utilized for styling, allowing for more flexible and maintainable CSS.

## Code Architecture

This section describes the project's code structure, detailing the key components and their organization. Below are the main elements of the code:

- `src/contexts`: This has the context that handle the behave of the application. Inside we have the `HeroFinderContext` that have the state of the global app (hero list, the text of the finder, etc.).
- `src/components`: Here are the individual components of the app (`FinderInput`, `HeroCard`, etc.)
- `src/pages`: Every page inside here have the full screen that we'll see on the screen. This pages will be used with the NextJS Router.
- `src/helpers`: This folder have helpers to use on the main project. The methods to get the API info are here.
- `src/types`: This folder have the types definition of the main app.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

