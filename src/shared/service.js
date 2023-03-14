import { TiEdit } from 'react-icons/ti'
import { RiDeleteBin7Fill } from 'react-icons/ri'
export const services = [
    {
        id: "1",
        thead: [
            { name: 'Service Id', sort: true },
            { name: 'Name', sort: true },
            { name: 'Category', sort: false },
            { name: 'Description', sort: false },
            { name: 'Sub Category', sort: false },
            { name: 'City List', sort: true },
            { name: 'Status', sort: false },
            { name: 'Amount', sort: true },
            { name: 'Action', sort: false }],
        tbody: [
            {
                'Service Id': '101',
                Name: 'house cleaning',
                Category: 'cleaning',
                Description: 'It Provides all types of house cleaning services',
                CategoryId: 'C101',
                SubcategoryId: 'C101',
                'Sub Category': 'cleaning',
                'City List': 'surat,vadodara,mumbai',
                Status: 'Enable',
                Amount: '1500',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
            {
                'Service Id': '102',
                Name: 'Office cleaning',
                Category: 'cleaning',
                Description: 'It Provides all types of office cleaning services',
                CategoryId: 'C102',
                SubcategoryId: 'C103',
                'Sub Category': 'cleaning',
                'City List': 'mumbai,vadodara',
                Status: 'Disable',
                Amount: '500',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
            {
                'Service Id': '103',
                Name: 'car repairing',
                Category: 'mechanical',
                Description: 'It Provides all types of mechanical services',
                CategoryId: 'C103',
                SubcategoryId: 'C100',
                'Sub Category': 'mechanical',
                'City List': 'surat,bhavnagar,vadodara,mumbai',
                Status: 'Disable',
                Amount: '700',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
            {
                'Service Id': '104',
                Name: 'Car painting',
                Category: 'painting',
                Description: 'It Provides all types of house painting services',
                CategoryId: 'C104',
                SubcategoryId: 'C102',
                'Sub Category': 'painting',
                'City List': 'surat',
                Status: 'Enable',
                Amount: '2000',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
            {
                'Service Id': '105',
                Name: 'Car Cleaning',
                Category: 'Cleaning',
                Description: 'It Provides all types of car services',
                CategoryId: 'C101',
                SubcategoryId: 'C101',
                'Sub Category': 'Cleaning',
                'City List': 'mumbai,vadodara',
                Status: 'Disable',
                Amount: '900',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }
        ]
    }
]
export const singleService = {
    ServiceId: '105',
    Name: 'Car Cleaning',
    Category: 'Cleaning',
    CategoryId: 'C101',
    SubcategoryId: 'C101',
    SubCategory: 'Cleaning',
    CityList: 'mumbai,vadodara',
    Status: 'Disable',
    amount: '1500'
}