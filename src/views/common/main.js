/**
 *  Entrance of common service
 *
 *
 *  @author  David
 *  @date    Nov 1, 2016
 *
 */

import logical from './logical/main';
import ui from './ui/main';

export default [...logical, ...ui];
