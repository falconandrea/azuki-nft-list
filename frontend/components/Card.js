import Image from 'next/image'

export function Card({nft}) {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg">
            <a href={nft.link} target='_blank'>
              {nft.image && (
                <Image className="block h-auto w-full" alt={`#${nft.id}`} loading="lazy" width={150} height={150} src={nft.image} />
              )}
            </a>

            <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href={nft.link} target='_blank'>
                        Azuki #{nft.id}
                    </a>
                </h1>
            </div>
        </article>
    </div>
  )
}
