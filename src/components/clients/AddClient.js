import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import { compose } from 'redux'
// import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

class AddClient extends Component {
   state = {
       firstName: '',
       lastName: '',
       email: '',
       phone: '',
       balance: ''  
     }

     onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

  render() {
    return (
      <div>
        <div class="row">
            <div class="col-md-6">
                <Link to="/" className="btn btn-link">
                   <i class="fas fa-arrow-circle-left" /> Back to Dashboard
                </Link>
            </div>
        </div>

        <div class="card">
            <div class="card-header">Add Client</div>
            <div class="card-body">
                <form action="">
                    <div class="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                         type="text"
                         class="form-control"
                         name="firstName"
                         minLength="2"
                         required
                         onChange={this.onChange}
                         value={this.state.firstName}
                         />
                    </div>

                    <div class="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                         type="text"
                         class="form-control"
                         name="lastName"
                         minLength="2"
                         required
                         onChange={this.onChange}
                         value={this.state.lastName}
                         />
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                         type="email"
                         class="form-control"
                         name="email"
                         onChange={this.onChange}
                         value={this.state.email}
                         />
                    </div>
                    <div class="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                         type="text"
                         class="form-control"
                         name="phone"
                         minLength="10"
                         onChange={this.onChange}
                         value={this.state.phone}
                         />
                    </div>

                    <div class="form-group">
                        <label htmlFor="balance">Balance</label>
                        <input 
                         type="text"
                         class="form-control"
                         name="balance"
                         onChange={this.onChange}
                         value={this.state.balance}
                         />
                    </div>

                    <input type="submit" value="Submit" className="btn btn-primary btn-block" />
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default firestoreConnect()(AddClient);