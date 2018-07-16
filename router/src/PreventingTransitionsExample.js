import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt
  } from 'react-router-dom';


class PreventingTransitionsExample  extends Component {
   render() {
   return (
          <Router>
              <div>
                  <ul>
                      <li>
                        <Link to="/">From</Link>
                      </li>
                      <li>
                        <Link to="/one">ONE</Link>
                      </li>
                      <li>
                        <Link to="/two">TWO</Link>
                      </li>
                  </ul>
                  <Route path="/" exact component={Form}/>
                  <Route path="/one" render={()=><h3>ONE</h3>}/>
                  <Route path="/two" render={()=><h3>TWO</h3>}/>
              </div>
          </Router>  
        );
    }
 }


 class Form extends Component{
     state={
         isBlocking:false
     }

     render(){
         const {isBlocking} =this.state;
         return(
            <form onSubmit={event=>{
                event.preventDefault();
                event.target.reset();
                this.setState({
                    isBlocking:false
                })
            }}>
            <Prompt
            when={isBlocking}
            message={
                location=>(
                    `Are you sure want to go to ${location.pathname}`
                )}
            ></Prompt>
            <p>
                Blocking?{isBlocking?'Yes,click a link or the back button':'Nope'}
            </p>
            <p>
                <input size='50'
                placeholder='type something to transitions'
                onChange={event=>{
                    this.setState({
                        isBlocking:event.target.value.length>0
                    })
                }}
                />
            </p>

            <p>
                <button>Submit to stop blocking</button>
            </p>
            </form>
         )
     }
 }
 export default PreventingTransitionsExample ;
