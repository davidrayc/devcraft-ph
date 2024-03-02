import SideNavBar from '@/app/components/SideNavBar/SideNavBar';
import {
    Archive,
    File,
    Files,
    LayoutDashboard,
    LogOut,
    Package,
} from 'lucide-react';
const links = [
    {
        name: 'dashboard',
        icon: LayoutDashboard,
    },
    {
        name: 'products',
        icon: Package,
    },
    {
        name: 'orders',
        icon: File,
    },
    {
        name: 'inventory',
        icon: Archive,
    },
    {
        name: 'reports',
        icon: Files,
    },
    {
        name: 'logout',
        icon: LogOut,
    },
];

//THIS SIDE NAV IS HERE JUST FOR TESTING
//NEEDS TO RELOCATE TO LAYOUT
//BUT I DONT HAVE THE .ENV FILE GITHUB_ID AND GITHUB_SECRET TO TEST INSIDE THE PRIVATE FOLDER
export default function TestNav() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200">
            <SideNavBar links={links} />
            <div className="absolute left-1/2 top-[calc(50%-0.75rem)] flex flex-col text-center">
                SIDE NAVBAR
                <p className="block text-slate-200 underline">Log In</p>N
            </div>
        </div>
    );
}
