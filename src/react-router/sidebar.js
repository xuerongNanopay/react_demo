import React from 'react'
import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons";
import { NavLink, Link, BrowserRouter, Route, Routes, useParams, Outlet, useOutletContext, useLocation} from 'react-router-dom'

// Three ways to pass value to router:
//  1. state property in Link/NavLink
//  2. Uri prams: like /user/1 . useParams to get date
//  3. or searchParams . useSearchParams to get data
//  4. useContext
const SideBar = () => {

  return (
    <BrowserRouter>
      <div className="container-fluid bg-warning">
        <div className="row">
          {/* Side menu */}
          <div className="bg-body col-auto col-md-4 col-lg-3 min-vh-100">
            <div className="bg-info">
            <a className="d-flex justify-content-center text-decoration-none">
              <span className="fs-4 d-none d-sm-inline">SideMenu</span>
            </a>
            </div>
            <ul className="nav nav-pills flex-column mt-2">
              <li className="nav-item">
                <NavLinkWrapper to="/service1" />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link d-flex align-items-center" to="/service2" state={{ some: "value" }}>
                  <IconContext.Provider value={{ className: '' }}>
                    <FaBeer />
                  </IconContext.Provider>
                  <span className="ms-3 d-none d-sm-inline">GOTO Service 2</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/service1" element={<Service1 a={1} />}/>
                <Route path="/service2" element={<Service2/>}/>
                <Route path="/nestRouter">
                  <Route path="next1" element={<Next1/>}/>
                </Route>
                <Route path="/layoutRouter" element={<ALayout />}>
                  <Route path="lnext1" element={<Lnext1/>}/>
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

const NavLinkWrapper = ({to}) => {
  return (
    <>
      <NavLink className="nav-link d-flex align-items-center" to={to}>
        <IconContext.Provider value={{ className: '' }}>
          <FaBeer />
        </IconContext.Provider>
        <span className="ms-3 d-none d-sm-inline">GOTO Service 1</span>
      </NavLink>
    </>
  )
}

const ALayout = () => {
  return (
    <div>
      <p>This is the layout</p>
      <Outlet context={{ hello: "world" }} />
    </div>
  )
}
const Lnext1 = () => {
  const { hello } = useOutletContext();
  console.log(hello)
  return (
    <div>
      <p>This is Lnext1</p>
    </div>
  )
}

const Next1 = () => {
  return (
    <div>
      <p>This is Next Next1</p>
    </div>
  )
}

const Service1 = ({a}) => {
  return (
    <div>
      <p className="fs2">Service11111 {a}</p>
      <Service1_next>
        <div>
          <h1>DD1</h1>
          <p>pp DD1</p>
        </div>
        <h1>Header 1</h1>
        <p>I am in Service1_next</p>
      </Service1_next>
    </div>
  )
}

const Service1_next = ({children}) => {
  console.log(children)
  return (
    <div>
      <p>This is service1</p>
      {children}
    </div>
  )
}

const Service2 = () => {
  const { state } = useLocation();
  console.log('state', state)
  console.log('useLocation', useLocation())

    return (
      <div>
        <p className="fs2">Service22222</p>
      </div>
    )
}

const Welcome = () => {
  return (
    <div>
      <p>Welcome this is root</p>
    </div>
  )
}
const NotFound = () => {
  return (
    <div>
      <p>PAGE NOT FOUND</p>
    </div>
  )
}

export default SideBar