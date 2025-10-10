export function UpdateUrlParam(key:string, value:string|null|undefined) {
  const url = new URL(window.location.href);
  
  if(value === null || value === undefined) {
    url.searchParams.delete(key);
  } else {
    if(url.searchParams.has(key))
      url.searchParams.set(key, value);
    else
      url.searchParams.append(key,value);
  }

  window.history.pushState({},"",url.toString());
}