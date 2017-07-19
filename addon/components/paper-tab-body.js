/**
 * @module ember-paper
 */
import Component from 'ember-component';
import computed from 'ember-computed';
import layout from '../templates/components/paper-tab-body';
import { ChildMixin } from 'ember-composability-tools';

/**
 * @class PaperTabBody
 * @extends Component
 */
export default Component.extend(ChildMixin, {

  tagName: '',

  layout,

  wormhole: computed.readOnly('parentComponent.wormhole')

});