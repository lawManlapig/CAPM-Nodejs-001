sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'testcap001lrapp',
            componentId: 'StudentsSRVObjectPage',
            contextPath: '/StudentsSRV'
        },
        CustomPageDefinitions
    );
});