import * as firebase from 'firebase/app';
import 'firebase/auth';

function _getCollection(documentRequest, noTimestamp=true){
    const db = firebase.firestore();
    noTimestamp ? db.settings({timestampsInSnapshots: true}) : db.settings({timestampsInSnapshots: false});
    return new Promise(resolve=> {
        //console.log(documentRequest);
        getCollections(documentRequest, db).then(function(requested){
            try{
                resolve(requested);
            }catch(e){
                console.assert(e);
                resolve(false);
            }
        });
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
            resolve(data);
        }).catch(function(error){
            //console.log(error);
        });
    }).catch(function(error){
        //console.log(error);
    });
}
export { _getCollection }