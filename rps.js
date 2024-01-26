function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  console.log(random);

  switch (random) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
    default:
      break;
  }
}
