/**
 *  Entrance of features
 *
 *  @author  David
 *  @date    Nov 1, 2016
 *
 */


import home from './home/main';
import about from './about/main';
import common from './common/main';

export default [about, ...common, home];
