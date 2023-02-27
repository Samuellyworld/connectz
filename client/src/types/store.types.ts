// import custom types from redux persist module;
import { WebStorage } from "redux-persist";

// persist config types
export interface persistConfigTypes {
    key : string,
    storage : WebStorage
}

// types config types
export interface userActionTypes {
    SET_CURRENT_USER : string
}