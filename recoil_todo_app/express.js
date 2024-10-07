import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const todos = [
  {
    id: 1,
    title: 'Complete Project Report',
    description: 'Finalize and submit the quarterly project report to the management team by EOD Friday.'
  },
  {
    id: 2,
    title: 'Team Meeting',
    description: 'Schedule a meeting with the development team to discuss ongoing projects and address any concerns.'
  },
  {
    id: 3,
    title: 'Fix Bug #123',
    description: 'Resolve the critical bug reported in the latest software release, affecting user authentication.'
  },
  {
    id: 4,
    title: 'Onboard New Intern',
    description: 'Prepare training materials and schedule a meeting with the new intern to introduce them to the team and project workflow.'
  },
  {
    id: 5,
    title: 'Code Review',
    description: 'Review and provide feedback on the code submitted by team members for the current sprint.'
  },
];

app.get('/todos', (req, res) => {
  return res.json(todos);
});

app.get('/todo', (req,res)=>{
  const {id} = req.query
  return res.json(todos[parseInt(id)-1])
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});