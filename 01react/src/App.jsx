// import    React ,{ReactDOM, createElement } from 'react'


const App = () => {
    return React.createElement(
        "div", 
        {}
        , React.createElement(
            "h1",
            {},
            "Hello  from Yash "
        )
    )
}
const container= document.getElementById("root")

const root=ReactDOM.createRoot(container);


root.render(React.createElement(App))

export default App