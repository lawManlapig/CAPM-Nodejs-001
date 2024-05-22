sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'testcap001lrapp/test/integration/FirstJourney',
		'testcap001lrapp/test/integration/pages/StudentsSRVList',
		'testcap001lrapp/test/integration/pages/StudentsSRVObjectPage'
    ],
    function(JourneyRunner, opaJourney, StudentsSRVList, StudentsSRVObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('testcap001lrapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheStudentsSRVList: StudentsSRVList,
					onTheStudentsSRVObjectPage: StudentsSRVObjectPage
                }
            },
            opaJourney.run
        );
    }
);