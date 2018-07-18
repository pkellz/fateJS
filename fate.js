function fate()
{
  const self = {}
  self.alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                  'n','o','p','q','r','s','t','u','v','w','x','y','z']
  self.print = function()
  {
    console.log(self);
  }
  // Return random number between 0 and 1 if no min & max provided
  self.num = function(min,max)
  {
    return min == null || max == null ? Math.random():
          Math.floor(Math.random() * max) + min
  }
  // Return random float between 0 and 1 if no min & max provided
  self.floating = function(min, max)
  {
      return min == null || max == null ? Math.random() :
            Math.random() * max + min
  }
  // True 50% of the time unless a chance is passed in
  self.bool = function(options)
  {
    options ? chance = options.chance : chance = 50
    const c = (chance != null) ? 1 - (chance / 100) : 0.5
    return Math.random() > c
  }
  // Return random character
  self.letter = function(options)
  {
    const casing = options != null ? options.casing : 'lower'
    const char = self.alpha[Math.floor(Math.random()*self.alpha.length)]

    switch(casing)
    {
      case 'lower':
        return char.toLowerCase()
        break
      case 'upper':
        return char.toUpperCase()
        break
      default:
        return char.toLowerCase()
    }
  }
  return self
}
