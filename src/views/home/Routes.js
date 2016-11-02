/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  David
 *  @date    Nov 1, 2016
 *
 */

import tpl from './template/home.html';

export default [
  {
    id: 'home',
    isDefault: true,
    when: '/home',
    controller: 'HomeController',
    controllerAs: 'home',
    template: tpl
  }
];
