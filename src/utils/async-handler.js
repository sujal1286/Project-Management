// instead of writing try catch block in every async function we can use this utility function to handle errors

const asynchandler = (requestHandler) => {
    return  (req, res, next) => {
        Promise.resolve(
            requestHandler(req, res, next)).catch((err) => next(err));
    }
}

export  {asynchandler};