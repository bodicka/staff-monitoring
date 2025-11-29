export type HeaderDataType = {
    id: number;
    headerLink: string;
    href: string
}

export type EmployeeDataType = {
    id: number;
    name: string;
    position: string;
    status: 'online' | 'offline' | 'on-breake' | 'in-meeting';
    avatarUrl: string;
    lastActive: string;
    todayHour: string;
    productivitiyScore: number;
};

