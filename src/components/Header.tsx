
export default function Header() {
  return (
    <header className="">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center justify-center  w-full">
          <img src='src/img/KroweLogo.png' alt='krowe logo' className='h-12 w-auto align'></img>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">          </button>
        </div>
      </nav>
    </header>
  );
}
