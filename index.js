function addArrayItems(arr){
    return arr.reduce((acc, data) => acc + data)
}
module.exports = addArrayItems
// This is for export multiple function.
// module.exports = {addArrayItems, deleteArrayItems}