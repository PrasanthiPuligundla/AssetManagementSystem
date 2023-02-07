import http from '../api/http-common';

 const addAsset = (data) => {
    console.log(data)
      return http.post("/addAsset",data);
}

const deleteAsset = (itemNo) => {
    return http.delete(`/deleteAsset/${itemNo}`);
}

const updateAsset = (itemNo,data) => {
    console.log(data)
    return http.put(`/updateAsset/${itemNo}`,data)
}
const retriveAssetById = (employeeId) => {
    return http.get(`/retriveAssetById/${employeeId}`)
}

const AssetService = {
    addAsset,
    deleteAsset,
    updateAsset,
    retriveAssetById
    
}

export default AssetService;