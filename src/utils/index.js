//default helpers
import catnip from 'catnip';

function cssDecamelize(string) {
  let newString = string.split('_').filter(n => n !== '').join('-')
  newString = newString.replace(/([a-z](?=[A-Z]))/g, '$1+')
  return (newString.split('+').join('-').toLowerCase())
}

export function cssClassName(string){
  return catnip(cssDecamelize(string))
}
