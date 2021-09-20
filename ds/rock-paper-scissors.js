const rpsK = (p1, p2) => {
  return p1 === p2
    ? "It's a draw"
    : (p1 === "Rock" && p2 === "Paper") ||
      (p1 === "Paper" && p2 === "Scissors") ||
      (p1 === "Scissors" && p2 === "Rock")
    ? "The winner is p2"
    : "The winner is p1";
};

const rps = (p1, p2) => {
  let w = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock"
  };
  if (p1 === p2) return "It's a draw";
  return `The winner is ${w[p1] === p2 ? "p1" : "p2"}`;
};
