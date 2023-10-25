import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import Fuse from "fuse.js";
import { SearchBar } from "../../components/SearchBar";
import { SongTable } from "../../components/SongTable";
import data from "../../assets/spotify-tracks.json";
import { ISong } from "../../types/song";

const songs = data as ISong[];

export const SongList = () => {
    const [search, setSearch] = useState("");
    const [mode, setMode] = useState<'first100' | 'all'>("first100");

    let uniqueSongs = songs.reduce((acc: ISong[], song: ISong) => {
        const found = acc.find((item) => item.track_id === song.track_id);
    
        if (!found) {
            acc.push(song);
        }
    
        return acc;
    }, []);

    if (mode === 'first100') {
        uniqueSongs = uniqueSongs.slice(0, 100);
    }

    const fuse = new Fuse(uniqueSongs, {
        keys: ['track_name', 'track_artist'],
        ignoreLocation: true,
        threshold: 0.3,
        shouldSort: true,
    });

    const result = search ? fuse.search(search).map(x => x.item) : uniqueSongs;

    return (
        <Card className="mt-8 mb-8">
            <CardHeader>
                <SearchBar 
                    search={search} 
                    onSearchChange={(value) => setSearch(value)} 
                    mode={mode}
                    onModeChange={(mode) => setMode(mode)}
                />
            </CardHeader>
            <CardBody>
                <SongTable 
                    songs={result} 
                />
            </CardBody>
        </Card>
    );
};