

// user data demo 
// use type union 
type Role = "admin" | "user"
interface User {
    name: string;
    role: Role
}

export const userRole: User = {
    name: "Rohan",
    role: "user"
}