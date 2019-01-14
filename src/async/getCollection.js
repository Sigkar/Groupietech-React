import * as firebase from 'firebase/app';
import 'firebase/auth';

async function _getCollection(documentRequest){
    const db = firebase.firestore();
    db.settings({
        timestampsInSnapshots: true
    });
    getCollections(documentRequest, db).then(function(result){
        try{
            return result;
        }catch(e){
            console.assert(e);
        }
    });
}
function getCollections (documentRequest, db) {
    let data = [];
    let _id, _content;
    return new Promise(resolve => {
        db.collection(documentRequest).get().then((querySnapshot)=> {
            
            querySnapshot.forEach(function(doc) {
              data.push({id: doc.id, content: doc.data()});
            });
            console.log(data);
            resolve(data);
        }).catch(function(error){
            console.log(error);
        });
    }).catch(function(error){
        console.log(error);
    });
}
export { _getCollection }