export interface IHomeService{
    getHome():Promise<any>;
    createHome( data:any ):Promise<any>;
    allsStatusFalseHome():Promise<void>;
    patchStatusHome( id:number ):Promise<any>;
    deleteRegisterHome( id:number ):Promise<any>;
}


