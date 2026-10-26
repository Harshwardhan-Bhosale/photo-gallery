import { useState, useCallback, useMemo, useReducer, useEffect } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";
import { RiSearchLine } from "@remixicon/react";

const STORAGE_KEY = "gallery:favourites";

//usereducer
function favouritesReducer(state, action) {
    switch (action.type) {
        case "TOGGLE":
            return state.includes(action.id)
                ? state.filter((id) => id !== action.id)
                : [...state, action.id];
        default:
            return state;
    }
}

function loadFavourites() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
}

export default function Gallery() {
    const { photos, loading, error } = useFetchPhotos();
    const [query, setQuery] = useState("");
    const [favourites, dispatch] = useReducer(favouritesReducer, [], loadFavourites);


    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    }, [favourites]);

   // useCallback
    const handleSearch = useCallback((e) => {
        setQuery(e.target.value);
    }, []);

    const handleToggle = useCallback((id) => {
        dispatch({ type: "TOGGLE", id });
    }, []);

    //usememo
    const filteredPhotos = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return photos;
        return photos.filter((p) => p.author.toLowerCase().includes(q));
    }, [photos, query]);

    return (
        <>
            <header className="sticky top-0 z-10 border-b border-stone-200 bg-blue-300 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold tracking-tight text-blue-700 sm:text-3xl">
                        Photo gallery
                    </h1>

                    <div className="relative w-full sm:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                            Search by author
                        </label>
                        <RiSearchLine
                            size={16}
                            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-400"
                        />
                        <input
                            id="search"
                            type="search"
                            value={query}
                            onChange={handleSearch}
                            placeholder="Search by author"
                            className="w-full rounded-full border border-stone-300 bg-white py-2.5 pl-10 pr-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                        />
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {loading && (
                    <div className="flex justify-center py-32" role="status">
                        <div className="h-10 w-10 animate-spin rounded-full border-4 border-stone-200 border-t-indigo-600" />
                        <span className="sr-only">Loading photos</span>
                    </div>
                )}

                {error && !loading && (
                    <p
                        role="alert"
                        className="mx-auto max-w-lg rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700"
                    >
                        Couldnt load photos: {error}. Check your connection and refresh the page.
                    </p>
                )}

                {!loading && !error && filteredPhotos.length === 0 && (
                    <p className="py-24 text-center text-stone-500">
                        No photos by “{query}”. Try a different author name.
                    </p>
                )}

                {!loading && !error && filteredPhotos.length > 0 && (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {filteredPhotos.map((photo) => (
                            <PhotoCard
                                key={photo.id}
                                photo={photo}
                                isFavourite={favourites.includes(photo.id)}
                                onToggle={handleToggle}
                            />
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}