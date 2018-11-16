//import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const GRAPH_CMS_API = "https://api-useast.graphcms.com/v1/cjkhrc6u40y5c01gmlpvsny01/master";

export default () => ({
  // link: new HttpLink({ uri: GRAPH_CMS_API }),
  httpLinkOptions: {
    uri: GRAPH_CMS_API
  },
  cache: new InMemoryCache()
});
