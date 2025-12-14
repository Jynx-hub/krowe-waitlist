import KroweLogo from "/public/KroweLogo.png";

export default function Header() {
  return (
    <header className="">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center justify-center  w-full">
         <img src={KroweLogo} alt="Krowe Logo" className="h-16 w-auto align" />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">          </button>
        </div>
      </nav>
    </header>
  );
}
