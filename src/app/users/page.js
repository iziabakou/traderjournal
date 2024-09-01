import { db } from "../../db/index";

import { Users as UsersTable } from "../../db/schema";



export default async function UsersPage() {

    const usersList = await db.select()
        .from(UsersTable);

    return <div className="dark:text-white">
        {usersList.map(user => {
            return <div key={user.id}>
                {user.name} {user.email}
            </div>
        })}
    </div>
}