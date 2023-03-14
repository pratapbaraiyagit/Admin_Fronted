import { TiEdit } from 'react-icons/ti'
import { RiDeleteBin7Fill } from 'react-icons/ri'
export const CityData = [
    {
        id: "1",
        thead: [{name:'City ID',sort:true}, {name:'City Name',sort:true}, {name:'Action',sort:false}],
        tbody: [
            {
                id: '1',
                'City ID':'100',
                'City Name':'Surat',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
            {
                id: '2',
                'City ID':'101',
                'City Name':'Baroda',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
            {
                id: '3',
                'City ID':'103',
                'City Name':'Mumbai',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '4',
                'City ID':'104',
                'City Name':'Bihar',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '5',
                'City ID':'105',
                'City Name':'Vapi',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '6',
                'City ID':'106',
                'City Name':'Anand',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '7',
                'City ID':'107',
                'City Name':'Valsad',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            },
        ]
    }
]
export const stateList =[
   { id:1,name:"Andaman and Nicobar Islands"},
   { id:2,name:"Andhra Pradesh"},
   { id:3,name:"Arunachal Pradesh"},
   { id:4,name:"Assam"},
   { id:5,name:"Bihar"},
   { id:6,name:"Chandigarh"},
   { id:7,name:"Chhattisgarh"},
   { id:8,name:"Dadra and Nagar Haveli"},
   { id:9,name:"Daman and Diu"},
   { id:10,name:"Delhi"},
   { id:11,name:"Goa"},
   { id:12,name:"Gujarat"},
   { id:13,name:"Haryana"},
   { id:14,name:"Himachal Pradesh"},
   { id:15,name:"Jammu and Kashmir"},
   { id:16,name:"Jharkhand"},
   { id:17,name:"Karnataka"},
   { id:18,name:"Kerala"},
   { id:19,name:"Ladakh"},
   { id:20,name:"Lakshadweep"},
   { id:21,name:"Madhya Pradesh"},
   { id:22,name:"Maharashtra"},
   { id:23,name:"Manipur"},
   { id:24,name:"Meghalaya"},
   { id:25,name:"Mizoram"},
   { id:26,name:"Nagaland"},
   { id:27,name:"Odisha"},
   { id:28,name:"Puducherry"},
   { id:29,name:"Punjab"},
   { id:30,name:"Rajasthan"},
   { id:31,name:"Sikkim"},
   { id:32,name:"Tamil Nadu"},
   { id:33,name:"Telangana"},
   { id:34,name:"Tripura"},
   { id:35,name:"Uttar Pradesh"},
   { id:36,name:"Uttarakhand"},
   { id:37,name:"West Bengal"}
]

export const serviceMapping = [
    {
        id:'101',
        category:'Salon Home',
        details:'',
        subCategory:[
           { 
                id:'s101',
                name:'Men Salon',
                serviceInfo:[
                    {
                        id:'101210',
                        title:'Hair Cut',
                        cities:['Surat','Mumbai'],
                    },
                    {
                        id:'101210',
                        title:'Hair Color',
                        cities:['Surat','Mumbai'],
                    },
                    {
                        id:'101210',
                        title:'Hair Spa',
                        cities:['Surat','Mumbai'],
                    },
                ]
            },
            { 
                id:'s102',
                name:'Women Salon',
                serviceInfo:[
                    {
                        id:'101210',
                        title:'Hair Cut',
                        cities:['Surat','Mumbai'],
                    },
                    {
                        id:'101210',
                        title:'Hair Color',
                        cities:['Surat','Mumbai'],
                    },
                    {
                        id:'101210',
                        title:'Hair Spa',
                        cities:['Surat','Mumbai'],
                    },
                ]
            }
        ]
    },
    {
        id:'102',
        category:'Painting',
        details:'',
        subCategory:[
           { 
                id:'s101',
                name:'House Painting',
                serviceInfo:[
                    {
                        id:'101210',
                        title:'House Color',
                        cities:['Surat','Mumbai','Vapi'],
                    },
                ]
            },
            { 
                id:'s102',
                name:'Vehicle painting',
                serviceInfo:[
                    {
                        id:'101210',
                        title:'Car Painting',
                        cities:['Valsad','Vadodara'],
                    },
                    {
                        id:'101210',
                        title:'Bike Painting',
                        cities:['Surat','Mumbai','Vapi','Valsad'],
                    },
                ]
            }
        ]
    },
]