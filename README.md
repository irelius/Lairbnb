# Lairbnb Clone

Render Link: https://irelius-airbnb-clone.onrender.com

GitHub Link: https://github.com/irelius/Lairbnb

## Technologies/Languages Used:
- JavaScript
- Express
- Sequelize
- React / Redux


## Setup Directions:
1. Clone from GitHub repository and run `npm install` in both the frontend and backend directories.
2. Create a ".env" file in the "backend" directory using the ".env.example" as a guide
3. In the "backend" directory, run the migration and seeder files using the following commands:
    1. "npx dotenv sequelize db:migrate"
    2. "npx dotenv sequelize db:seed:all"
4. Run "npm start" in both the "frontend" and "backend" directories

___

## Description:
This repo is an Lairbnb clone implementing two CRUD features of Lairbnb, Spots and Reviews. It also implements features to allow users to sign up and account or log into their account.


___

## Landing Page:
The landing page is the Lairbnb front page that lists existing spots from the existing seeder file. After a user logs in and creates a spot, the newly created spot will be generated on the landing page at the end.

![Landing Page](https://github.com/irelius/AirBnB/blob/main/assets/schema/airbnblandingpage.png)

## Create a Spots:
After a user logs in, they will be able to create a new spot with the "Become a Host" button. That will lead them to a page with a form to fill out information about the location they wish to "host".

![Spot Page](https://github.com/irelius/AirBnB/blob/main/assets/schema/airbnbspotpage.png)


## Manage Spots:
If a user has created a spot(s), they can manage them under their "Manage Your Listings" option. There the user can edit and delete their spots.

![Manage Spot Page](https://github.com/irelius/AirBnB/blob/main/assets/schema/airbnbmanagelistings.png)


## Spot Detail's Page:
Clicking on a spot on the main landing page will lead a user to the spot's respective details page. It will list the spot's details and preview image at the top with a section for reviews at the bottom.

![Spot Detail Page](https://github.com/irelius/AirBnB/blob/main/assets/schema/airbnbspotdetail.png)


## Reviews Section:
Within the reviews section of a spot detail's page there will be reviews loaded from the seeder file to function as example reviews. Depending on whether a user is logged in or not, there will be section to submit/delete a review or to log in.




---

## Future Features:
The Reviews CRUD feature currently does not implement the ability to edit a user's review for a spot.
Implement a function to allow users to upload a photo file to use as a spot's cover photo.
Implement a function to allow users to enter an address to extract location details such as longitude and latitude, instead of having users enter it themselves.
