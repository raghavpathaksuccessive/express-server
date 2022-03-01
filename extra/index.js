import {diamond} from './pattern/diamond.js'
import {equlitral} from './pattern/equlitral.js'
import {hasPermissions} from './utils/permision.js'
import {validateUsers} from './utils/validation.js'
import {users} from './constant.js'
diamond(7)
equlitral(5)
hasPermissions('getUsers', 'head-trainer', 'all')
validateUsers(users) 