import { connect } from 'react-redux'
import ItemList from '../components/ItemList'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const ConnectedItemList = connect(mapStateToProps)(ItemList)

export default ConnectedItemList
