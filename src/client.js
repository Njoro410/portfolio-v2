import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "2042ao3w", // find this at manage.sanity.io or in your sanity.json
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-07-15"
});