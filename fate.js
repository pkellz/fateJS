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
    options ? chance = options.chance : 0
    let c = (chance != null) ? 1 - (chance / 100) : 0.5
    return Math.random() > c
  }
  self.letter = function(options)
  {
    options ? casing = options.casing : 0
    console.log(casing);
    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                  'n','o','p','q','r','s','t','u','v','w','x','y','z']
    const char = alpha[Math.floor(Math.random()*alpha.length+1)]
    return Math.random() > 0.5 ? char.toLowerCase() : char.toUpperCase()
  }
  return self
}
