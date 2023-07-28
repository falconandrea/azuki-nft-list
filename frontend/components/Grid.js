import React, { useEffect, useState } from 'react'
import { Card } from "./Card"
import { Loading } from './Loading'
import { BackToTop } from './BackToTop'
import { ModalFilters } from './ModalFilters'

const getData = async () => {
  const response = await fetch("/api/getData", {
    method: "POST",
    body: JSON.stringify({filters: []}),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  });
  return response.json();
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
        <ModalFilters filters={filters} setNfts={setNfts} setLoading={setLoading} />

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
