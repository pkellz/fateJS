function fate(options)
{
  const self = {}
  if(options) self.options = options
  self.print = function()
  {
    console.log(self);
  }
  self.num = function(min,max)
  {
    return min == null || max == null ? Math.random():
          Math.floor(Math.random() * max) + min
  }
  self.floating = function(min, max)
  {
      return min == null || max == null ? Math.random() :
            Math.random() * max + min

  }
  return self
}
