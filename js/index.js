import exp from 'express';
import 'dotenv/config';
const app = exp();
console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
    console.log(`server started on PORT: ${process.env.PORT} visit http://localhost:${process.env.PORT}`);
});
