
//import from the generated directory
const graphClient =  require('./../../.graphclient')

/**
 * Converts an IPFS link to a website link.
 *
 * @param {string} ipfs - The IPFS link to be converted.
 * @return {string} The converted website link.
 */
const convertIPFSLink = (ipfs) => {
  return ipfs.replace("ipfs://", "https://ipfs.io/ipfs/");
}

/**
 * Generates an Opensea link for a given ID.
 *
 * @param {string} id - The ID of the asset.
 * @return {string} The Opensea link for the given ID.
 */
const getOpenseaLink = (id) => {
  return 'https://opensea.io/assets/ethereum/0xed5af388653567af2f388e6224dc7c4b3241c544/' + id
}

/**
 * Fetches the NFTs data.
 *
 * @return {Array} An array of NFTs data.
 */
async function getNFTs(){
  // Query to fetch the nfts data
  const nftsQuery = `
  query ListNFTs($skip: Int = 0) {
    properties(first: 1000, skip: $skip) {
      id
      image
      type
      hair
      headgear
      face
      clothing
      eyes
      mouth
      background
      ear
      offhand
      special
      neck
    }
  }`

  // Loop to get all results
  const allResults = []
  let skip = 0
  let hasItems = true
  do {
    const result = await graphClient.execute(nftsQuery, { skip })
    allResults.push(...result.data.properties)
    skip += 1000
    hasItems = result.data.properties.length > 0
  } while (hasItems)

  return allResults
}

/**
 * Retrieves data and maps some fields.
 *
 * @return {Promise<Array>} The data retrieved from the server.
 */
async function getData(){
  let data = await getNFTs()

  // Order array by id field and return
  data = data.map((item) => ({
    ...item,
    id: parseInt(item.id),
    image: convertIPFSLink(item.image),
    link: getOpenseaLink(item.id)
  })).sort((a, b) => a.id - b.id)

  return data
}

const filterNFTS = (items, filters) => {
  return items.filter((item) => {
    // Check if each filter key matches the corresponding item property
    return Object.keys(filters).every((filterKey) => {
      const itemValue = item[filterKey];
      const filterValues = filters[filterKey];

      // If the filter is an array, check if the item value is included in the filter values
      if (Array.isArray(filterValues)) {
        return filterValues.includes(itemValue);
      }

      // If the filter is not an array, check if the item value is equal to the filter value
      return itemValue === filterValues;
    });
  });
}

export default async function handler(req, res) {
  let nfts = await getData()
  const { filters } = req.body
  if(Object.keys(req.body.filters).length > 0)
    nfts = filterNFTS(nfts, req.body.filters)
  res.status(200).json(nfts);
}
