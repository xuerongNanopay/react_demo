import React from 'react';
import './snapshot.css';

export default class Snapshot extends React.Component {

  state = { newsArr: [] }

  componentDidMount() {
    setInterval(() => {
      const { newsArr } = this.state

      const news = 'news' + (newsArr.length + 1)

      this.setState({newsArr: [news, ...newsArr]})
    }, 1000)
  }

  getSnapshotBeforeUpdate() {
    return this.newsBlock.scrollHeight
  }

  componentDidUpdate(preProps, preState, height) {
    console.log(height)
    this.newsBlock.scrollop += this.newsBlock.scrollHeight - height;
  }

  render() {
    return (
      <>
        <div ref = { (r) => this.newsBlock = r } className='list'>
          {
            this.state.newsArr.map((n) => (
              <div key={n} className='news'>{n}</div>
            ))
          }
        </div>
      </>
    )
  }
}