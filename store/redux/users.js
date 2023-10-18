import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [ {
            id: 0,
            username: "John",
            behaviorLogs: [

            ]
        }
        ], 
    },

    reducers: {
        addUser: (state, action) => {

            var exists = false;

            for (var i = 0; i < state.users.length; i++)
            {
                if (state.users[i].username == (action.payload.username))
                {
                    exists = true;
                }
            }

            if (exists == false)
            {


                var newId = 0;

                if (state.users.length > 0)
                {

                for (var i = 0; i < state.users.length; i++)
                {
                    newId = state.users[i].id;
                }

                newId = newId + 1;
            }



            state.users.push({
                id: newId,
                username: action.payload.username,
                behaviorLogs: [
                ]
            });

            state.users[newId].behaviorLogs.push({
                id: Math.random().toString(),
                name: "Go for a walk",
                icon: "TEST",
                count: 0,
                goalCount: 40,
                memo: "",
                date: "2023-10-16",
                type: "YES"
            });
            state.users[newId].behaviorLogs.push({
                id: Math.random().toString(),
                name: "Healthy eating",
                icon: "TEST",
                count: 0,
                goalCount: 30,
                memo: "",
                date: "2023-10-16",
                type: "YES"
            });
            state.users[newId].behaviorLogs.push({
                id: Math.random().toString(),
                name: "Read a book",
                icon: "TEST",
                count: 0,
                goalCount: 100,
                memo: "",
                date: "2023-10-14",
                type: "YES"
            });
            state.users[newId].behaviorLogs.push({
                id: Math.random().toString(),
                name: "Test2",
                icon: "TEST",
                count: 0,
                goalCount: 40,
                memo: "",
                date: "2023-10-12",
                type: "YES"
            });
        


            }


        },
        removeUser: (state, action) => {
            state.users.splice(state.users.indexOf(action.payload.id), 1);

        },

        addBehavior: (state, action) => {

            var index = 0;

            for (var i = 0; i < state.users.length ; i++)
            {                
                if (state.users[i].username == (action.payload.username)) {
                    index = i;
                }
            }


            state.users[index].behaviorLogs.push({
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                count: action.payload.count,
                goalCount: action.payload.goalCount,
                memo: action.payload.memo,
                date: action.payload.date,
                type: action.payload.type,
            });
        },
        
        incrementBehavior: (state, action) => {
            

            var index = 0;
            var behaviorIndex = 0;

            for (var i = 0; i < state.users.length ; i++)
            {                
                if (state.users[i].username == (action.payload.username)) {
                    index = i;
                }
            }

            for (var i = 0; i < state.users[index].behaviorLogs.length ; i++)
            {                
                if (state.users[index].behaviorLogs.name == (action.payload.behaviorName)) {
                    behaviorIndex = i;
                }
            }



            state.users[index].behaviorLogs[behaviorIndex].count++;


        },

        decrementBehavior: (state, action) => {
            

            var index = 0;
            var behaviorIndex = 0;

            for (var i = 0; i < state.users.length ; i++)
            {                
                if (state.users[i].username == (action.payload.username)) {
                    index = i;
                }
            }

            for (var i = 0; i < state.users[index].behaviorLogs.length ; i++)
            {                
                if (state.users[index].behaviorLogs.name == (action.payload.behaviorName)) {
                    behaviorIndex = i;
                }
            }


            if (state.users[index].behaviorLogs[behaviorIndex].count > 0)
            {
            state.users[index].behaviorLogs[behaviorIndex].count--;
            }


        },
    }
});

export const addUser = usersSlice.actions.addUser;
export const removeUser = usersSlice.actions.removeUser;
export const addUserBehavior = usersSlice.actions.addBehavior;
export const incrementBehavior = usersSlice.actions.incrementBehavior;
export const decrementBehavior = usersSlice.actions.decrementBehavior;


export default usersSlice.reducer;

