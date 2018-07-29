function fate()
{
  const self = {}
  self.alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                  'n','o','p','q','r','s','t','u','v','w','x','y','z']
  self.print = function()
  {
    console.log(self);
  }
  // Return random number between 0 and 10 if no min & max provided
  self.num = function(options)
  {
    if(!isArgumentAnObject(options))
      throw `Invalid Argument ${typeof options}.`

    const defaults =
    {
      min:0,
      max:10
    }
    const settings = extend(defaults, options)

    const { min, max } = settings
    return Math.floor(Math.random() * max) + min
  }
  // Return random float between 0 and 1 if no min & max provided
  self.floating = function(options)
  {
    if(!isArgumentAnObject(options))
    throw `Invalid Argument ${typeof options}.`

    const defaults =
    {
      min:0,
      max:1
    }
    const settings = extend(defaults, options)

    const { min, max } = settings

    return Math.random() * max + min
  }
  // True 50% of the time unless a chance is passed in
  self.bool = function(options)
  {
    // If user passes in anything but an object or blank call, throw exception
    if(!isArgumentAnObject(options))
      throw `Invalid Argument ${typeof options}.`

    const defaults =
    {
        chance:50
    }
    const settings = extend(defaults, options)

    const { chance } = settings
    return Math.random() > 1 - (chance / 100)
  }

  // Return random character
  self.letter = function(options)
  {
    // If user passes in anything but an object or blank call, throw exception
    if(!isArgumentAnObject(options))
      throw `Invalid Argument ${typeof options}.`

    const defaults =
    {
      casing:'lower'
    }
    const settings = extend(defaults,options)
    const { casing } = settings
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
function isArgumentAnObject(arg)
{
  return (arg instanceof Object || typeof(arg) == 'undefined')
}
function extend(defaults,options)
{
  return Object.assign(defaults,options)
}
