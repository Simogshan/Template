import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"
import calendarSaga from "./calendar/saga"
import chatSaga from "./chat/saga"
import tasksSaga from "./tasks/saga"
import contactsSaga from "./contacts/saga"
import assetSaga from "./assets/saga"
import laptopSaga from "./laptops/sagas"
import licenseSaga from "./licenses/sagas"
import headphoneSaga from "./headphones/sagas"
import keyboardSaga from "./keyboards/sagas"
import mouseSaga from "./mouses/sagas"

export default function* rootSaga() {
  yield all([
    //public
    AccountSaga(),
    fork(AuthSaga),
    ProfileSaga(),
    ForgetSaga(),
    fork(LayoutSaga),
    fork(calendarSaga),
    fork(chatSaga),
    fork(tasksSaga),
    fork(contactsSaga),
    assetSaga,
    laptopSaga,
    licenseSaga,
    headphoneSaga,
    keyboardSaga,
    mouseSaga,
  ])
}
