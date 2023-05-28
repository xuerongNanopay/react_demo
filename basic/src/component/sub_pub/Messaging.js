import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import css from './Messaging.module.css'

const MessageQueue = () => {
  const [users, setUsers] = useState([]);

  const fetchGitUser = (users) => {
    setUsers(users);
  }

  return (
    <div className='container-fluid bg-secondary text-center'>
      <Search {...{fetchGitUser}} />
      <List {...{users}}/>
    </div>
  )
}

const Search = ({fetchGitUser}) => {
  const [searchKey, setSearchKey] = useState("");
  const [ searchId, setSearchId ] = useState("");
  const isInitialMount = useRef(true);


  //TODO: using useEffect to clean.
  const onSubmitWrapper= (e) => {
    e.preventDefault();
    setSearchId(searchKey);
    return;
  }

  useEffect(() => {
    console.log("aaa", searchId);
    // way to trigger only when did
    if ( isInitialMount.current ) {
      isInitialMount.current = false;
      return
    }
    const cancelToken = axios.CancelToken.source()
    axios.get(`https://api.github.com/search/users?q=${searchKey}`, { cancelToken: cancelToken.token })
      .then(res => res.data.items )
      .then(originalUsers => originalUsers.map(({id, login, avatar_url, html_url}) => ({id, login, avatar_url, html_url})))
      .then(users => fetchGitUser(users))
      .catch(err => {
        if ( axios.isCancel(err) ) {
          console.log('cancel')
        } else {
          console.log(err)
        }
      })

    return () => {
      cancelToken.cancel();
    }
  }, [searchId])
  console.log('fff')
  return (
    <div>
      <h4>Search Github Users</h4>
      <form className="row justify-content-md-center" onSubmit={onSubmitWrapper}>
        <div className="col-6 my-1">
          {/* <label htmlFor="searchKey" className="sr-only">Search</label> */}
          <input type="text" name="searchKey" value={searchKey} onChange={e => setSearchKey(e.target.value)} className="form-control" placeholder="enter the name"/>
        </div>
        <div className="col-auto my-1">
          <button type="submit" className="btn btn-primary mb-2">Search</button>
        </div>
      </form>
    </div>
  )
}

const List = ({users}) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
        {
          users.map(({id, login, avatar_url}) => (<ListItem key={id} className="col mb-4" imgUrl={avatar_url} name={login}/>))
        }
      </div>
    </div>
  )
}

const ListItem = ({className, imgUrl, name}) => {
  return (
    <div className={`${className}`} style={{}}>
      <div className={`card ${css.item}`}>
        <img className="card-img-top" src={imgUrl} alt="Card image cap"></img>
        <div className="card-body">
          <p className="card-text">{name}</p>
        </div>
      </div>
    </div>
  )
}

export default MessageQueue;