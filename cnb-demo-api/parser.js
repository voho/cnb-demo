const parseCsvResponse = (responseText) => {
  const records = responseText.split("\n");
  const date = records[0];
  records.splice(0, 2);
  const rows = [];
  records.forEach((record) => {
    const cols = record.split("|", 5);
    if (cols.length !== 5) {
      return;
    }
    rows.push({
      amount: parseInt(cols[2]),
      code: cols[3],
      country: cols[0],
      currency: cols[1],
      rate: parseFloat(cols[4]),
    });
  });
  return {
    date,
    rows,
  };
};

module.exports = { parseCsvResponse };
