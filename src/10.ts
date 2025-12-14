type Profile = {
    name: string;
    settings?: {
        theme: "dark" | "light";
        notifications: boolean;
    };
};

const profiles: Profile[] = [
    { name: "Bob" },
    { name: "Carla", settings: { theme: "dark", notifications: true } }
];

profiles.forEach(p => {
    console.log(p.name.toUpperCase());
});