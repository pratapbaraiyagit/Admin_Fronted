import { MdDesignServices, MdOutlineDashboard } from 'react-icons/md'
import { FaQrcode, FaHandsHelping, FaCity, FaQuestion } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { ImUsers } from 'react-icons/im'
import { BiCategoryAlt } from 'react-icons/bi';
import { GoChecklist } from 'react-icons/go'

export const DrawerScreens = [
    {
        id: '1',
        name: 'Dashboard',
        path: '/admin/dashboard',
        icon: MdOutlineDashboard
    },
    {
        id: '2',
        name: 'Customer',
        path: '/admin/customer',
        icon: ImUsers
    },
    {
        id: '3',
        name: 'Category',
        path: '/admin/category',
        icon: BiCategoryAlt
    },
    {
        id: '4',
        name: 'Sub Category',
        path: '/admin/sub-category',
        icon: BiCategoryAlt
    },
    {
        id: '5',
        name: 'Partner',
        icon: FaHandsHelping,
        submenu: [
            {
                id: "1",
                path: '/admin/partner',
                name: "Partner"
            },
            {
                id: "2",
                path: '/admin/plan-approval',
                name: "Plan Approval"
            }
        ]
    },
    {
        id: '6',
        name: 'Customer FAQ',
        path: "/admin/customer-faq",
        icon: FaQrcode,
    },
    {
        id: '7',
        name: 'Service',
        path: '/admin/service',
        icon: MdDesignServices
    },
    {
        id: '8',
        name: 'State',
        path: '/admin/state',
        icon: FaCity
    },
    {
        id: '9',
        name: 'City',
        path: '/admin/city',
        icon: FaCity
    },
    {
        id: '10',
        name: 'Profile',
        path: '/admin/profile',
        icon: CgProfile
    },
    {
        id: '11',
        name: 'Why Choose Us',
        path: '/admin/why-choose-us',
        icon: FaQuestion
    },
    {
        id: '12',
        name: 'Orders',
        path: '/admin/orders',
        icon: GoChecklist
    }
]
