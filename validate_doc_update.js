function(newDoc, oldDoc, userCtx, secObj) {
  if(userCtx.name == null) {
    throw({forbidden : 'Unauthorized access.' })
  }
}
