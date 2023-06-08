import data from "./data/data"

export function FetchData(uri, mock = true){
    if(!mock){
        //Récuperation via l'API
        return fetch('http://localhost:3001' + uri)
        .then(response => {
            return response.json();
        })
    }else{
        //Récuperation via le mock
        const params = uri.split('/');
        const id = parseInt(params[2]);
        const res = {};

        if(params.length > 3){
            //Récuperation des données spécifiques (user/${userId}/{endpoint}) avec params[3] = {endpoint}
            switch(params[3]){
                case "activity": res.data = getUserActivityById(id); break;
                case "average-sessions": res.data = getUserAverageSession(id); break;
                case "performance": res.data = getUserPerformance(id); break;
                default: res.data = {}; break;
            }
        }else{
            //Récuperation des données générales (/user/${userId})
            res.data = getUserById(id);
        }

        const promise = new Promise((resolve, reject) => {
            resolve(res);
        });
        return promise;
    }
}
    
const getUserById = id => data.USER_MAIN_DATA
    .filter(user => user.id === id)
    .shift()

const getUserActivityById = id => data.USER_ACTIVITY
    .filter(userActivity => userActivity.userId === id)
    .shift()

const getUserAverageSession = id => data.USER_AVERAGE_SESSIONS
    .filter(userActivity => userActivity.userId === id)
    .shift()

const getUserPerformance = id => data.USER_PERFORMANCE
    .filter(userPerformance => userPerformance.userId === id)
    .shift()
