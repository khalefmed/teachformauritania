import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'w7grvek7', 
  dataset: 'teachformauritania', 
  useCdn: false, 
  token : "sk81E96jfw1pauBOBZJ0d4Tx3bunnfs5OqbpVHeHvHjVjyZbfaP2jN9LVgELdkjljwHPDYKB77324zuZDQBpLTwP61vb9DsVvJXsGWSVrRJYtaeaQYfKbS2HroelxNXBqRLhmtMls3o4ReujeOLwze04kcqThXeEcK6EUBzj3lUlojeC6xmC",
  apiVersion: '2022-03-25',
});

export default client;