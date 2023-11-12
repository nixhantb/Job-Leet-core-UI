## Contributing

We welcome contributions to make Job Leet even better! If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feat/your-name/issue-number

- Example
```git checkout -b feat/johndoe/42```

Make your changes. Please adhere to the following guidelines:

### Branch Naming Convention:

- Always create a new branch from the main branch.
- Branch naming convention: ```feat/your-name/issue-number```.

### Code Changes:

- Do not directly write HTML tags in .tsx files. Instead, go to the config folder, then data folder, and find the relevant file (e.g., ```home.ts```). Write your content there and import it into the .tsx file.

- Avoid directly writing colors inside styles files. Import the ```basetheme.ts``` file and use colors from there.

### Commit your changes:
Use proper git message conventions. [Read](https://www.conventionalcommits.org/en/v1.0.0/)


```git commit -m "feat: Add Issue number here"```

Example 

```git commit -m "fix: accessibility issue in the submit button. This fix resolves Issue #21 ```

### Issues
If you encounter any issues or have suggestions, feel free to open an issue [here](https://github.com/Nix-code/Job-Leet-core-UI/issues)

Happy coding! 🚀

Comment your any concerns on the issue itself. Will try to resolve as soon as possible.
