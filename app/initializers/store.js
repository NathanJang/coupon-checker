import Store from 'coupon/utils/store';

export function initialize(application) {
  application.register('store:main', Store, { singleton: true });
  application.inject('controller', 'store', 'store:main');
  application.inject('route', 'store', 'store:main');
}

export default {
  name: 'store',
  initialize: initialize
};
