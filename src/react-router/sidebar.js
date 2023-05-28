import React from 'react'
import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons";
import { NavLink, Link, BrowserRouter, Route, Routes, useParams, Outlet, useOutletContext, useLocation, Redirect, useNavigate, Navigate} from 'react-router-dom'
import css from './sidebar.module.css'

// Three ways to pass value to router:
//  1. state property in Link/NavLink
//  2. Uri prams: like /user/1 . useParams to get date
//  3. or searchParams . useSearchParams to get data
//  4. useContext
const SideBar = _ => {

  return (
    <BrowserRouter>
      <div className="container-fluid bg-warning">
        <div className="row">
          {/* Side menu */}
          <div className={`bg-body col-auto col-md-4 col-lg-3 ${css.left}`}>
            <div>
              <div className={`bg-info sticky-top`}>
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
          </div>
          {/* <div class="col-auto col-md-4 col-lg-3 min-vh-100"></div> */}
          <div className={`col ${css.right}`}>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/service1" element={<Service1 a={1} />}/>
                <Route path="/service2" element={<Service2/>}>
                  <Route index element={<Navigate to="news"/>} />
                  <Route path="news" element={<Service2News/>}> 
                    <Route path=":newsId" element={<Service2NewDetail/>}/>
                  </Route>
                  <Route path="messages" element={<Service2message/>} />
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
      <div className={`${css.fixedContainer}`}></div>
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
  const navigate = useNavigate()
  const onBack = _ => {
    // navigate('./'+newsId, {replace: true});
    navigate(-1)
  }
  const onForward = _ => {
    // navigate('./'+newsId, {replace: true});
    navigate(1)
  }
    return (
      <div>
        <p className="fs2">Service22222</p>
        <button className="btn btn-secondary me-1" onClick={_ => onBack()}>back</button>
        <button className="btn btn-secondary" onClick={_ => onForward()}>forward</button>
        <div className="d-flex flex-column">
          <Link to="news" className="me-1 text-decoration-none">News</Link>
          <Link to="messages" className="text-decoration-none">Messages</Link>
        </div>
        <Outlet/>
      </div>
    )
}
const news = [
  { id: '1', title: "new1", content: "content1"},
  { id: '2', title: "new2", content: "content2"},
  { id: '3', title: "new3", content: "content3"}
]

const Service2News = () => {
  const navigate = useNavigate()
  const onReplace = (newsId) => {
    navigate('./'+newsId, {replace: true});
  }
  const onPush = newsId => {
    navigate('./'+newsId);
  }
  return (
    <>
      <h4>This is Service 2News</h4>
      <ul>
        { news.map((news) => {
            return (
              <li key={news.id} className="d-flex" style={{gap: "10px", marginBottom: "10px"}}>
                <Link replace to={news.id} state={{...news}}>{news.title}</Link>
                <button className="btn btn-secondary" onClick={_ => onPush(news.id)}>PUSH</button>
                <button className="btn btn-secondary" onClick={_ => onReplace(news.id)}>Replace</button>
              </li>)
          })
        }
      </ul>
      <Outlet />
    </>
  )
}

const Service2NewDetail = () => {
  const { newsId } = useParams();
  const {id, title, content} = news.find(news => news.id === newsId) || {id: "noFound", title:"nofound", content:"nofound"}
  return (
    <>
      <p>This is detail of new: {newsId}</p>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>content: {content}</p>
    </>
  )
}

const Service2message = () => {
  return (
    <>
      <h4>This is service 2 Message</h4>
    </>
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