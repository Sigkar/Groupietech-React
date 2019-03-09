import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
//import { addMinutes } from 'date-fns';
async function createDoc(_postData){
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    console.log(_postData);
    if (user) {
        let doc = db.collection('posts').doc(user.providerData[0]['uid']);
        doc.get().then(function(doc){
            if(doc.exists){
                console.log("Doc exists! - ");
                console.log(doc.data());
                const post = {
                    comments: [],
                    title: _postData.title,
                    desc: _postData.desc,
                    posted_by: user.providerData[0]['uid'],
                    tcr: Math.round(Date.now()/1000),
                    tup: Math.round(Date.now()/1000)
                };
                console.log(post);
                db.collection('posts').doc(user.providerData[0]['uid']).update({
                    postData: firebase.firestore.FieldValue.arrayUnion(post),
                }).catch(function(e){
                    console.assert(e);
                });
                console.log("Should have posted...");
            }else{
                console.log("No such document - Creating");
                db.collection('posts').doc(user.providerData[0]['uid']).set({
                    postData: [],
                });
                /*
                var arrUnion = washingtonRef.update({
                    regions: admin.firestore.FieldValue.arrayUnion('greater_virginia')
                });
                */
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    } else {
        console.log("User is not authoirzed or allowed to make this action");
    }
    
    
};

export { createDoc }