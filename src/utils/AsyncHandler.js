// ye rapper function hain jo hum hur jagah use karange

// two ways 1) with promise using .then, .catch
//          2) using async/await try catch


const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(err.code ||500).json({
            success: false,
            message: err.message,
        })
    }
}

export {asyncHandler}