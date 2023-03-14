import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthGuard from '../Components/AdminPanel/Auth'

const Layout = lazy(() => import('../Page/AdminPanel/Sidebar/Layout'))

//Web Panel Routes Define
const Home = lazy(() => import("../Page/WebPanel/Home/Home"));
const About = lazy(() => import("../Page/WebPanel/About/About"));
const Services = lazy(() => import("../Page/WebPanel/Services/Services"));
const MainServices = lazy(() => import("../Page/WebPanel/Services/MainServices"));
const Packages = lazy(() => import("../Page/WebPanel/Packages/Packages"));
const Contact = lazy(() => import("../Page/WebPanel/Contact/Contact"));
const Header = lazy(() => import("../Components/Header/Header"));
const Footer = lazy(() => import("../Components/Footer/Footer"));
const Order = lazy(() => import("../Page/WebPanel/Order/Order"));
const BookOrder = lazy(() => import("../Page/WebPanel/BookOrder/BookOrder"));
const OrderConfirm = lazy(() => import("../Page/WebPanel/OrderConfirm/OrderConfirm"));
const ViewOrder = lazy(() => import("../Page/WebPanel/OrderConfirm/ViewOrder"));
const Partner = lazy(() => import("../Page/Partner/Partner"));
const ChangePassword = lazy(() => import("../Page/ChangePassword"));
const Login = lazy(() => import("../Page/WebPanel/login/Login"));
const Profile = lazy(() => import("../Page/WebPanel/profile/profile"));
const ForgotPassword = lazy(() => import("../Page/ForgotPassword/index"));

// Admin Panel Routes Define
const AdminLogin = lazy(() => import("../Page/AdminPanel/Login"));
const AdminDashboard = lazy(() => import("../Page/AdminPanel/Dashboard"));
const AdminCustomer = lazy(() => import("../Page/AdminPanel/Customer"));
const AdminForgotPassword = lazy(() => import("../Page/AdminPanel/ForgotPassword"))
const AdminChangePassword = lazy(() => import("../Page/AdminPanel/ChangePassword"))
const AdminProfile = lazy(() => import("../Page/AdminPanel/Profile"))
const AdminSidebar = lazy(() => import("../Page/AdminPanel/Sidebar"))
const AdminPartner = lazy(() => import("../Page/AdminPanel/Partner"))
const AdminState = lazy(() => import("../Page/AdminPanel/State"))
const AdminCity = lazy(() => import("../Page/AdminPanel/City"))
const AdminSubCategory = lazy(() => import("../Page/AdminPanel/SubCategory"))
const AdminCategory = lazy(() => import("../Page/AdminPanel/Category"))
const AdminPartnerFaq = lazy(() => import("../Page/AdminPanel/PartnerFaq"))
const AdminCustomerFaq = lazy(() => import("../Page/AdminPanel/CustomerFaq"))
const AdminWhyChooseUs = lazy(() => import("../Page/AdminPanel/WhyChooseUs"))
const AdminOrder = lazy(() => import("../Page/AdminPanel/Orders"))
const AdminService = lazy(() => import("../Page/AdminPanel/Service"))
const AdminPlanApproval = lazy(() => import("../Page/AdminPanel/PlanApproval"))

// Partner Panel Routes Defines
const PartnerLogin = lazy(() => import("../Page/PartnerPanel/Login/Login"));
const PartnerPanelSidebar = lazy(() => import("../Page/PartnerPanel/Sidebar/Sidebar"));
const PartnerDashboard = lazy(() => import("../Page/PartnerPanel/Dashboard/Dashboard"))
const PartnerAvailabilityHours = lazy(() => import("../Page/PartnerPanel/AvailabilityHours/AvailabilityHours"));
const PartnerServiceList = lazy(() => import("../Page/PartnerPanel/ServiceList/ServiceList"));
const PartnerBookingList = lazy(() => import("../Page/PartnerPanel/BookingList/BookingList"));
const PartnerBookingStatus = lazy(() => import("../Page/PartnerPanel/BookingStatus/BookingStatus"));
const PartnerFAQ = lazy(() => import("../Page/PartnerPanel/FAQ/FAQ"));
const PartnerPackage = lazy(() => import("../Page/PartnerPanel/Packages/PackagesPartner"));
const PartnerPayments = lazy(() => import("../Page/PartnerPanel/Payments/Payments"));
const PartnerEarnings = lazy(() => import("../Page/PartnerPanel/Earnings/Earnings"));
const PartnerProfile = lazy(() => import("../Page/PartnerPanel/Profile/Profile"));

const Routing = () => {
    return (
        <Routes>
            <Route path="*" element={
                <>
                    <Header />
                    <Home />
                    <Footer />
                </>
            } />
            <Route path="/" element={
                <>
                    <Header />
                    <Home />
                    <Footer />
                </>
            } />
            <Route path="/about" element={
                <>
                    <Header />
                    <About />
                    <Footer />
                </>
            } />
            <Route path="/services" element={
                <>
                    <Header />
                    <Services />
                    <Footer />
                </>
            } />
            <Route path="/services/main" element={
                <>
                    <Header />
                    <MainServices />
                    <Footer />
                </>
            } />
            <Route path="/packages" element={
                <>
                    <Header />
                    <Packages />
                    <Footer />
                </>
            } />
            <Route path="/contact" element={
                <>
                    <Header />
                    <Contact />
                    <Footer />
                </>
            } />
            <Route path="/become-partner" element={
                <>
                    <Header />
                    <Partner />
                    <Footer />
                </>
            } />
            <Route path="/login" element={
                <>
                    <Header />
                    <Login />
                    <Footer />
                </>
            } />
            <Route path="/profile" element={
                <>
                    <Header />
                    <Profile />
                    <Footer />
                </>
            } />
            <Route path="/order" element={
                <>
                    <Header />
                    <Order />
                    <Footer />
                </>
            } />
            <Route path="/book-order" element={
                <>
                    <Header />
                    <BookOrder />
                    <Footer />
                </>
            } />
            <Route path="/forgot-password" element={
                <>
                    <ForgotPassword />
                </>
            } />
            <Route path="/change-password" element={
                <>
                    <ChangePassword />
                </>
            } />
            <Route path="/order-confirm" element={
                <>
                    <Header />
                    <OrderConfirm />
                    <Footer />
                </>
            } />
            <Route path="/view-order" element={
                <>
                    <Header />
                    <ViewOrder />
                    <Footer />
                </>
            } />

            {/* Partner Panel Routes */}
            <Route path="/partner/*" element={<PartnerLogin />} />
            <Route path="/partner/login" element={<PartnerLogin />} />
            <Route path="/partner/change-password" element={<PartnerPanelSidebar subpage={<Login reset={true} />} />} />
            <Route path="/partner/dashboard" element={<PartnerPanelSidebar subpage={<PartnerDashboard />} />} />
            <Route path="/partner/availability-hours" element={<PartnerPanelSidebar subpage={<PartnerAvailabilityHours />} />} />
            <Route path="/partner/service-list" element={<PartnerPanelSidebar subpage={<PartnerServiceList />} />} />
            <Route path="/partner/booking-list" element={<PartnerPanelSidebar subpage={<PartnerBookingList />} />} />
            <Route path="/partner/booking-status" element={<PartnerPanelSidebar subpage={<PartnerBookingStatus />} />} />
            <Route path="/partner/faq" element={<PartnerPanelSidebar subpage={<PartnerFAQ />} />} />
            <Route path="/partner/packages" element={<PartnerPanelSidebar subpage={<PartnerPackage />} />} />
            <Route path="/partner/payments" element={<PartnerPanelSidebar subpage={<PartnerPayments />} />} />
            <Route path="/partner/earnings" element={<PartnerPanelSidebar subpage={<PartnerEarnings />} />} />
            <Route path="/partner/profile" element={<PartnerPanelSidebar subpage={<PartnerProfile />} />} />

            {/* Admin Routes */}
            <Route path='/admin/*' element={<AdminLogin />} />
            <Route path='/admin/login' element={<AdminLogin />} />
            <Route path='/admin/forgot-password' element={<AdminForgotPassword />} />
            <Route path='/' element={<AuthGuard><Layout /></AuthGuard>}>
                <Route path='/admin/dashboard' element={<AdminSidebar subpage={<AdminDashboard />} />} />
                <Route path='/admin/customer' element={<AdminSidebar subpage={<AdminCustomer />} />} />
                <Route path='/admin/change-password' element={<AdminSidebar subpage={<AdminChangePassword />} />} />
                <Route path='/admin/profile' element={<AdminSidebar subpage={<AdminProfile />} />} />
                <Route path='/admin/partner' element={<AdminSidebar subpage={<AdminPartner />} />} />
                <Route path='/admin/state' element={<AdminSidebar subpage={<AdminState />} />} />
                <Route path='/admin/city' element={<AdminSidebar subpage={<AdminCity />} />} />
                <Route path='/admin/category' element={<AdminSidebar subpage={<AdminCategory />} />} />
                <Route path='/admin/sub-category' element={<AdminSidebar subpage={<AdminSubCategory />} />} />
                <Route path='/admin/customer-faq' element={<AdminSidebar subpage={<AdminCustomerFaq />} />} />
                <Route path='/admin/partner-faq' element={<AdminSidebar subpage={<AdminPartnerFaq />} />} />
                <Route path='/admin/why-choose-us' element={<AdminSidebar subpage={<AdminWhyChooseUs />} />} />
                <Route path='/admin/orders' element={<AdminSidebar subpage={<AdminOrder />} />} />
                <Route path='/admin/service' element={<AdminSidebar subpage={<AdminService />} />} />
                <Route path='/admin/plan-approval' element={<AdminSidebar subpage={<AdminPlanApproval />} />} />
            </Route>
        </Routes>
    )
}

export default Routing;