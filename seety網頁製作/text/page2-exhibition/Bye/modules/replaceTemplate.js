module.exports = (temp, exhibition) => {
  let output = temp.replace(/{%EXHIBITIONNAME%}/g, exhibition.exhibitionName);
  output = output.replace(/{%ID%}/g, exhibition.id);
  output = output.replace(/{%IMAGE%}/g, exhibition.image);
  output = output.replace(/{%TICKETPRICE%}/g, exhibition.ticketPrice);
  output = output.replace(/{%PERFORMER%}/g, exhibition.performer);
  output = output.replace(
    /{%PERFORMERDESCRIPTION%}/g,
    exhibition.performerDescription
  );
  output = output.replace(/{%DESCRIPTION%}/g, exhibition.description);
  output = output.replace(
    /{%ENTERTIME%}/g,
    `${exhibition.enterTime.from
      .split(',')
      .slice(3)
      .join(':')} 到 ${exhibition.enterTime.to.split(',').slice(3).join(':')}`
  );
  if (exhibition.date.begin === exhibition.date.end) {
    const date = (date) =>
      date.replace(',', '年').replace(',', '月').concat('', '日');
    output = output.replace(/{%DATE%}/g, date(exhibition.date.begin));
  } else {
    output = output.replace(
      /{%DATE%}/g,
      `${date(exhibition.date.begin)} ~ ${date(exhibition.date.end)}`
    );
  }

  return output;
};
