// redirection user routes to user controller
import { Router } from 'express';
import { createUser } from '../controllers/user.controller';

const router = Router();

// router.get('/', getAllUsers);
// router.get('/:id', getUserById);
router.post('/', createUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

export default router;
