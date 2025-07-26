import app from "./server.ts";
import colors from "colors";

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(colors.cyan(`Servidor acivo en localhost:${PORT}`));
});
