import { createClient } from "@/prismicio";

export var StaticContent = {};

export async function setContentAndReturnPage() {
  const page = await createClient().getSingle("homepage");
  Object.keys(page.data).forEach((k) => {
    if (k != "Slices") StaticContent[k] = page.data[k];
  });
  return page;
}
