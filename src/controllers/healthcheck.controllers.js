import {ApiResponse} from '../utils/api-responses.js'

const healthCheck = (req, res) => {
    res.status(200).json(
        new ApiResponse(200, {message:{"Server is Running"}});
    )
}

export { healthCheck };