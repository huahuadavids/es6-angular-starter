/**
 *  Defines the HomeService
 *
 *  @author  David
 *  @date    Nov 1, 2016
 *
 */

class HomeService {

    /*@ngInject*/
    constructor($http, utils) {
        this.$http = $http;
        this.utils = utils;
    }

    getInitTodos() {
        return Promise.resolve([
            {
                finished: true,
                txt: 'Learn JavaScript'
            },
            {
                txt: 'Learn AngularJS'
            },
            {
                txt: 'Learn webpack'
            },
            {
                txt: 'Learn node'
            }
        ]);
    }

}

export default HomeService;
