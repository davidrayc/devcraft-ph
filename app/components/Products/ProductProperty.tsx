export default function ProductProperty({ label }: { label: string | number }) {
    return (
        <li className="px-4 border border-collapse border-black h-full flex items-center flex-wrap font-bold">{label}</li>
    )
}