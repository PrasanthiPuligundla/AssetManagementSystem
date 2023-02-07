import { ADD_ASSET, 
    DELETE_ASSET,
     UPDATE_ASSET,
     RETRIVE_ASSET_BY_ITEM_NO } from "./types";

import AssetService from "../services/AssetService";

 export const addAsset = ({itemNo,assetName,serialNo,status,employee}) => async (dispatch) => {
      
    try {
        const response = await AssetService.addAsset({itemNo,assetName,serialNo,status,employee})
        console.log(response.data)
        dispatch({
            type : ADD_ASSET,
            payload:response.data
        })
        return Promise.resolve(response.data)
    }catch(err){
        return Promise.reject(err)
    }
}

export const deleteAsset = (assetId) => async (dispatch) => {
    try{
        await AssetService.deleteAsset(assetId);
        dispatch({
            type:DELETE_ASSET,
            payload : {assetId},
        });
    }catch(err){
        console.log(err);
    }
};

export const updateAsset = (itemNo,data) => async(dispatch) => {
    try{
        const response = await AssetService.updateAsset(itemNo,data);
        dispatch({
            type:UPDATE_ASSET,
            payload : response.data
        });
        return Promise.resolve(response.data)
    }catch (err ){
      return  Promise.reject(err);
    }
}

export const retriveAssetByItemNo = (itemNo)=> async(dispatch) =>{
    try {
        const response = await AssetService.retriveAssetByItemNo(itemNo)
        dispatch({
            type:RETRIVE_ASSET_BY_ITEM_NO,
            payload : response.data,
        });
    }
    catch(err) {
        console.log(err);
    }
}

