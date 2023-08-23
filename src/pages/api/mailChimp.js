import mailChimp from "@mailchimp/mailchimp_marketing"

mailChimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_API_SERVER
})

export default async (req, res) => {
      const {email, name} = req.body

      if(!email)
            return res.status(400).json({error: "Email is required"})
      try {
            await mailChimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
                  email_address: email,
                  status: 'subscribed'
            });
            return res.status(201).json({error : ""})
      }
      catch(err)
      {
            return res.status(500).json({error : err.message})
      }
}