import Ember from 'ember';

export default Ember.Controller.extend({
  error: null,
  store: Ember.inject.service(),
  session: Ember.inject.service('session'),
  now: new Date().getFullYear(),
  actions: {
    authenticate(reg_number, password) {
      this.get('session').authenticate('authenticator:drf_token_auth', reg_number, password).catch((reason) => { this.set('error', reason) });
    }
  }
});