
import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon, HeartIcon, RssIcon } from '@heroicons/react/outline';

function Sidebar() {
    return (
        <div>
            <div className="p-5 text-sm border-r border-gray-900">
                <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer text-gray-500">
                    <HomeIcon className="h-5" />
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer text-gray-500">
                    <SearchIcon className="h-5" />
                    <p>Search</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer text-gray-500">
                    <LibraryIcon className="h-5" />
                    <p>Your Library</p>
                </button>
                <hr className="border-t-[0,1px] border-gray-900"/>
                <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer text-gray-500">
                    <PlusCircleIcon className="h-5" />
                    <p>Create Playlist</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer text-gray-500">
                    <HeartIcon className="h-5" />
                    <p>Liked Songs</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer text-gray-500">
                    <RssIcon className="h-5" />
                    <p>Your Episodes</p>
                </button>
                <hr className="border-t-[0,1px] border-gray-900"/>
            </div>
        </div>
    )
}

export default Sidebar
