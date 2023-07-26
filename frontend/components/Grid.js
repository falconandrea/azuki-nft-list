import React, { useEffect, useState } from 'react'
import { Card } from "./Card"
import { Loading } from './Loading'
import { BackToTop } from './BackToTop'
import { ModalFilters } from './ModalFilters'

//import from the generated directory
const graphClient =  require('./../.graphclient')

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
    properties(first: 10, skip: $skip) {
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
    hasItems = false
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

/**
 * Generates a filter list based on the given data.
 *
 * @param {Array} data - The data used to generate the filter list.
 * @return {Object} The filter list containing properties for each trait.
 */
const createFilterList = (data) => {
  // List of all traits
  const properties = ['background', 'clothing', 'ear', 'eyes', 'face', 'hair', 'headgear', 'mouth', 'neck', 'offhand', 'special', 'type']

  const listFilters = {}

  // Map the filters
  data.map((item) => {
    properties.map(prop => {
      if(!listFilters[prop]) listFilters[prop] = []
      if(item[prop] && listFilters[prop].indexOf(item[prop]) == -1) {
        listFilters[prop].push(item[prop])
      }
    })
  })

  // Order properties of each trait
  Object.keys(listFilters).map(prop => {
    // Order
    listFilters[prop].sort()
  })

  return listFilters
}

export function Grid() {
  const [nfts, setNfts] = useState([])
  const [filters, setFilters] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getData().then((data) => {
      setNfts(data)
      const filtersValues = createFilterList(data)
      setFilters(filtersValues)
      setLoading(false)
    })
  }, [])

  return (
    <div id="grid">
      {loading && (
        <Loading />
      )}
      <div className="container mb-12 mt-4 mx-auto px-4 md:px-12">
        {/* Button for show/hide filters */}
        <ModalFilters filters={filters} />

        {/* List NFTs */}
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {nfts.map((nft) => (
            <Card key={nft.id} nft={nft} />
          ))}
        </div>

        <BackToTop />
      </div>
    </div>
  )
}
