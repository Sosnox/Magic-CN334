import { CardCategory } from "./CardCategory";


export const Category = () => {
    return (
        <div className="grid grid-cols-5 gap-10 my-4">
            {Array.from({length: 20}).map((_, i) => (
                <CardCategory key={i} />
            ))}
        </div>
    );
}