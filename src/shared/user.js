export const UserData = [
    {
        id: "1",
        thead: [{ name: 'Customer Id', sort: true }, { name: 'FullName', sort: true }, { name: 'Email', sort: true }, { name: 'Contact', sort: false }, { name: 'City', sort: true }],
        tbody: [
            {
                id: '1',
                'Customer Id': '101',
                FullName: 'Risha',
                Email: 'risha@gmail.com',
                Contact: '6523658953',
                City: 'surat'
            },
            {
                id: '2',
                'Customer Id': '102',
                FullName: 'Neha',
                Email: 'neha@gmail.com',
                Contact: '6578541256',
                City: 'Mumbai'
            },
            {
                id: '3',
                'Customer Id': '103',
                FullName: 'Anjani',
                Email: 'anjani@gmail.com',
                Contact: '8923658953',
                City: 'surat'
            },
            {
                id: '4',
                'Customer Id': '104',
                FullName: 'kenil',
                Email: 'kenil@gmail.com',
                Contact: '7893658953',
                City: 'Baroda'
            },
            {
                id: '5',
                'Customer Id': '105',
                FullName: 'Joshna',
                Email: 'joshna@gmail.com',
                Contact: '8547658953',
                City: 'Mumbai'
            },
        ]
    }
]

export const singleUser = {
    name: 'Nayani Risha',
    email: 'risha@gmail.com',
    contact: '9865896325',
    shippingAdd: { house: '501,Inder Palace', road: 'Devdas x-road,', area: 'Boriwali west', city: 'Mumbai' },
    billingAdd: { house: '501,Inder Palace', road: 'Devdas x-road,', area: 'Boriwali west', city: 'Mumbai' },
    // shippingAdd:'301,Inder Palace, devdas x-road, boriwali west, mumbai',
    // billingAdd:'301,Inder Palace, devdas x-road, boriwali west, mumbai',
    city: 'surat',
    totalOrders: '50'
}
export const partnerData = [
    {
        id: "1",
        thead: [
            { name: 'Partner Id', sort: true },
            { name: 'FullName', sort: true },
            { name: 'Email', sort: true },
            { name: 'Contact', sort: false },
            { name: 'City', sort: true },
            { name: 'Services', sort: false },
            { name: 'Rating', sort: false },
            { name: 'Action', sort: false }
        ],
        tbody: [
            {
                id: '1',
                'Partner Id': '101',
                FullName: 'Risha',
                Email: 'risha@gmail.com',
                Contact: '6523658953',
                City: 'surat',
                Services: 'Cleaning, Painting',
                Rating: '5',
                Action: 'View',
            },
            {
                id: '2',
                'Partner Id': '102',
                FullName: 'Neha',
                Email: 'neha@gmail.com',
                Contact: '6578541256',
                City: 'Mumbai',
                Services: 'Mechanical, House Painting',
                Rating: '4',
                Action: 'View',
            },
            {
                id: '3',
                'Partner Id': '103',
                FullName: 'Anjani',
                Email: 'anjani@gmail.com',
                Contact: '8923658953',
                City: 'surat',
                Services: 'Car Repairing',
                Rating: '3.5',
                Action: 'View',
            },
            {
                id: '4',
                'Partner Id': '104',
                FullName: 'kenil',
                Email: 'kenil@gmail.com',
                Contact: '7893658953',
                City: 'Baroda',
                Services: 'House Painting',
                Rating: '3',
                Action: 'View',
            },
            {
                id: '5',
                'Partner Id': '105',
                FullName: 'Joshna',
                Email: 'joshna@gmail.com',
                Contact: '8547658953',
                City: 'Mumbai',
                Services: 'Mechanical',
                Rating: '2.5',
                Action: 'View',
            },
        ]
    }
]
export const singlePartner = {
    PartnerId: '105',
    FullName: 'Joshna',
    Email: 'joshna@gmail.com',
    Contact: '8547658953',
    City: 'Mumbai',
    Services: 'Mechanical',
    Rating: '2.5',
    Action: 'View',
    currentAdd: { house: '104,Avalon height', road: 'Dabholi Road,', area: 'Katargam', city: 'Surat' },
    permanentAdd: { house: '104,Avalon height', road: 'Dabholi Road,', area: 'Katargam', city: 'Surat' },
    // currentAdd:'104,Avalon heights, dabholi road, katargam,surat',
    // permanentAdd:'104,Avalon heights, dabholi road, katargam,surat',
    commissionType: 'Global',
    commissionAmt: '150',
    adharCard: 'img',
    pancard: 'img',
    totalOrders: '20'
}