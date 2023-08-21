export interface IFetchResult {
    apiData: any | null;
    isLoading: boolean;
    serveError: any | null;
    itemLoading?:boolean[];
   
    handleItemLoad:(index: any)=>void;
}