JSON.stringify(Array.from(document.querySelectorAll('tbody > tr')).filter(el => el.children.length > 1).map((el) => {
  const item = el.children[1].children[0];
  let functionName = item.children[0].textContent.trim();
  let region = item.children[1].textContent.trim();
  if (functionName === 'gmp_mods'){
      const splitRegion = region.split('  ');
      functionName = splitRegion[0];
      region = splitRegion[1];
  }
  return {
      functionName,
      region,    
  }
}));