import React from 'react'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="container text-accent-200 bg-accent-100 font-main font-light">
        Magna veniam duis id quis quis esse incididunt commodo commodo. Occaecat culpa amet et irure
        nostrud cupidatat esse consectetur non ex. Proident labore est enim et deserunt id
        consectetur ut sunt. Dolor magna officia fugiat cupidatat. Sint aliquip consequat
        adipisicing nisi nulla commodo enim pariatur anim velit. Ipsum laboris ea minim ex enim
        occaecat sint id in. Culpa ullamco deserunt est veniam id veniam.
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
