I've created this app as an example project for a job interview

I chose Next.js as the framework because it was easy to spin up a working dev environment and with a vercel
hobby account I can deploy a working copy to demonstrate the code.  

In its current state there is a single page using a server action so the API key to OpenWeather API is only used
server side.  The form allows the user to enter a city, province, country combination or a zip code.
Also uses browser Geolocation to set lat/lon if now city or zipcode entered.

I have added basic e2e set of cypress tests

Next step is to add component level cypress tests.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
