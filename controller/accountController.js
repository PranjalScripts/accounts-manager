export const addAccountController = (req, res) => {
    const { username, password, platform } = req.body;
  
    if (!username || !password || !platform) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const newAccount = { username, password, platform };
    accounts.push(newAccount); // Replace this with actual database logic
    res.status(201).json(newAccount);
  };
  