// TITLE CASE

const titleCase = (str) => {
  let arr = [];
  str
    .split(" ")
    .map((element) =>
      element.charAt(0) !== "'"
        ? arr.push(element.charAt(0).toUpperCase() + element.slice(1))
        : arr.push(
            element.replace(element.charAt(1), element.charAt(1).toUpperCase())
          )
    );
  return arr.join(" ");
};

console.log(titleCase("they don't make 'em like me no more"));

module.exports = {
  titleCase,
};
