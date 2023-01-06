module.exports.showImg((path, res) => {
  fs.readFile(path, 'binary', function (err, file) {
    if (err) {
      return;
    } else {
      res.write(file, 'binary');
      res.end;
    }
  });
});
