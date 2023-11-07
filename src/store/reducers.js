import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//Calendar
import calendar from "./calendar/reducer"

//chat
import chat from "./chat/reducer"

//contacts
import contacts from "./contacts/reducer"

//tasks
import tasks from "./tasks/reducer"

//assets
import assets from "./assets/reducer"

//laptops
import laptops from "./laptops/reducer"

// licenses
import licenses from "./licenses/reducer"

// headphones
import headphones from "./headphones/reducer"

// keyboards
import keyboards from "./keyboards/reducer"

// mouses
import mouses from "./mouses/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  calendar,
  chat,
  tasks,
  contacts,
  assets,
  laptops,
  licenses,
  headphones,
  keyboards,
  mouses,
})

export default rootReducer
