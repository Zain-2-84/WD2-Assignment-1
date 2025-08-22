export function Heading( {children }) {
    return (
        <h1
            className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight row-span-full"
        >
            { children }
        </h1>
    );
}