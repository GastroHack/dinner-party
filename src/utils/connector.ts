/* eslint-disable */
/**
 * Connects a component to the redux store and dispatch functions
 * Proposition: one import to take care of accessing store and actions
 *
 * Provides access to state + actions by rendering children as function
 *
 * Usage:
 * ```
 * <Connector>
 *  {
 *    ({ state, actions }) => {
 *      // state and actions are organized as
 *      // state.someModule.foo, actions.someModule.actions, etc
 *      // do something with state, actions
 *    }
 *  }
 * </Connector>
 * ```
 *
 * To Add Actions:
 * - import actions
 * - add to the `actionList` with a label and value
 */
import { Component, Validator } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { bindActionCreators } from 'redux'
import { actions as tableActions } from '../modules/table.module'

interface IConnectorProps {
  state: any,
  actions: any,
  children: any,
}

class Connector extends Component<IConnectorProps, any> {

  static propTypes: { children: Validator<NonNullable<any>>; state: Validator<NonNullable<any>>; actions: Validator<NonNullable<any>> };

  render() {
    const { state, actions, children } = this.props

    // @ts-ignore
    return children({ state, actions })
  }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => {
  const actionList = [
    // label: String, value: Object
    { label: 'table', value: tableActions },
    // add more actions here
  ]

  return {
    actions: actionList.reduce(
      (prev, cur) => ({
        ...prev,
        [cur.label]: bindActionCreators(cur.value, dispatch),
      }),
      {},
    ),
  }
}

Connector.propTypes = {
  state: PropTypes.any.isRequired,
  actions: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'users' },
  ]),
)(Connector)
