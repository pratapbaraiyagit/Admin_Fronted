import { TiEdit } from 'react-icons/ti'
import { RiDeleteBin7Fill } from 'react-icons/ri'
export const CategoryData = [
    {
        id: "1",
        thead: [{ name: 'Category Id', sort: true }, { name: 'Category Name', sort: true }, { name: 'Description', sort: false }, { name: 'Status', sort: false }, { name: 'Action', sort: false }],
        tbody: [
            {
                id: '1',
                'Category Id': 'C100',
                'Category Name': 'Plumbing',
                Description: 'Provide Plumbing service',
                Status: 'Enable',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
            {
                id: '2',
                'Category Id': 'C101',
                'Category Name': 'Electrical',
                Description: 'Provide Electrical service',
                Status: 'Disable',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
            // {
            //     id: '3',
            //     'Category Id': 'C102',
            //     'Category Name': 'Mechanical',
            //     Description: 'Provide Mechanical service',
            //     Status: 'Enable',
            //     Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            // }, {
            //     id: '4',
            //     'Category Id': 'C103',
            //     'Category Name': 'Pest Control',
            //     Description: 'Provide Pest Control service',
            //     Status: 'Disable',
            //     Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            // }, {
            //     id: '5',
            //     'Category Id': 'C104',
            //     'Category Name': 'Paint',
            //     Description: 'Provide Paint service',
            //     Status: 'Enable',
            //     Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            // }, {
            //     id: '6',
            //     'Category Id': 'C105',
            //     'Category Name': 'Repairing',
            //     Description: 'Provide Repairing service',
            //     Status: 'Enable',
            //     Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            // },
        ]
    }
]
export const SubCategoryData = [
    {
        id: "1",
        thead: [{ name: 'Category Id', sort: true }, { name: 'Name', sort: true }, { name: 'Category Name', sort: true }, { name: 'Description', sort: false }, { name: 'Status', sort: false }, { name: 'Action', sort: false }],
        tbody: [
            {
                id: '1',
                'Category Id': 'C100',
                Name: 'Pipe Fitting',
                'Category Name': 'Plumbing',
                Description: 'Provide Plumbing service',
                Status: 'Enable',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
            {
                id: '2',
                'Category Id': 'C101',
                Name: 'Wire Fitting',
                'Category Name': 'Electrical',
                Description: 'Provide Electrical service',
                Status: 'Enable',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
            {
                id: '3',
                'Category Id': 'C102',
                Name: 'Car Repairing',
                'Category Name': 'Mechanical',
                Description: 'Provide Mechanical service',
                Status: 'Enable',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '4',
                'Category Id': 'C103',
                Name: 'House Pest Control',
                'Category Name': 'Pest Control',
                Description: 'Provide pest control service',
                Status: 'Disable',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '5',
                'Category Id': 'C104',
                Name: 'Car Painting',
                'Category Name': 'Paint',
                Description: 'Provide painting service',
                Status: 'Disable',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '6',
                'Category Id': 'C105',
                Name: 'Bike Repairing',
                'Category Name': 'Repairing',
                Description: 'Provide repairing services',
                Status: 'Enable',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
        ]
    }
]