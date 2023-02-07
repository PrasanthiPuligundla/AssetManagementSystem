import {
     ADD_ASSET, 
     DELETE_ASSET,
      UPDATE_ASSET,
      RETRIVE_ASSET_BY_ITEM_NO
    } from "../actions/types"
const initialState = [];
function AssetReducer(assets = initialState,action) {
    const { type, payload } = action;
    switch(type){
        case ADD_ASSET:
            console.log(payload)
            return [...assets,payload];
            case UPDATE_ASSET :
                    return assets.map((asset) => {
                        if(asset.itemNo === payload.itemNo) {
                         return {
                             ...asset,
                             ...payload,
                         };
                        }else {
                            return assets;
                        }
                    });

                    case RETRIVE_ASSET_BY_ITEM_NO:
                        return assets.map((asset)=>{
                            if(asset.itemNo === payload.itemNo) {
                                return {
                                    ...asset,
                                    ...payload,
                                };
                            }else {
                                return asset;
                            }
                        });
        case DELETE_ASSET :
            return assets.filter(({id})=>id !== payload.itemNo);

            default:
          return assets;
     }
    
};

export default AssetReducer;


