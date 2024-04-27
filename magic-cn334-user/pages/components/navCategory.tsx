export const NavCategory = () => {
    return (
        <div className="flex flex-col">
            <p>Element : </p>
            {Array.from({length: 4}).map((_, i) => (
                <p>* Page {i}</p>
            ))}
        </div>
    );
}