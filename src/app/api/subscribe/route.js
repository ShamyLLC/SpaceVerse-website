import { headers } from 'next/headers'
const hubspot = require('@hubspot/api-client')

export async function POST(request) {
  const body = await request.json()
  const headersList = headers()
  const referer = headersList.get('referer')
  const firstname = body.firstname
  const email = body.email
  const pageUri = 'https://space-verse-website.vercel.app/'

  const properties = {
    email,
    firstname,
  }

  const SimplePublicObjectInputForCreate = { properties, associations: [] }

  try {
    const hubspotClient = new hubspot.Client({
      accessToken: 'pat-na1-5f54fa60-5c78-4181-be90-9e73b10be6f8',
    })

    const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
      email: email,
    })

    const filteredresult =
      searchResponse &&
      searchResponse.results.find((item) => item.properties.email === email)

    if (filteredresult) {
      console.log('Email exists in filteredresult:', email)
      return new Response(
        JSON.stringify({ message: 'Email already exists in waitlist' }),
        {
          status: 200,
          headers: { referer: referer },
        },
      )
    } else {
      console.log('Email does not exist in filteredresult:', email)
      const apiResponse = await hubspotClient.crm.contacts.basicApi.create(
        SimplePublicObjectInputForCreate,
      )

      console.log(JSON.stringify(apiResponse, null, 2))

      return new Response(
        JSON.stringify({ message: 'waitlist created successfully' }),
        {
          status: 200,
          headers: { referer: referer },
        },
      )
    }
  } catch (e) {
    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)

    // Return an error response
    return new Response(
      JSON.stringify({ error: 'Failed to create/update waitlist' }),
      {
        status: 500,
        headers: { referer: referer },
      },
    )
  }
}


