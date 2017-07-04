import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service(),
  actions: {
    authenticate(reg_number, password) {
      this.get('session').authenticate('authenticator:drf_token_auth', reg_number, password).catch((reason) => { this.set('error', reason) });
    },
  }
});