// instead of writing try catch block in every async function we can use this utility function to handle errors

function asyncHandler(requestHandler) {
    retuen function(req, res, next){
        Promise.resolve(requestHandler(req, res, next))
        .catch(function (err) { 
            next(err);
         })
    }
}



export { asyncHandler };


