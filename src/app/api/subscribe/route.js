import { headers } from "next/headers";
const hubspot = require("@hubspot/api-client");

export async function POST(request) {
  const body = await request.json();
  const headersList = headers();
  const referer = headersList.get("referer");
  const email = body.email;
  const fullName = body.fullName;

  

  const pageUri = 'https://your-waitlist-page-url.com/';

  const properties = {
    email,
    firstname: fullName.split(" ")[0],
    lastname: fullName.split(" ").slice(1).join(" "),
    website: pageUri,
  };

  const SimplePublicObjectInputForCreate = { properties, associations: [] };

  try {
    const hubspotClient = new hubspot.Client({
      accessToken: "pat-na1-6b46a0f5-1d75-4fcc-8b0e-785285508534",
    });
    const apiResponse = await hubspotClient.crm.contacts.basicApi.create(
      SimplePublicObjectInputForCreate
    );
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
  return new Response(
    JSON.stringify({ message: "Contact created successfully" }),
    {
      status: 200,
      headers: { referer: referer },
    }
  );
}
