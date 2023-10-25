import { PlayIcon } from "@heroicons/react/24/outline";
import { ISong } from "../../types/song";

export interface ISongItemProps {
    song: ISong;
    onSelect: (song: ISong) => void;
}

export const SongItem: React.FC<ISongItemProps> = ({ song, onSelect }) => {
    return (
        <div 
            className="group py-2 px-4 w-full rounded-lg cursor-pointer hover:bg-slate-100 flex items-center justify-between" 
            onClick={() => onSelect(song)}
        >
            <div>
                <p className="font-lg font-medium">{song.track_name}</p>
                <p className="font-md font-light">{song.track_artist}</p>
            </div>
            <div className="opacity-0 group-hover:opacity-100">
                <PlayIcon className="w-6 h-6" />
            </div>
        </div>
    );
};