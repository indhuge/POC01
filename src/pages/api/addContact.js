const { addContactToList } = require("../../utils/mailChimp");

export default async function addContact(req, res) {
  const { email } = req.body;

  try {
    const response = await addContactToList(email);
    res.status(201).json({ id: response.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
