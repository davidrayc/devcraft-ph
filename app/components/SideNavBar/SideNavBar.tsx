import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

type NavProps = {
    links: {
        name: string;
        icon: LucideIcon;
    }[];
};

export default function SideNavBar({ links }: NavProps) {
    return (
        <aside className="fixed h-screen w-64 bg-gray-700 text-slate-200">
            <div className="p-4">
                <h1 className="mb-4 text-2xl font-semibold">Discord APP</h1>
                <nav className="grid gap-1 px-2">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={'/' + link.name} // Use "/" or "#" based on your routing configuration
                            className="flex items-center pt-1"
                        >
                            <link.icon className="mr-1 h-5 w-5" />
                            <span className="text-lg font-medium capitalize">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
