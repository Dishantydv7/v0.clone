 const readableCode = useMakeCopilotReadable(codeToDisplay);

 const generateCode = new CopilotTask({
    instructions: codeCommand,
    actions: [
      {
        name: "generateCode",
        description: "Create Code Snippet with React.js, tailwindcss.",
        parameters: [
          {
            name: "code",
            type: "string",
            description: "Code to be generated",
            required: true,
          },
        ],
        handler: async ({ code }) => {
          setCode((prev) => [...prev, code]);
          setCodeToDisplay(code);
        },
      },
    ],
  });

  const context = useCopilotContext();