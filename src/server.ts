import express, { Application } from 'express';
import sequelize from './db/db-config';
import 'dotenv/config';
import userRouter from './routes/user';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to database with sequelize and handle errors
sequelize
  .sync()
  .then(() => console.log('Connection to DB has been established successfully.'))
  .catch((error: Error) => console.error('Unable to connect to the database:', error));

// app.get('/', async (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

app.use(`/api/users`, userRouter);

app.listen(process.env.PORT, () => {
  console.log('Server listening !!');
});
