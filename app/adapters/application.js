import DRFAdapter from './drf';

export default DRFAdapter.extend({
    authorizer: 'authorizer:drf-token-auth'
});