# Shopify Image Repository Project

Within this repository, you will find my project submission for Shopify's 2021 Backend Development Internship.

## Setup

To run this applicaiton, first run `npm install` to install the package dependencies.

The back end  was built with Node.js and Express. It utilizes PostgreSQL as its database, which you will need on your machine. Create a database called ____. Then `npm run seed` to set up your database.

Lastly, `npm run start-dev` to run the applicaiton on your local machine.

## Functionality

IMAGE SEARCH:
 - from characteristics of the images
 - from text
 - from an image (search for similar images)

ADD IMAGE(S):
 - one
 - bulk
 - enormous amount of images
 - private or public (permissions)
 - secure uploading and stored images

DELETE IMAGES(S):
 - one
 -  bulk
 - selected
 - all images
 - Prevent a user deleting images from another user (access control)
 - secure deletion of images

SELL/BUY IMAGES:
 - ability to manage inventory
 - set price
 - discounts
 - handle money

<!--
Now that you've got the code, follow these steps to get acclimated:

* Create two postgres databases (`MY_APP_NAME` should match the `name`
  parameter in `package.json`):

```
export MY_APP_NAME=boilermaker
createdb $MY_APP_NAME
createdb $MY_APP_NAME-test
```

* By default, running `npm test` will use `boilermaker-test`, while
  regular development uses `boilermaker`

* Create a file called `secrets.js` in the project root
  * This file is listed in `.gitignore`, and will _only_ be required
    in your _development_ environment
  * Its purpose is to attach the secret environment variables that you
    will use while developing
  * However, it's **very** important that you **not** push it to
    Github! Otherwise, _prying eyes_ will find your secret API keys!
  * It might look like this:

```
process.env.GOOGLE_CLIENT_ID = 'hush hush'
process.env.GOOGLE_CLIENT_SECRET = 'pretty secret'
process.env.GOOGLE_CALLBACK = '/auth/google/callback'
```

### OAuth

* To use OAuth with Google, complete the steps above with a real client
  ID and client secret supplied from Google
  * You can get them from the [Google APIs dashboard][google-apis].

[google-apis]: https://console.developers.google.com/apis/credentials -->
