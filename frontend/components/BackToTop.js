export function BackToTop() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function goToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button id="to-top-button" onClick={goToTop} title="Go To Top"
        className="fixed z-90 bottom-8 right-8 border-0 w-8 h-8 rounded-full drop-shadow-md bg-red-700 text-white text-xl font-bold">&uarr;</button>
  )
}
