import React, { Component } from 'react'
import TransactionForm from './TransactionForm'
import { connect } from "react-redux";
import * as actions from "../actions/transcationActions"
import { bindActionCreators } from "redux";

class TransactionList extends Component {


    handleEdit = (index) => {
        this.props.updateTransactionIndex(index)
    }

    handleDelete = (index) => {
        this.props.deleteTransaction(index)
    }

    render() {
        return (
            <div>
                <TransactionForm />
                <hr />
                <table className="table table-striped table-bordered table-hover table-condensed">
                    <tbody>
                        {this.props.list.map((item, index) => {
                            return <tr className="info" key={index}>
                                <td >{item.fName}</td>
                                <td >{item.lName}</td>
                                <td >{item.email}</td>
                                <td >{item.phone}</td>
                                <td >{item.password}</td>
                                <td><button className="btn-warning" onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button className="btn-danger" onClick={() => this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTransactionIndex: actions.updateIndex,
        deleteTransaction: actions.Delete
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)