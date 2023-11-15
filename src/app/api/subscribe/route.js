import { headers } from "next/headers";
const hubspot = require("@hubspot/api-client");

export async function POST(request) {
  const body = await request.json();
  const headersList = headers();
  const referer = headersList.get("referer");
  const email = body.email;
  const fullName = body.fullName;

  const accessToken = process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN;
  const PageUrl = "Page url here";

  const properties = {
    email,
    firstname: fullName.split(" ")[0],
    lastname: fullName.split(" ").slice(1).join(" "),
    website: PageUrl,
  };

  const SimplePublicObjectInputForCreate = { properties, associations: [] };

  try {
    const hubspotClient = new hubspot.Client({
      accessToken: { accessToken },
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
