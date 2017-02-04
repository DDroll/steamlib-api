exports.callback = (req, res)=>{
  console.log('openidparams ' + req.body.openidparams);
  console.log('nonce ' + req.body.nonce);
  res.redirect('/');
};
