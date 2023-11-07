import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar className="vertical-simplebar" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">

            <li className="menu-title">{props.t("Menu")} </li>

            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="mdi mdi-airplay"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/dashboard/HR">{props.t("HR")}</Link></li>
                <li><Link to="/dashboard/IT-Exec">{props.t("IT-Executive")}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="waves-effect">
                <i className="mdi mdi-plus-thick"></i>
                {/* <span className="badge rounded-pill bg-info float-end">2</span> */}
                <span>{props.t("Inventory")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/inventory/add">{props.t("New")}</Link></li>
                <li><Link to="/inventory-alt/add">{props.t("Alternative")}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="waves-effect">
                <i className="mdi mdi-plus-thick"></i>
                {/* <span className="badge rounded-pill bg-info float-end">2</span> */}
                <span>{props.t("Lists")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/lists/laptops">{props.t("Laptops")}</Link></li>
                <li><Link to="/lists/licenses">{props.t("Licenses")}</Link></li>
                <li><Link to="/lists/services">{props.t("Services")}</Link></li>
                <li><Link to="/lists/accessories">{props.t("Accessories")}</Link></li>
                <li><Link to="/lists/headphones">{props.t("Headphones")}</Link></li>
                
              </ul>
            </li>

            <li>
              <Link to="/#" className="waves-effect">
                <i className="mdi mdi-plus-thick"></i>
                {/* <span className="badge rounded-pill bg-info float-end">2</span> */}
                <span>{props.t("Miscellaneous")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/service/request">{props.t("Service Request")}</Link></li>
                
              </ul>
            </li>


          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))