import {permissions} from '../constant.js'
export  function hasPermissions(moduleName, role, permissionType) {
    try{
        console.log("//running permissions.js ... \n")
        if (permissions[moduleName].all.includes(role) || permissions[moduleName][permissionType].includes(role)){  
                console.log(`${role} has ${permissionType} permissions`)                  
                return true
        }
                  console.log(`${role} does not has ${permissionType} permissions`)
            return false         
    } 
    catch(err) {
        console.log(`TypeError: ${moduleName} is not a valid moduleName`)
    }
}
   

