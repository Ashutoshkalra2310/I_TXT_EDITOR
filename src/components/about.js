import React from 'react'

function About(props) {
  return (
    <div>
        {/* <span className={`border-top-0 rounded`}> */}
        <div className="border-top-0 rounded container my-4 jumbotron " style={{color:props.mode=='light'?'black':'white',borderColor:'black'}}>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">You are welcome to about section of Text_Editor. Text_Editor allows various features to manipulte texts and information.</p>
        <hr className="my-4"/>
        <p>You can contact us on text_editor@gmail.com or call 99999-99999.</p>
        </div>
        {/* </span> */}
    </div>
  )
}

export default About