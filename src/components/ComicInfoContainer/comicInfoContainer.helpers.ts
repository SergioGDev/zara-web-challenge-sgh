/*
  The API info have the year inside the name like 'NAME (YEAR) #NUMBER. We need the info like:
  {
    title: NAME #NUMBER
    year: YEAR
  }
*/
export const getComicTitleAndYear = (comicTitle: string) => {
  const regex = /(.*) \((\d{4})\) #(\d+)/;
  const match = comicTitle.match(regex);

  if (match) {
    const comicTitle = `${match[1].trim()} #${match[3]}`;
    const year = parseInt(match[2], 10);
    return { comicTitle, year };
  } else {
    // If the format is not right, we'll return null
    return null;
  }
};
