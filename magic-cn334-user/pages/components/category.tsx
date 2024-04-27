import { CardCategory } from "./CardCategory";


export const Category = () => {
    return (
        <div className="flex">
            {Array.from({length: 4}).map((_, i) => (
                <CardCategory key={i} />
            ))}
        </div>
    );
}