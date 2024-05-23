using myCompany.hr.lms from '../db/student';

service srvHello {
    // @readonly
    @odata.draft.enabled
    entity StudentsSRV as projection on lms.Students;
    function lawFunction(msg:String) returns String;
}

