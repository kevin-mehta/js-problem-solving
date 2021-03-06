const releaseYear = album => {
  const objAlbums = {
    '2015': ['Vulnicura', 'Honeymoon', 'Rebel Heart'],
    '2016': ['Lemonade', 'Blackstar', 'A Moon Shaped Pool'],
    '2017': ['Flower Boy', 'Antisocialites'],
    '2018': ['El Mal Querer', 'Someone Out There', 'Cranberry', 'Kamikaze'],
    '2019': ['thank u next', 'Magdalene', 'Ode to Joy'],
    '2020': ['Rough and Rowdy Ways', 'folklore', 'Future Nostalgia', 'Colores']
  };
  let strReleaseYear = Object.keys(objAlbums).find(key => {
    return objAlbums[key].includes(album)
  });
  return strReleaseYear ? strReleaseYear : "Unknown";
};
