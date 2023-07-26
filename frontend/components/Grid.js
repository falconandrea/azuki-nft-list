import React, { useEffect, useState } from 'react'
import { Card } from "./Card"
import { Loading } from './Loading'
import { BackToTop } from './BackToTop'

//import from the generated directory
const graphClient =  require('./../.graphclient')

const convertIPFSLink = (ipfs) => {
  return ipfs.replace("ipfs://", "https://ipfs.io/ipfs/");
}

const getOpenseaLink = (id) => {
  return 'https://opensea.io/assets/ethereum/0xed5af388653567af2f388e6224dc7c4b3241c544/' + id
}

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

export function Grid() {
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getData().then((data) => {
      setNfts(data)
      console.log(data[0])
      setLoading(false)
    })
  }, [])

  return (
    <div id="grid">
      {loading && (
        <Loading />
      )}
      <div className="container my-12 mx-auto px-4 md:px-12">
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
