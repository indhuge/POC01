import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";

import { createClient } from "../../prismicio";

export default async (req, res) => {
  const client = createClient({ req });
  setPreviewData({ req, res });
  await redirectToPreviewURL({ req, res, client });
};
