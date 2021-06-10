import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../actions/transcationActions"
import { bindActionCreators } from "redux";


class TransactionForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                fName: '',
                lName: '',
                email: '',
                phone: '',
                password : ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        

        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.currentIndex === -1)
            this.props.insertTransaction(this.state)
        else
            this.props.updateTransaction(this.state)
    }

    render() {
        return (
            <>
            <form className="form-horizontal" onSubmit={this.handleSubmit} autoComplete="off">
                <input className="col-sm-10 mt-3  grey" type="text" name="fName" placeholder="Ener First Name" onChange={this.handleInputChange} value={this.state.fName}></input><br />
                <input className="col-sm-10 mt-3 grey" type="text"  name="lName" placeholder="Enter Last Name" onChange={this.handleInputChange} value={this.state.lName} ></input> <br />
                <input className="col-sm-10 mt-3 grey" type="email"  name="email" placeholder="Enter Email Address" onChange={this.handleInputChange} value={this.state.email} /><br />
                <input className="col-sm-10 mt-3 grey" type="tel"  name="phone" placeholder="Enter Phone" onChange={this.handleInputChange} value={this.state.phone} /><br />
                <input className="col-sm-10 mt-3 grey" type="password"  name="password" placeholder="Enter password" onChange={this.handleInputChange} value={this.state.password} /><br />
                <button className="btn btn-success mt-5 btn-sm grey width" type="submit">Submit</button>
            </form>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insert,
        updateTransaction: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)