import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header
      className="relative flex items-center justify-between border-b
        border-stone-200 bg-yellow-400 px-4 py-3 md:py-6 uppercase sm:px-6"
    >
      <Link to="/" className="tracking-widest">
        Big Pizza Co.
      </Link>

      <div
        className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2
          md:-translate-y-1/2"
      >
        <SearchOrder />
      </div>

      <Username />
    </header>
  );
}

export default Header;
