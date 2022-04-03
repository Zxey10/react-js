import { Fragment, useState, useEffect, Component } from 'react';
import styles from './UserFinder.module.css';
import UsersContext from '../store/user-context';
import ErrorBoundary from './ErrorBoundary';

import Users from './Users';


  class UserFinder extends Component{

     static contextType = UsersContext;

      constructor(){
          super()
          this.state = {
              filteredUsers: [],
              searchTerm: ''
          }
      }

      componentDidMount(){
        this.setState({filteredUsers:this.context.users})
      }

      componentDidUpdate(prevProps, prevState){
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers: this.state.users.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }

      }

      searchChangeHandler(e){
          this.setState({
              searchTerm: e.target.value
          })
      }

      render(){
        return (
            <Fragment>
              <input type='search' onChange={this.searchChangeHandler.bind(this)} />
              <ErrorBoundary>
                <Users users={this.state.filteredUsers} />
              </ErrorBoundary>
            </Fragment>
          );
      }
  }
  

//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type='search' onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;