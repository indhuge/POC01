const mailChimp = require("@mailchimp/mailchimp_marketing");

mailChimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

const event = {
  name: "Main",
};

const footerContactInfo = {
  company: "IndHUGE",
  address1: "",
  address2: "",
  city: "Dois Vizinhos",
  state: "PR",
  zip: "85660-000",
  country: "BR",
};

const campaignDefaults = {
  from_name: "Gettin' Together",
  from_email: "indhuge@gmail.com",
  subject: "Newsletter",
  language: "PT_BR",
};

export default async function addContact(req, res) {
  const { email } = req.body;
  try {
    const response = await mailChimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "pending",
      }
    );
    res.status(201).json({id: response.id})
  } catch (err) {
      res.status(500).json(JSON.parse(err.response.text));
  }
}
