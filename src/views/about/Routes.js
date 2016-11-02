/**
 *
 *  Routes module expose route information used in about feature
 *
 *  @author  David
 *  @date    Nov 1, 2016
 *
 */

import tpl from './template/about.html';

export default [
  {
    id: 'about',
    isDefault: false,
    when: '/about',
    controller: 'AboutController',
    controllerAs: 'about',
    template: tpl
  }
];
