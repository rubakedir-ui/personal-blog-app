import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-[1350px] h-18 px-6 border border-blue-200 rounded-xl bg-gray-500">
    
      <h2 className="text-2xl font-bold">
        Personal Blog
      </h2>

      <div className="flex gap-8">

        <Link 
          to="/"
          className="hover:text-blue-400 transition"
        >
          Home
        </Link>

        <Link 
          to="/create"
          className="hover:text-blue-400 transition"
        >
          Create Post
        </Link>

        <Link 
          to="/bookmarks"
          className="hover:text-blue-400 transition"
        >
          Bookmarks
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;