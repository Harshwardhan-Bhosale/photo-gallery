import { RiHeartLine, RiHeartFill } from "@remixicon/react";

export default function PhotoCard({ photo, isFavourite, onToggle }) {
    return (
        <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-indigo-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <img
                src={`https://picsum.photos/id/${photo.id}/600/750`}
                alt={`Photo by ${photo.author}`}
                className="aspect-4/5 w-full bg-stone-200 object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-indigo-950/80 via-indigo-950/30 to-transparent px-4 pb-4 pt-16">
                <p className="truncate text-sm font-medium text-white">{photo.author}</p>
            </div>


            <button
                type="button"
                onClick={() => onToggle(photo.id)}
                title={
                    isFavourite
                        ? `Remove photo by ${photo.author} from favourites`
                        : `Add photo by ${photo.author} to favourites`
                }
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-stone-700 shadow-sm backdrop-blur-md transition hover:bg-white active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
                {isFavourite ? (
                    <RiHeartFill size={20} className="text-rose-500" />
                ) : (
                    <RiHeartLine size={20} />
                )}
            </button>


        </article>
    );
}