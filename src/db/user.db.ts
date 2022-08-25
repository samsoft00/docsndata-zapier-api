import dayjs from 'dayjs';

interface Team {
    id: string;
    name: string;
}

interface User {
    id: string
    email: string
    name?: string
    teamId: string
    isAdmin?: boolean,
    created_date: Date;
    updated_date: Date;    
}

export const teams: Team[] = [
    { id: 'b11d89646088d87408ebfa759a10bd8a', name: 'Sam\'s Cookie Shop' }
]

export const users: User[] = [
    {
        id: '98b669b3801be7fc9d3126d25b1a2538',
        name: 'Mike Hogan',
        email: 'polygon@xender.io',
        teamId: teams[0].id,
        isAdmin: true,
        created_date: dayjs().toDate(),
        updated_date: dayjs().toDate()        
    }
]