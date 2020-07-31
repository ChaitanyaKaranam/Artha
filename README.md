# Artha
Place for multiple learning resources

## Overview
With Artha, you can get consolidated information of learning resources from these platforms - YouTube, GitHub and Udemy.
It has REST and GraphQL Backend to serve requests.

# Instructions to run locally

## Perequisites
Install Node.js and npm
https://nodejs.org/en/

## Frontend
```
cd frontend

npm install

npm start
```

## Backend

Configure below environment variables in ``.env`` file in ``\backend``

```
NODE_ENV=dev
PORT=5000
YOUTUBE_API_KEY=<YOUTUBE_API_KEY>
GITHUB_API_KEY=<GITHUB_API_KEY>
UDEMY_CLIENT_ID=<UDEMY_CLIENT_ID>
UDEMY_CLIENT_PASSWORD=<UDEMY_CLIENT_PASSWORD>
```

Install and Run backend
```
cd backend

npm install

npm run dev
```

## Youtube API Key Instructions
https://developers.google.com/youtube/v3/getting-started#before-you-start

## Github API Key Instructions
https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token

## Udemy API Key Instructions
https://www.udemy.com/user/edit-api-clients/




