# BettrBartr

![Image of BettrBartr](https://github.com/btrbrtrlilfoot/capstoneproject/blob/master/public/BettrBartr%20(18).png)

BettrBartr is a web application built with Angular, Typescript, Bootstraps, Node.js, Express, Javascript, Sequelize and PostgreSQL. It aims to give users the ability to "barter" with their local community, recycling items and services amongst themselves through an auction-based system. This served as our team's Capstone Project while studying at GraceHopper's 17-week Fullstacks Immersive. 

You can check out the deployed version of our app [here!](https://btr-bartr.herokuapp.com/)

## Installation

1. Please run 

```
npm install 
```

2. Create and seed the database

```
createdb barterapp
npm run seed
```

3. Run 

```
npm run start-dev 
```

## Dependencies
Please create a secrets folder in the root:
```
process.env.GOOGLE_MAPS_API = "Enter API Key Here"
process.env.TWILIO_ACCOUNT_SID="Enter Account SID Here"
process.env.TWILIO_AUTH_TOKEN="Enter Auth Token Here"
process.env.TWILIO_NUMBER="Enter Number Here"

```

[Google Maps Client Library](https://github.com/googlemaps/google-maps-services-js)
Used to Geocode and Calculate Distances between user locations. 

[Twilio](https://www.twilio.com/sms/api)
Text Notification for users to get notifications on their offer statuses. 

## Usage

Users can: 
1. Sign Up
2. Edit Profile Information
3. Create Auctions
4. Make Offers on Auctions 
5. Accept Offers on Auctions
6. Keep Track of Personal Site History 
7. Search for Other User Auctions 

## Team

[Tashi Gyeltshen](https://github.com/JSAssassin)
[Kiana Wong](https://github.com/kianawong)
[Rachel Taverna](https://github.com/rtaverna)

## Thanks for Checking Out BettrBartr! 

Please feel free to let us know your thoughts, your feelings, your dreams, your complaints...anything that our website manages to evoke! ^^ Happy BettrBartr-ing!
