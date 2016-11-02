/**
 *  ServiceBase class
 *
 *
 *  @author  David
 *  @date    Nov 1, 2016
 *
 */

class ServiceBase {

    constructor(features, app) {
        this.features = features;
        this.app = app;

        this.factory = app.factory;
        this.service = app.service;
    }

    execute() {}
}

export default ServiceBase;
