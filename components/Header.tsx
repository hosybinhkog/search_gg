import { ViewGridIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <header className="flex w-fukk p-5 justify-between items-center text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        <Avatar url="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf21c2ee30c00121a/627cbc382b67610d5673246f/GettyImages-1347553871.jpg" />
      </div>
    </header>
  );
};

export default Header;
