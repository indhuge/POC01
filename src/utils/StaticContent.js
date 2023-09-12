import { createClient } from "@/prismicio";

export var StaticContent = null;

export async function setContentAndReturnPage() {
  let temp = {};
  const page = await createClient().getSingle("homepage");
  Object.keys(page.data).forEach((k) => {
    if (k != "Slices") temp[k] = page.data[k];
  });
  StaticContent = temp;
  return page;
}
