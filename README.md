# fathersday

## Pre-reqs:

- To clone this repo, you must have the git cient installed on your laptop.  Then issue the command `git clone https://github.com/smchamberlin/fathersday`
- You must have npm installed, which comes packaged with NodeJS. You can download that here: https://nodejs.org/en/

## Run Locally in Develop Mode

Develop mode allows you to "hot swap" changes; any time you save a `.js`, `.css` file, it is rendered immediately; you do not need to issue `npm start` again.

Steps:
- `npm install` - It will create a node_modules subdirectory with the required dependent packages defined in `package.json` file
- `npm start` - This should bring up a browser to http://localhost:3000 and you should be looking at your application!

## Run Locally in Production Mode

- `npm run-script build` - React will build the application into tiny static html, css and js files in the build directory.
- `npx serve -s build`
- Bring up a browser to http://localhost:5000

## Deploy to Cloud

- Download CLI: `curl -fsSL https://clis.cloud.ibm.com/install/osx | sh`
- Login: `ibmcloud login --sso` then `ibmcloud target --cf`
- Push: `ibmcloud cf push`
- Update route: `ibmcloud app route-map fathersday mybluemix.net -n fathersday`

