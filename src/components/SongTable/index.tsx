import { SongItem } from "../SongItem";
import { ISong } from "../../types/song";

export interface ISongTableProps {
    songs: ISong[];
}

export const SongTable: React.FC<ISongTableProps> = ({ songs }) => {
    const onSelect = (song: ISong) => {
        window.open(`http://open.spotify.com/track/${song.track_id}`, '_blank');
    };

    return (
        <>
            {songs.length === 0 && (
                <div className="bg-green-300 text-emerald-700 font-200 py-4 px-8 rounded">
                    <strong>Ops!</strong> No songs found.
                </div>
            )}

            {songs.map((song) => (
                <SongItem key={song.track_id + song.track_album_id} song={song} onSelect={onSelect} />
            ))}
        </>
    );
};