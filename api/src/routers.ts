export const routers = (app) => {
    app.get("/api/", async (req, res) => {
        await res.send("123");
    });

    app.get("/api/todos", async (req, res) => {
        await res.json([
            { name: "Buy some milk" },
            { name: "Buy some oil" },
            { name: "Buy some chees" },
            { name: "Buy some bread" },
        ]);
    });

    // route with dynamic parameter
    app.get("/api/user/", async (req, res) => {
        await res.json([
            { id: 0, name: "Jim Doe", phone: "12425323" },
        ]);
    });
}