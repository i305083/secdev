sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zsecrel/test/integration/pages/RelationshipList",
	"zsecrel/test/integration/pages/RelationshipObjectPage"
], function (JourneyRunner, RelationshipList, RelationshipObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zsecrel') + '/test/flp.html#app-preview',
        pages: {
			onTheRelationshipList: RelationshipList,
			onTheRelationshipObjectPage: RelationshipObjectPage
        },
        async: true
    });

    return runner;
});

