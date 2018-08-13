import React, { Component} from 'react';
import './style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Grid,
    Button,
    Row,
    Col
} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            list: []
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    render() {
        return (
            <Grid className='container-fluid'>
                <Row>
                    <Col xs={6} md={4}>
                        <code>&lt;{'Col xs={6} md={4}'} /">">">">">">">&gt;</code>
                    </Col>
                    <Col xs={6} md={4}>
                        {/* <div className={this.state.show ? 'show' : 'hide'}>Hello</div> */}
                        <TransitionGroup>
                            {
                                this.state.list.map((item, index) => {
                                    return (
                                        <CSSTransition
                                            timeout={2000}
                                            classNames="hello"
                                            unmountOnExit
                                            onEntered={(el) => el.style.color = 'blue'}
                                            appear={true}
                                            key={index}
                                        >
                                            <div>Hello</div>
                                        </CSSTransition>
                                    )
                                })
                            }

                        </TransitionGroup>
                        <Button type="button" className="btn btn-primary" onClick={this.handleAddItem}>AddItem</Button>
                        <Button type="button" className="btn btn-primary" onClick={this.handleToggle}>toggle</Button>
                    </Col>
                    <Col xs={6} md={4}>
                        <code>&lt;{'Col xs={6} md={4}'} /">">">">">">">&gt;</code>
                    </Col>
                </Row>
            </Grid>

        );
    }
    handleToggle() {
        this.setState({ show: this.state.show ? false : true }
        )
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...this.state.list, 'item']
            }
        })
    }

}
export default App;
