import Image from 'next/image'
import styles from './Header.module.css'

export function Header() {
  return (
    <div id="header" className={`w-full`}>
      <div className={`${styles.backgroundImage} py-4 text-center text-xl`}>
        <div className={'bg-white w-1/3 mx-auto p-4 opacity-70'}>
          <h4 className={`font-bold text-2xl`}>Azuki Collection</h4>
          <div id="socials" className={"flex w-full mt-4 text-center gap-x-4 items-center justify-center"}>
            <a href="https://etherscan.io/address/0xed5af388653567af2f388e6224dc7c4b3241c544" title="" target="_blank">
              <Image src="/icons/etherscan.png" alt="" width={20} height={20} />
            </a>
            <a href="https://www.azuki.com" title="" target="_blank">
              <Image src="/icons/website.png" alt="" width={20} height={20} />
            </a>
            <a href="https://discord.gg/azuki" title="" target="_blank">
              <Image src="/icons/discord.png" alt="" width={20} height={20} />
            </a>
            <a href="https://instagram.com/azuki" title="" target="_blank">
              <Image src="/icons/instagram.png" alt="" width={20} height={20} />
            </a>
            <a href="https://www.twitter.com/Azuki" title="" target="_blank">
              <Image src="/icons/twitter.png" alt="" width={20} height={20} />
            </a>
          </div>
          <a href="https://github.com/falconandrea" title="" target="_blank" className={`mt-4 block underline text-sm`}>Page created by Andrea Falcon</a>
        </div>
      </div>
    </div>
  )
}
