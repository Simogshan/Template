import React from "react"
import { Redirect } from "react-router-dom"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import ITDashboard from "../pages/Dashboard/IT-Exec"
import HRDashboard from "../pages/Dashboard/HR"
import CEODashboard from "../pages/Dashboard/CEO"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

import AddInventory from "../pages/Inventory/AddInventory"
import AddAssets from "../pages/Assets/AddAssets"
import AssignAssets from "../pages/Assets/AssignAssets"
import AddLicenses from "../pages/License/AddLicenses"
import AddVendors from "../pages/Vendor/AddVendor"

import AddInventoryAlt from "../pages/InventoryAlt/AddInventoryAlt"

//import TabularGridExample from "../pages/License/ListLicenses"

import AssetList from "../pages/Assets/assetList"

import LaptopGrid from "../pages/Grid/Laptops/LaptopGrid"
import HeadphonesGrid from "../pages/Grid/Headphones/HeadphonesGrid"
import AccessoriesGrid from "../pages/Grid/Accessories/AccessoriesGrid"
import LicenseGrid from "../pages/Grid/Licenses/LicenseGrid"
import ServiceListing from "../pages/Grid/Services/ServiceListing"

import ServiceRequestForm from "../pages/Miscellaneous/ServiceRequestForm"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/dashboard/IT-Exec", component: ITDashboard },
  { path: "/dashboard/HR", component: HRDashboard },
  { path: "/dashboard/CEO", component: CEODashboard },

  { path: "/inventory/add", component: AddInventory },

  { path: "/assets/add", component: AddAssets },
  { path: "/assets/assign", component: AssignAssets },

  { path: "/licenses/add", component: AddLicenses },
  //{ path: "/licenses/list", component: TabularGridExample },

  { path: "/vendors/add", component: AddVendors },

  { path: "/list/assets", component: AssetList },

  { path: "/lists/laptops", component: LaptopGrid },
  { path: "/lists/licenses", component: LicenseGrid },
  { path: "/lists/headphones", component: HeadphonesGrid },
  { path: "/lists/accessories", component: AccessoriesGrid },
  { path: "/lists/services", component: ServiceListing },

  { path: "/inventory-alt/add", component: AddInventoryAlt },

  { path: "/service/request", component: ServiceRequestForm },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard/CEO" /> },
]

const authRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

]

export { userRoutes, authRoutes }