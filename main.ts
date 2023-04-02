import {app} from './src/services/server/app'
import {port} from './src/configs/appConf'

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
