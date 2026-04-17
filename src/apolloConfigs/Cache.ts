import { InMemoryCache } from "@apollo/client/cache";

const cache = new InMemoryCache({ typePolicies: {} });

export default cache;
