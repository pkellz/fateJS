function fate()
{
  const self = {}
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
  //True 50% of the time unless a chance is passed in
  self.bool = function(options)
  {
    options ? chance = options.chance : 1
    let c = (chance != null) ? 1 - (chance / 100) : 0.5
    return Math.random() > c
  }
  return self
}
