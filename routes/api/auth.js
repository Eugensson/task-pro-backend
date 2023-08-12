const express = require('express');
const router = express.Router();
const { validateBody, authenticate } = require('../../middlewares');
const { registerSchema, loginSchema, refreshSchema } = require('../../schemas');
const ctrl = require('../../controllers/auth');

router.post('/register', validateBody(registerSchema), ctrl.register);

router.post('/login', validateBody(loginSchema), ctrl.login);

router.post('/refresh', validateBody(refreshSchema), ctrl.refresh);

router.post('/logout', authenticate, ctrl.logout);

module.exports = router;
