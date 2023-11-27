import { headers } from "next/headers";
const hubspot = require("@hubspot/api-client");

export async function POST(request) {
  const body = await request.json();
  const headersList = headers();
  const referer = headersList.get("referer");
  const firstname = body.firstname;
  const email = body.email;
  const message = body.message || "";
  const pageUri = "https://space-verse-website.vercel.app/";
  let apiResponse = {};

  const properties = {
    email,
    firstname,
    message,
  };

  const SimplePublicObjectInputForCreate = { properties, associations: [] };

  try {
    const hubspotClient = new hubspot.Client({
      accessToken: "pat-na1-5f54fa60-5c78-4181-be90-9e73b10be6f8",
    });

    await hubspotClient.crm.contacts.basicApi
      .create(SimplePublicObjectInputForCreate)
      .then((response) => (apiResponse = response))
      .catch((err) => {
        apiResponse = err;
      });
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
  if (apiResponse.code == 409) {
    return new Response(
      JSON.stringify({
        message: "Email already exists in waitlist",
        status: 409,
      }),
      {
        status: 409,
        headers: { referer: referer },
      }
    );
  } else if (apiResponse.code === 500) {
    return new Response(
      JSON.stringify({ message: "Something went wrong!", status: 500 }),
      {
        status: 500,
        headers: { referer: referer },
      }
    );
  } else {
    return new Response(
      JSON.stringify({ message: "Contact created successfully", status: 200 }),
      {
        status: 200,
        headers: { referer: referer },
      }
    );
  }
}
