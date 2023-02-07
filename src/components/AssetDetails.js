function AssetDetails(props) {
    const assets = props.asset;

   

    return(
        <table border='2'>
           <thead>
           <tr>
                <th>ItemNo</th>
                <th>SerialNo</th>
                <th>AssetName</th>
                <th>Status</th>
            </tr>
           </thead>
            
            <tbody>
            {assets.map((asset)=>(

            <tr key={asset.itemNo}>
                 <td>{asset.itemNo}</td>
                  <td>{asset.assetName}</td>
                  <td>{asset.serialNo}</td>
                   <td>{asset.status}</td>
                   </tr>
                   ))}
            </tbody>
        </table>
    )
}

export default AssetDetails;