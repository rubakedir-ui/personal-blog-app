import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between w-250 h-25 p-5 border border-blue-200 rounded-xl bg-blue-300">
    
      <h1 className="text-2xl font-bold">
        Personal Blog
      </h1>

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