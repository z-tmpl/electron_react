import React from 'react'
import './app.scss'
import { Provider, Consumer } from 'ctx-react'
import Content from './component/content'
import Header from './component/header'
import store from './Store'

@Provider(store)
@Consumer
export default class App extends React.Component {
  render() {
    return (
      <div className="root">
        <Header />
        <Content />
        <style jsx>{`
            .root{
              overflow: hidden;
            }
        `}</style>
      </div>
    )
  }
}
